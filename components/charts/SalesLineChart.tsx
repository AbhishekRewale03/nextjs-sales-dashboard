
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { SalesDataItem } from "@/Data/salesData";

type Props = {
  data: SalesDataItem[];
};

const SalesLineChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line dataKey="sales" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
