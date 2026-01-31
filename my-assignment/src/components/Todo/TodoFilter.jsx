export default function TodoFilter({ filter, setFilter }) {
  const btn = (type) =>
    `px-3 py-1 border rounded ${
      filter === type ? "bg-blue-500 text-white" : ""
    }`;

  return (
    <div className="flex gap-2 mt-3">
      <button className={btn("all")} onClick={() => setFilter("all")}>
        All
      </button>
      <button className={btn("active")} onClick={() => setFilter("active")}>
        Active
      </button>
      <button
        className={btn("completed")}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
