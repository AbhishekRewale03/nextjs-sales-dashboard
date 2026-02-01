import {
  LineChart,
  Line,
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

const SalesLineChart = ({ data, year }: Props) => {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-slate-900 mb-4">
        Sales Overview - {year}
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sales" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;
