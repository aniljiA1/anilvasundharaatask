import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function TodoApp() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false, priority }]);
    setText("");
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "active"
        ? !task.completed
        : task.completed,
  );

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Todo App</h2>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 flex-1"
        />
        <select onChange={(e) => setPriority(e.target.value)}>
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>
        <button onClick={addTask} className="bg-blue-500 text-white px-3">
          Add
        </button>
      </div>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTasks.length === 0 && (
        <p className="text-gray-500 mt-2">No tasks found</p>
      )}

      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}
