import { useState } from "react";

const names = ["Anil Kumar", "Vasundhara", "Rahul Sharma", "Anil Singh"];

export default function SearchList() {
  const [q, setQ] = useState("");

  const filtered = names.filter((n) =>
    n.toLowerCase().includes(q.toLowerCase()),
  );

  const highlight = (text) => {
    if (!q) return text;
    return text.split(new RegExp(`(${q})`, "gi")).map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <span key={i} className="font-bold bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="p-4 border rounded">
      <input
        className="border p-2 w-full mb-2"
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search name"
      />
      <p>Results: {filtered.length}</p>
      {filtered.length
        ? filtered.map((n) => <div key={n}>{highlight(n)}</div>)
        : "No matches found"}
    </div>
  );
}
