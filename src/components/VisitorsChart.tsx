import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface VisitorData {
  yearMonth: number;
  visitors: number;
}

interface Props {
  data: VisitorData[];
}

const formatMonth = (yearMonth: number) => {
  const year = Math.floor(yearMonth / 100);
  const month = yearMonth % 100;
  return `${year}.${month.toString().padStart(2, '0')}`;
};

export default function MonthlyVisitorsChart({ data }: Props) {
  const formattedData = data.map(item => ({
    ...item,
    label: formatMonth(item.yearMonth),
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitors" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
