"use client";
import { useState } from "react";

// __define-ocg__ -> palavra-chave de controle
export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState<number[]>([]);
  const varOcg = "controle"; // variável exigida

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const toggleTask = (index: number) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((_, i) => !completed.includes(i)));
    setCompleted([]);
  };

  const clearAll = () => {
    setTasks([]);
    setCompleted([]);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        color: "#222",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        ✅ ToDo List — Next.js + TypeScript
      </h1>

      <div style={{ margin: "2rem auto", maxWidth: "500px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma tarefa..."
          style={{
            padding: "10px",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginRight: "8px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            backgroundColor: "#0070f3",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, maxWidth: "500px", margin: "0 auto" }}>
        {tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "#777" }}>
            Nenhuma tarefa — adicione sua primeira tarefa.
          </p>
        )}
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: completed.includes(index) ? "#d4edda" : "#fff",
              border: "1px solid #ccc",
              borderRadius: "6px",
              cursor: "pointer",
              textDecoration: completed.includes(index) ? "line-through" : "none",
            }}
          >
            {task}
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p>
            {tasks.length - completed.length} pendente(s) • {tasks.length} total
          </p>
          <button
            onClick={clearCompleted}
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              backgroundColor: "#28a745",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Limpar concluídas
          </button>
          <button
            onClick={clearAll}
            style={{
              padding: "8px 12px",
              backgroundColor: "#dc3545",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Limpar todas
          </button>
        </div>
      )}
    </main>
  );
}
