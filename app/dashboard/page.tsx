"use client";

import { useState } from "react";
import { salesData, YearKey } from "@/Data/salesData";

import SalesLineChart from "@/components/charts/SalesLineChart";
import SalesBarChart from "@/components/charts/SalesBarChart";

export default function DashboardPage() {
  const [year, setYear] = useState<YearKey>("2024");
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [minSales, setMinSales] = useState<string>("");

  const minSalesNumber = Number(minSales) || 0;

  const data = salesData[year].filter((d) => d.sales >= minSalesNumber);

  const totalSales = data.reduce((sum, d) => sum + d.sales, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6">
      <div className="w-full max-w-6xl mx-auto space-y-8 px-3 sm:px-6">
        {/* Header */}
        <div className="text-center space-y-2 pb-6 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Sales Dashboard
          </h1>
          <p className="text-slate-600 text-xs sm:text-base">
            Track and analyze yearly sales performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Total Sales ({year})
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              ${totalSales}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Active Months
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              {data.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Min Sales Filter
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              ${minSales || 0}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* Year */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Year :
            </span>
            <select
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm ml-2 text-slate-900"
              value={year}
              onChange={(e) => setYear(e.target.value as YearKey)}
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          {/* Chart Type */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Chart Type :
            </span>
            <button
              onClick={() => setChartType("bar")}
              className={`px-4 py-2 rounded-lg text-sm text-slate-900 ${
                chartType === "bar"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300"
              }`}
            >
              Bar
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`px-4 py-2 rounded-lg text-sm text-slate-900 ${
                chartType === "line"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300"
              }`}
            >
              Line
            </button>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Min. Sales :
            </span>
            <input
              type="number"
              placeholder="Enter Min Sales"
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm ml-2 text-slate-900"
              value={minSales}
              onChange={(e) => setMinSales(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-md">
          {chartType === "bar" ? (
            <SalesBarChart data={data} />
          ) : (
            <SalesLineChart data={data} />
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500">
          Showing {data.length} months for {year}
        </p>
      </div>
    </main>
  );
}
