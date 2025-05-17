// src/pages/Reports.jsx
import React from "react";

export default function Reports() {
  return (
    <div className="bg-white shadow rounded p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>

      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="px-4 py-2">Report ID</th>
            <th className="px-4 py-2">Date/Time</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Summary</th>
            <th className="px-4 py-2">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2">RPT-2024-001</td>
            <td className="px-4 py-2">2024-10-27 10:39</td>
            <td className="px-4 py-2">Network</td>
            <td className="px-4 py-2">DDOS attack detected</td>
            <td className="px-4 py-2 text-blue-600">PDF</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}