
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { SalesDataItem } from "@/Data/salesData";

type Props = {
  data: SalesDataItem[];
};

const SalesBarChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesBarChart;
