import TodoApp from "./components/Todo/TodoApp";
import UserForm from "./components/Forms/UserForm";
import MultiProgressBar from "./components/Progress/MultiProgressBar";
import SearchList from "./components/Search/SearchList";
import CountdownTimer from "./components/Timer/CountdownTimer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <TodoApp />
        <UserForm />
        <MultiProgressBar />
        <CountdownTimer />
        <SearchList />
      </div>
    </div>
  );
}
