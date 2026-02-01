"use client";

import { useState } from "react";
import { salesData, YearKey } from "@/Data/salesData";

import SalesLineChart from "@/components/charts/SalesLineChart";
import SalesBarChart from "@/components/charts/SalesBarChart";
import SalesPieChart from "@/components/charts/SalesPieChart";

import { DollarSign, Calendar, Filter } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function DashboardPage() {
  const [year, setYear] = useState<YearKey>("2025");
  const [chartType, setChartType] = useState<"bar" | "pie" | "line">("bar");
  const [minSales, setMinSales] = useState<string>("");

  const minSalesNumber = Number(minSales) || 0;

  const data = salesData[year].filter((d) => d.sales >= minSalesNumber);

  const totalSales = data.reduce((sum, d) => sum + d.sales, 0);

  const handleReset = () => {
    setYear("2025");
    setChartType("bar");
    setMinSales("");
  };

  const years: YearKey[] = ["2023", "2024", "2025"];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 sm:p-6">
      <div className="w-full max-w-6xl mx-auto space-y-8 px-3 sm:px-6">
        {/* Header */}
        <div className=" space-y-2 pb-6 border-b border-slate-200">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Sales Dashboard
          </h1>
          <p className="text-slate-600 text-xs sm:text-base mt-3">
            Track and analyze yearly sales performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total Sales ({year})
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                ${totalSales}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full flex    items-center justify-center  bg-slate-100">
              <DollarSign className="h-6 w-6 text-[#0969da]" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Active Months
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {data.length}
              </p>
            </div>

            <div className="h-12 w-12 rounded-full flex    items-center justify-center  bg-slate-100">
              <Calendar className="h-6 w-6 text-[#0969da]" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Min Sales Filter
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                ${minSales || 0}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full flex    items-center justify-center bg-slate-100">
              <Filter className="h-6 w-6 text-[#0969da]" />
            </div>
          </div>
        </div>

        {/* Filters  */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-4 items-end">
            {/* Select Year */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Select Year
              </p>

              <Select value={year} onValueChange={(v) => setYear(v as YearKey)}>
                <SelectTrigger
                  className="w-full px-4 py-5 text-sm font bg-white border-2 border-slate-300 text-slate-900 rounded-lg hover:border-slate-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 cursor-pointer"
                >
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  className="z-50 w-[--radix-select-trigger-width] bg-white border border-slate-200 rounded-lg shadow-lg"
                >
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Min Sales */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Min Sales ($)
              </p>
              <input
                type="number"
                value={minSales}
                onChange={(e) => setMinSales(e.target.value)}
                placeholder="Enter amount"
                className="w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5
                   text-sm font text-slate-900 placeholder-slate-400
                   transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/10
                   hover:border-slate-400"
              />
            </div>

            {/* Chart Type */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Chart Type
              </p>

              <Select
                value={chartType}
                onValueChange={(v) => setChartType(v as "bar" | "pie" | "line")}
              >
                <SelectTrigger
                  className="w-full px-4 py-5 text-sm font-medium bg-white border-2 border-slate-300 text-slate-900 rounded-lg hover:border-slate-400
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 cursor-pointer"
                >
                  <SelectValue placeholder="Select Chart Type" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  className="z-50 w-[--radix-select-trigger-width] bg-white border border-slate-200 rounded-lg shadow-lg"
                >
                  <SelectItem value="bar">Bar Chart</SelectItem>
                  <SelectItem value="line">Line Chart</SelectItem>
                  <SelectItem value="pie">Pie Chart</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reset */}
            <div>
              <button
                onClick={handleReset}
                className="w-full rounded-lg bg-[#0969da] px-4 py-2.5
                   text-sm font-semibold text-white
                   transition-all hover:bg-blue-700
                   focus:outline-none focus:ring-2 focus:ring-blue-900/30"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-md">
          {chartType === "bar" ? (
            <SalesBarChart data={data} year={year} />
          ) : chartType === "line" ? (
            <SalesLineChart data={data} year={year} />
          ) : chartType === "pie" ? (
            <SalesPieChart data={data} year={year} />
          ) : null}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500">
          Showing {data.length} months for {year}
        </p>
      </div>
    </main>
  );
}
