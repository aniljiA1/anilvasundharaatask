import { useEffect, useRef, useState } from "react";
import {
  saveToStorage,
  getFromStorage,
  removeFromStorage,
} from "../../utils/helper";

const STORAGE_KEY = "countdown_timer";

export default function CountdownTimer() {
  const [inputSeconds, setInputSeconds] = useState(10);
  const [timeLeft, setTimeLeft] = useState(10000);
  const [status, setStatus] = useState("idle");
  const intervalRef = useRef(null);

  useEffect(() => {
    const saved = getFromStorage(STORAGE_KEY);
    if (!saved) return;

    const remaining = saved.endTime - Date.now();
    if (remaining > 0) {
      setTimeLeft(remaining);
      setStatus(saved.status);
    } else {
      setTimeLeft(0);
      setStatus("completed");
    }
  }, []);

  useEffect(() => {
    if (status !== "running") return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 10) {
          clearInterval(intervalRef.current);
          setStatus("completed");
          removeFromStorage(STORAGE_KEY);
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(intervalRef.current);
  }, [status]);

  const start = () => {
    const endTime = Date.now() + inputSeconds * 1000;
    saveToStorage(STORAGE_KEY, { endTime, status: "running" });
    setTimeLeft(inputSeconds * 1000);
    setStatus("running");
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    saveToStorage(STORAGE_KEY, {
      endTime: Date.now() + timeLeft,
      status: "paused",
    });
    setStatus("paused");
  };

  const resume = () => {
    saveToStorage(STORAGE_KEY, {
      endTime: Date.now() + timeLeft,
      status: "running",
    });
    setStatus("running");
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    removeFromStorage(STORAGE_KEY);
    setTimeLeft(inputSeconds * 1000);
    setStatus("idle");
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-lg">Countdown Timer</h2>

      <input
        type="number"
        min="1"
        disabled={status === "running"}
        value={inputSeconds}
        onChange={(e) => setInputSeconds(Number(e.target.value))}
        className="border p-1 mt-2"
      />

      <p className="mt-2">Time: {(timeLeft / 1000).toFixed(2)}s</p>
      <p>Status: {status}</p>

      <div className="flex gap-2 mt-2">
        {status === "idle" && <button onClick={start}>Start</button>}
        {status === "running" && <button onClick={pause}>Pause</button>}
        {status === "paused" && <button onClick={resume}>Resume</button>}
        <button onClick={reset}>Reset</button>
      </div>

      {status === "completed" && (
        <p className="text-red-500 mt-2">⏰ Time’s up!</p>
      )}
    </div>
  );
}
