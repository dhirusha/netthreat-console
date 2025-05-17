import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function Upload() {
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(file ? `Pretend uploading: ${file.name}` : "Please choose a file first");
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FiUploadCloud /> Upload files
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-full" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
    </div>
  );
}