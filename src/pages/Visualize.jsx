import React, { useState } from "react";
const tabs = [
  "Confusion Matrix",
  "Feature Importance",
  "Heatmap",
  "Time Series",
  "Network Graph",
];

export default function Visualize() {
  const [tab, setTab] = useState(0);
  return (
    <div className="bg-white shadow rounded p-6 space-y-4">
      <h2 className="text-xl font-semibold">Visualizations</h2>
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`px-3 py-1 rounded whitespace-nowrap ${
              tab === i ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="h-64 flex items-center justify-center text-gray-400 border rounded">
        {tabs[tab]} placeholder chart
      </div>
    </div>
  );
}