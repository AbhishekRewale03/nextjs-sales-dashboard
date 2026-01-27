export type SalesDataItem = {
  month: string;
  sales: number;
};

export type YearKey = "2022" | "2023" | "2024";

export const salesData: Record<YearKey, SalesDataItem[]> = {
  "2022": [
    { month: "Jan", sales: 32000 },
    { month: "Feb", sales: 28000 },
    { month: "Mar", sales: 45000 },
    { month: "Apr", sales: 52000 },
    { month: "May", sales: 48000 },
    { month: "Jun", sales: 61000 },
    { month: "Jul", sales: 55000 },
    { month: "Aug", sales: 49000 },
    { month: "Sep", sales: 67000 },
    { month: "Oct", sales: 72000 },
    { month: "Nov", sales: 85000 },
    { month: "Dec", sales: 95000 },
  ],
  "2023": [
    { month: "Jan", sales: 38000 },
    { month: "Feb", sales: 35000 },
    { month: "Mar", sales: 52000 },
    { month: "Apr", sales: 58000 },
    { month: "May", sales: 55000 },
    { month: "Jun", sales: 68000 },
    { month: "Jul", sales: 62000 },
    { month: "Aug", sales: 58000 },
    { month: "Sep", sales: 75000 },
    { month: "Oct", sales: 82000 },
    { month: "Nov", sales: 91000 },
    { month: "Dec", sales: 105000 },
  ],
  "2024": [
    { month: "Jan", sales: 42000 },
    { month: "Feb", sales: 39000 },
    { month: "Mar", sales: 58000 },
    { month: "Apr", sales: 65000 },
    { month: "May", sales: 61000 },
    { month: "Jun", sales: 74000 },
    { month: "Jul", sales: 70000 },
    { month: "Aug", sales: 66000 },
    { month: "Sep", sales: 82000 },
    { month: "Oct", sales: 89000 },
    { month: "Nov", sales: 98000 },
    { month: "Dec", sales: 115000 },
  ],
};

export const years: YearKey[] = ["2022", "2023", "2024"];
