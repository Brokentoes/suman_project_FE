// pages/admin/recruit.tsx
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/useAuthStore';
import {
  fetchRecruitments,
  createRecruitment,
  updateRecruitment,
  deleteRecruitment,
  Recruitment,
  CreateRecruitmentData,
  UpdateRecruitmentData,
  ApiError
} from '@/lib/api/recruit';
import AdminHeader from '@/components/AdminHeader';
import { Shield, Users, MessageSquare, HelpCircle, Settings, BarChart3, Activity, Plus, RefreshCw, Eye, Edit3, Trash2, X, Calendar, FileText } from 'lucide-react';

interface FormData {
  title: string;
  description: string;
}

export default function RecruitPage() {
  const router = useRouter();
  const { isLoggedIn, init } = useAuthStore();

  // 상태 관리
  const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 모달 상태
  const [selected, setSelected] = useState<Recruitment | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  
  // 폼 데이터
  const [editData, setEditData] = useState<FormData>({ title: '', description: '' });
  const [newData, setNewData] = useState<FormData>({ title: '', description: '' });

  // 인증 체크
  // useEffect(() => {
  //   init();
  // }, [init]);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace('/admin/login');
  //   }
  // }, [isLoggedIn, router]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     loadRecruitments();
  //   }
  // }, [isLoggedIn]);

  // 에러 처리 헬퍼
  const handleError = useCallback((error: unknown, fallbackMessage: string) => {
    if (error && typeof error === 'object' && 'message' in error) {
      const apiError = error as ApiError;
      setError(apiError.message);
      return apiError.message;
    }
    setError(fallbackMessage);
    return fallbackMessage;
  }, []);

  // 성공 메시지 표시 후 에러 상태 클리어
  const showSuccessMessage = useCallback((message: string) => {
    alert(message);
    setError(null);
  }, []);

  // 채용공고 목록 불러오기
  const loadRecruitments = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchRecruitments();
      setRecruitments(data);
      setError(null);
    } catch (err) {
      handleError(err, '채용공고 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [handleError]);

  // 입력값 검증
  const validateForm = (data: FormData): boolean => {
    if (!data.title.trim()) {
      alert('제목을 입력해주세요.');
      return false;
    }
    if (!data.description.trim()) {
      alert('내용을 입력해주세요.');
      return false;
    }
    return true;
  };

  // 새 공고 생성
  const handleCreateSubmit = async () => {
    if (!validateForm(newData)) return;

    setLoading(true);
    try {
      const createData: CreateRecruitmentData = {
        title: newData.title.trim(),
        content: newData.description.trim()
      };
      
      await createRecruitment(createData);
      showSuccessMessage('채용공고가 성공적으로 등록되었습니다.');
      closeCreateModal();
      await loadRecruitments();
    } catch (err) {
      const errorMessage = handleError(err, '채용공고 등록에 실패했습니다.');
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 공고 수정
  const handleEditSubmit = async () => {
    if (!selected || !validateForm(editData)) return;

    setLoading(true);
    try {
      const updateData: UpdateRecruitmentData = {
        title: editData.title.trim(),
        content: editData.description.trim()
      };
      
      await updateRecruitment(selected.id, updateData);
      showSuccessMessage('채용공고가 성공적으로 수정되었습니다.');
      closeModal();
      await loadRecruitments();
    } catch (err) {
      const errorMessage = handleError(err, '채용공고 수정에 실패했습니다.');
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 공고 삭제
  const handleDelete = async (id: number) => {
    if (!confirm('정말로 이 채용공고를 삭제하시겠습니까?\n삭제된 공고는 복구할 수 없습니다.')) {
      return;
    }

    setLoading(true);
    try {
      await deleteRecruitment(id);
      showSuccessMessage('채용공고가 성공적으로 삭제되었습니다.');
      await loadRecruitments();
    } catch (err) {
      const errorMessage = handleError(err, '채용공고 삭제에 실패했습니다.');
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 상세보기/수정 모달 열기
  const handleView = (item: Recruitment, edit = false) => {
    setSelected(item);
    setEditMode(edit);
    setEditData({ title: item.title, description: item.content });
  };

  // 모달 닫기
  const closeModal = () => {
    setSelected(null);
    setEditMode(false);
    setEditData({ title: '', description: '' });
  };

  // 새 공고 모달 닫기
  const closeCreateModal = () => {
    setCreateModalOpen(false);
    setNewData({ title: '', description: '' });
  };

  // 새로고침
  const handleRefresh = () => {
    loadRecruitments();
  };

  // 페이지 접속시 GET요청
  useEffect(() => {
  loadRecruitments();
}, [loadRecruitments]);

  // if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AdminHeader />
      
      <div className="p-8 max-w-7xl mx-auto">
        {/* 페이지 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">채용공고 관리</h1>
              <p className="text-slate-300 mt-1">채용 공고를 효율적으로 관리하세요</p>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 text-slate-200 rounded-xl hover:bg-slate-600/50 disabled:opacity-50 transition-all duration-200 border border-slate-600/50 backdrop-blur-sm"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            <span>새로고침</span>
          </button>
        </div>

        {/* 액션 버튼 */}
        <div className="mb-8">
          <button
            onClick={() => setCreateModalOpen(true)}
            disabled={loading}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Plus className="h-5 w-5" />
            <span>새로운 공고 작성</span>
          </button>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 text-red-300 rounded-xl backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <X className="h-4 w-4" />
                <span>{error}</span>
              </span>
              <button
                onClick={() => setError(null)}
                className="text-red-400 hover:text-red-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* 로딩 표시 */}
        {loading && (
          <div className="mb-6 p-4 bg-blue-900/20 border border-blue-500/30 text-blue-300 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 animate-pulse" />
              <span>처리 중입니다...</span>
            </div>
          </div>
        )}

        {/* 공고 리스트 */}
        {recruitments.length === 0 && !loading ? (
          <div className="text-center py-16">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm inline-block">
              <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-300 text-lg">등록된 채용공고가 없습니다.</p>
              <p className="text-slate-500 text-sm mt-2">새로운 공고를 작성해보세요.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recruitments.map((item) => (
              <div key={item.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-700/50 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10 transform hover:scale-105">
                <h2 className="text-xl font-semibold mb-3 text-white line-clamp-2">{item.title}</h2>
                <div className="flex items-center space-x-2 text-slate-400 mb-4">
                  <Calendar className="h-4 w-4" />
                  <p className="text-sm">
                    게시일: {new Date(item.postedAt).toLocaleDateString('ko-KR')}
                  </p>
                </div>
                <p className="text-slate-300 mb-6 line-clamp-3 text-sm leading-relaxed">{item.content}</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleView(item, false)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm bg-slate-700/50 text-slate-200 hover:bg-slate-600/50 rounded-lg transition-all duration-200 border border-slate-600/50"
                  >
                    <Eye className="h-4 w-4" />
                    <span>상세보기</span>
                  </button>
                  <button
                    onClick={() => handleView(item, true)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-600/80 text-white hover:bg-blue-500/80 rounded-lg transition-all duration-200"
                  >
                    <Edit3 className="h-4 w-4" />
                    <span>수정</span>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={loading}
                    className="flex items-center space-x-1 px-3 py-2 text-sm bg-red-600/80 text-white hover:bg-red-500/80 disabled:opacity-50 rounded-lg transition-all duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>삭제</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 수정 or 상세보기 팝업 */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
                  {editMode ? (
                    <>
                      <Edit3 className="h-6 w-6 text-blue-400" />
                      <span>채용공고 수정</span>
                    </>
                  ) : (
                    <>
                      <Eye className="h-6 w-6 text-emerald-400" />
                      <span>채용공고 상세</span>
                    </>
                  )}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {editMode ? (
                <>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      제목 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-700/50 border border-slate-600/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={editData.title}
                      onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                      placeholder="제목을 입력하세요"
                      maxLength={100}
                    />
                    <p className="text-sm text-slate-400 mt-2">{editData.title.length}/100</p>
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-slate-300 mb-3">
                      내용 <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      className="w-full bg-slate-700/50 border border-slate-600/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      rows={10}
                      value={editData.description}
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      placeholder="내용을 입력하세요"
                      maxLength={2000}
                    />
                    <p className="text-sm text-slate-400 mt-2">{editData.description.length}/2000</p>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button 
                      onClick={closeModal} 
                      className="px-6 py-3 bg-slate-700/50 text-slate-200 rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600/50"
                    >
                      취소
                    </button>
                    <button
                      onClick={handleEditSubmit}
                      disabled={loading}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-all duration-200 shadow-lg"
                    >
                      {loading ? '수정 중...' : '수정 완료'}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-slate-400 mb-3">제목</h3>
                    <p className="text-xl text-white font-semibold">{selected.title}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-slate-400 mb-3">게시일</h3>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <p className="text-slate-300">{new Date(selected.postedAt).toLocaleDateString('ko-KR')}</p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-slate-400 mb-3">내용</h3>
                    <div className="whitespace-pre-wrap text-slate-200 bg-slate-700/30 p-6 rounded-xl border border-slate-600/30 leading-relaxed">
                      {selected.content}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={closeModal} 
                      className="px-6 py-3 bg-slate-700/50 text-slate-200 rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600/50"
                    >
                      닫기
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* 신규 작성 모달 */}
        {createModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
                  <Plus className="h-6 w-6 text-emerald-400" />
                  <span>새로운 채용공고 작성</span>
                </h2>
                <button
                  onClick={closeCreateModal}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  제목 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-700/50 border border-slate-600/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  value={newData.title}
                  onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                  placeholder="제목을 입력하세요"
                  maxLength={100}
                />
                <p className="text-sm text-slate-400 mt-2">{newData.title.length}/100</p>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  내용 <span className="text-red-400">*</span>
                </label>
                <textarea
                  className="w-full bg-slate-700/50 border border-slate-600/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows={10}
                  value={newData.description}
                  onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                  placeholder="내용을 입력하세요"
                  maxLength={2000}
                />
                <p className="text-sm text-slate-400 mt-2">{newData.description.length}/2000</p>
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={closeCreateModal} 
                  className="px-6 py-3 bg-slate-700/50 text-slate-200 rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600/50"
                >
                  취소
                </button>
                <button
                  onClick={handleCreateSubmit}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all duration-200 shadow-lg"
                >
                  {loading ? '등록 중...' : '등록'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
