import { useEffect, useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
const [editTitle, setEditTitle] = useState("");

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSave = async () => {
    if (!title.trim()) return;

    const response = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });


    const data = await response.json();

    console.log(data);

    setTitle("");
    getTodos();
  };

  const handleDelete = async (id: number) => {
  await fetch(`http://localhost:5000/todos/${id}`, {
    method: "DELETE",
  });

  getTodos();
};
const handleEdit = (id: number, currentTitle: string) => {
  setEditingId(id);
  setEditTitle(currentTitle);
};
const handleComplete = async (id: number) => {
  await fetch(`http://localhost:5000/todos/${id}/complete`, {
    method: "PATCH",
  });

  getTodos();
};

const handleEditSave = async (id: number) => {
  if (!editTitle.trim()) return;

  await fetch(`http://localhost:5000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: editTitle,
    }),
  });

  setEditingId(null);
  setEditTitle("");
  getTodos();
};

  return (
    <div className="page">
      <main className="notebook">
        <div className="notebook-header">
          <div>
            
            <h1>Let’s Get It Done!!!</h1>
          </div>

          <div className="date">
            <span>Date</span>
            <div className="date-line"></div>
          </div>
        </div>

        <section className="syllabus">
          {todos.length === 0 ? (
            <div className="empty">
              <p>No topics added yet.</p>
              <span>Write your first topic below.</span>
            </div>
          ) : (
            todos.map((todo) => (
              <div className="todo-row" key={todo.id}>
               <button
  className={`checkbox ${todo.completed ? "checked" : ""}`}
  onClick={() => handleComplete(todo.id)}
  aria-label="Mark todo as complete"
>
  {todo.completed ? "✓" : ""}
</button>

                <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
  {todo.title}
</span>

                <button
  className="delete-button"
  onClick={() => handleDelete(todo.id)}
>
  ×
</button>
  <button
    className="edit-button"
    onClick={() => handleEdit(todo.id, todo.title)}
    aria-label="Edit todo"
  >
    ✎
  </button>
              </div>
              
            ))
          )}
        </section>

        <div className="add-section">

          <div className="input-row">
            <input
              type="text"
              placeholder="Quick, Write it Down..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSave();
                }
              }}
            />

            <button onClick={handleSave}>Add</button>
          </div>
        </div>

        <div className="notebook-footer">
          <span>Topics: {todos.length}</span>
          <span>Keep learning ✎</span>
        </div>
      </main>
      {editingId !== null && (
  <div className="modal-overlay">
    <div className="edit-modal">
      <h2>Oops!!Scratch That</h2>

      <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        autoFocus
      />

      <div className="modal-actions">
        <button
          className="cancel-button"
          onClick={() => {
            setEditingId(null);
            setEditTitle("");
          }}
        >
          Cancel
        </button>

        <button
          className="save-button"
          onClick={() => handleEditSave(editingId)}
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default App;