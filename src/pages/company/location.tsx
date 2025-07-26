// location.tsx
import { motion, type Transition } from "framer-motion";
import { useState, useEffect, useRef, useCallback, useMemo } from "react"; // <-- useMemo 추가

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Head from "next/head";

const kakaoMapConfigs: {
  [key: string]: {
    latitude: number;
    longitude: number;
    level?: number;
    address: string;
  };
} = {
  본사: {
    latitude: 36.439533,
    longitude: 127.394547,
    level: 3,
    address: "대전광역시 대덕구 문평동 43-10",
  },
  천안지부: {
    latitude: 36.848807,
    longitude: 127.122367,
    level: 3,
    address: "충청남도 천안시 서북구 성성동 336-4 G1비즈캠퍼스 4F 401호",
  },
  시험센터: {
    latitude: 36.424057,
    longitude: 127.406167,
    level: 3,
    address: "대전광역시 유성구 테크노2로 187 B동 120호",
  },
};

const locationsData = [
  {
    key: "본사",
    title: "본사",
    addressSnippet: "대전광역시 대덕구 문평서로",
  },
  {
    key: "천안지부",
    title: "천안지부",
    address: "충청남도 천안시 서북구 성성동 336-4 G1비즈캠퍼스 4F 401호",
    addressSnippet: "G1 비즈캠퍼스 4F 401호",
  },
  {
    key: "시험센터",
    title: "시험센터",
    addressSnippet: "대전광역시 유성구 테크노2로",
  },
];

export default function LocationPage() {
  const [openMap, setOpenMap] = useState<string | null>(null);
  const mapRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const kakaoMaps = useRef<{ [key: string]: kakao.maps.Map | null }>({});
  const infoWindows = useRef<{ [key: string]: kakao.maps.InfoWindow | null }>(
    {}
  );
  const currentOpenInfowindow = useRef<kakao.maps.InfoWindow | null>(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const mapTransition = useMemo(
    () =>
      ({
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5,
      } as Transition),
    [] // 의존성 없음: 객체 내부의 값들이 변하지 않으므로 한 번만 생성.
  );

  const KAKAO_MAP_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY;

  const initKakaoMap = useCallback((locationKey: string) => {
    const config = kakaoMapConfigs[locationKey];
    const container = mapRefs.current[locationKey];

    if (kakaoMaps.current[locationKey]) {
      return;
    }

    if (config && container && window.kakao && window.kakao.maps) {
      const options: kakao.maps.MapOptions = {
        center: new window.kakao.maps.LatLng(config.latitude, config.longitude),
        level: config.level,
      };
      const map = new window.kakao.maps.Map(container, options);
      kakaoMaps.current[locationKey] = map;

      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      const markerPosition = new window.kakao.maps.LatLng(
        config.latitude,
        config.longitude
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });

      const infowindowContent =
        `<div style="padding:10px;font-size:14px;font-weight:bold;color:#333;">` +
        `<div style="margin-bottom:5px;">${locationKey}</div>` +
        `<div style="font-size:12px;color:#666;">${config.address}</div>` +
        `</div>`;

      const infowindow = new window.kakao.maps.InfoWindow({
        content: infowindowContent,
        removable: true,
      });

      infoWindows.current[locationKey] = infowindow;

      window.kakao.maps.event.addListener(marker, "click", function () {
        if (currentOpenInfowindow.current) {
          currentOpenInfowindow.current.close();
        }
        infowindow.open(map, marker);
        currentOpenInfowindow.current = infowindow;
      });

      window.kakao.maps.event.addListener(map, "click", function () {
        if (currentOpenInfowindow.current) {
          currentOpenInfowindow.current.close();
          currentOpenInfowindow.current = null;
        }
      });

      console.log(`${locationKey} Kakao Map initialized.`);
    } else {
      console.warn(
        `[[initKakaoMap]] Failed to initialize Kakao Map for ${locationKey}. Config, container or Kakao API not ready.`
      );
    }
  }, []);

  const handleToggleMap = useCallback(
    (location: string) => {
      setOpenMap((prevOpenMap) => {
        const nextOpenMap = prevOpenMap === location ? null : location;

        if (!nextOpenMap && currentOpenInfowindow.current) {
          currentOpenInfowindow.current.close();
          currentOpenInfowindow.current = null;
        }

        if (nextOpenMap && kakaoMaps.current[nextOpenMap]) {
          setTimeout(() => {
            kakaoMaps.current[nextOpenMap]?.relayout();
            const config = kakaoMapConfigs[nextOpenMap];
            kakaoMaps.current[nextOpenMap]?.setCenter(
              new window.kakao.maps.LatLng(config.latitude, config.longitude)
            );
          }, (mapTransition.duration ?? 0.5) * 1000 + 50);
        }
        return nextOpenMap;
      });
    },
    [mapTransition, kakaoMaps, currentOpenInfowindow]
  );

  useEffect(() => {
    if (
      KAKAO_MAP_APP_KEY &&
      typeof window !== "undefined" &&
      !window.kakao?.maps
    ) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&libraries=services&autoload=false`; // libraries=services 추가
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          console.log("Kakao Map Script Loaded and Ready on LocationPage.");
          Object.keys(kakaoMapConfigs).forEach((key) => {
            initKakaoMap(key);
          });
        });
      };
      script.onerror = (error) => {
        console.error("Kakao Map Script failed to load:", error);
      };
      document.head.appendChild(script);
    } else if (
      KAKAO_MAP_APP_KEY &&
      typeof window !== "undefined" &&
      window.kakao?.maps
    ) {
      Object.keys(kakaoMapConfigs).forEach((key) => {
        initKakaoMap(key);
      });
    }
  }, [KAKAO_MAP_APP_KEY, initKakaoMap]);

  return (
    <>
      <Head>
        <title>오시는길 | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title="시설 위치"
          subtitle="Location"
          backgroundImage="/images/company_hero.png"
        />
        <BreadcrumbSection path="회사소개 > 시설 위치 / 찾아오시는 길" />
        <div className="content-wrapper py-20 px-4 md:px-8 bg-white text-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <h2 className="text-3xl font-bold mb-8">찾아오시는 길</h2>

              <div className="space-y-0 border-t-2 border-gray-900">
                {" "}
                {locationsData.map((location, index) => (
                  <div
                    key={location.key}
                    className={`p-6 border-b border-gray-300`}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => handleToggleMap(location.key)}
                    >
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {location.title}
                        </h3>
                        <p className="text-gray-700">
                          {location.addressSnippet}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-8 h-8 text-blue-600 transition-transform duration-300 ${
                          openMap === location.key ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M11.47 11.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L12 13.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openMap === location.key ? "250px" : "0px", // 닫혔을 때 높이를 0으로 설정
                        opacity: openMap === location.key ? 1 : 0, // 닫혔을 때 불투명도를 0으로 설정
                      }}
                      transition={mapTransition}
                      className="mt-4 overflow-hidden relative"
                    >
                      <div
                        ref={(el) => {
                          mapRefs.current[location.key] = el;
                        }}
                        className="w-full h-full absolute top-0 left-0"
                        style={{ backgroundColor: "lightgray" }}
                      >
                        {openMap !== location.key && (
                          <div
                            className="absolute inset-0 z-10"
                            style={{ pointerEvents: "auto" }}
                          ></div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <hr className="my-8 border-gray-200 w-full" />
      </Layout>
    </>
  );
}
