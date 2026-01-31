import { useState } from "react";

export default function MultiProgressBar() {
  const [values, setValues] = useState([20, 40, 60]);

  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <div className="p-4 border">
      {values.map((v, i) => (
        <div key={i} className="h-2 bg-gray-200 mt-1">
          <div
            className="h-2 bg-blue-400 transition-all"
            style={{ width: `${v}%` }}
          />
        </div>
      ))}

      <div className="h-4 bg-gray-200 mt-2">
        <div
          className={`h-4 transition-all ${avg < 40 ? "bg-red-500" : avg > 70 ? "bg-green-500" : "bg-yellow-500"}`}
          style={{ width: `${avg}%` }}
        />
      </div>
    </div>
  );
}
