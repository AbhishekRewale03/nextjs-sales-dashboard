import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SalesDataItem } from "@/Data/salesData";

type Props = {
  data: SalesDataItem[];
  year: string;
};

const SalesBarChart = ({ data, year }: Props) => {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-slate-900 mb-4">
        Sales Overview - {year}
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#0969da" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;
