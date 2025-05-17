import React from 'react';
import { FiArrowUpRight, FiRefreshCw } from 'react-icons/fi';

// ──────────────────────────────
// Stat card component
// ──────────────────────────────
const StatCard = ({ label, value, delta, icon: Icon }) => (
  <div className="flex-1 min-w-[12rem] bg-white shadow rounded p-4">
    <div className="flex items-center justify-between mb-1 text-sm text-gray-500">
      <span>{label}</span>
      {Icon && <Icon className="w-4 h-4 text-gray-400" />}
    </div>
    <h3 className="text-2xl font-bold">{value}</h3>
    {delta && (
      <p className="flex items-center gap-1 text-xs text-green-600">
        <FiArrowUpRight /> {delta}
      </p>
    )}
  </div>
);

// ──────────────────────────────
// Dashboard page
// ──────────────────────────────
export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Welcome Back, User</h2>

      {/* ─── Statistics row */}
      <div className="flex flex-wrap gap-4">
        <StatCard label="Total uploads"    value="275"  delta="+15% this week"          icon={FiRefreshCw} />
        <StatCard label="Threats detected" value="48"   delta="+3% this week"           icon={FiRefreshCw} />
        <StatCard label="Safe entries"     value="1,850" delta="-0.9% this week"        icon={FiRefreshCw} />
        <StatCard label="CPS anomalies"    value="12"    delta="+1.5% this week"         icon={FiRefreshCw} />
      </div>

      {/* ─── Charts row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Detection rate area chart placeholder */}
        <div className="flex-1 bg-white shadow rounded p-4 flex items-center justify-center text-gray-400 h-64">
          Detection Rate Over Time (add chart here)
        </div>
        {/* Anomaly pie chart placeholder */}
        <div className="w-full lg:w-80 bg-white shadow rounded p-4 flex items-center justify-center text-gray-400 h-64">
          Anomaly Distribution Pie Chart
        </div>
      </div>

      {/* ─── Threat list table */}
      <div className="bg-white shadow rounded">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold">Threat List</h3>
          <select className="text-sm border-gray-300 rounded">
            <option>Monthly</option>
            <option>Weekly</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Date/Time</th>
                <th className="px-4 py-2">Source</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Severity</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">THRT-2024-001</td>
                <td className="px-4 py-2">2024-10-27&nbsp;10:30</td>
                <td className="px-4 py-2">Network</td>
                <td className="px-4 py-2">DDOS attack detected on port 80</td>
                <td className="px-4 py-2 text-red-600 font-medium">High</td>
                <td className="px-4 py-2"><span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded">New</span></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">THRT-2024-002</td>
                <td className="px-4 py-2">2024-10-27&nbsp;11:15</td>
                <td className="px-4 py-2">Malware</td>
                <td className="px-4 py-2">Suspicious executable detected in downloads</td>
                <td className="px-4 py-2 text-yellow-600 font-medium">Medium</td>
                <td className="px-4 py-2"><span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Analysed</span></td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">THRT-2024-006</td>
                <td className="px-4 py-2">2024-10-27&nbsp;15:30</td>
                <td className="px-4 py-2">CPS</td>
                <td className="px-4 py-2">Unusual temperature increase in device B</td>
                <td className="px-4 py-2 text-yellow-600 font-medium">Medium</td>
                <td className="px-4 py-2"><span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Analysed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}