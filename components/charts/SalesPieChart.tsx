import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { SalesDataItem } from "@/Data/salesData";

type Props = {
  data: SalesDataItem[];
  year: string;
};

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28BFE",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#C9CBCF",
];


const SalesPieChart = ({ data, year }: Props) => {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-slate-900 mb-4">
        Sales Overview - {year}
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesPieChart;
