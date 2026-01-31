import { getPriorityColor } from "../../utils/helper";

export default function TodoItem({ task, tasks, setTasks }) {
  const toggleComplete = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const remove = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="flex items-center justify-between border p-2 mt-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.text}
        </span>
        <span
          className={`text-xs px-2 py-1 rounded ${getPriorityColor(
            task.priority,
          )}`}
        >
          {task.priority}
        </span>
      </div>

      <button onClick={remove} className="text-red-500 font-bold">
        ✕
      </button>
    </div>
  );
}
