import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import TaskModal from "./components/TaskModal";
import Filters from "./components/Filters";
import { DragDropContext } from "react-beautiful-dnd";
import { saveTasks, loadTasks } from "./utils/helpers";

const STATUSES = ["To-Do", "In-Progress", "Completed"];

function App() {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const stored = loadTasks();
    if (stored) setTasks(stored);
    else {
      fetch("/tasks.json")
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  }, []);

  useEffect(() => saveTasks(tasks), [tasks]);

  function onDragEnd(result) {
    if (!result.destination) return;

    setTasks(prev =>
      prev.map(t =>
        t.id === Number(result.draggableId)
          ? { ...t, status: result.destination.droppableId }
          : t
      )
    );
  }

  const filteredTasks = tasks
    .filter(t => !filters.priority || t.priority === filters.priority)
    .sort((a, b) => {
      if (filters.sort === "newest") return b.id - a.id;
      if (filters.sort === "oldest") return a.id - b.id;
      return 0;
    });

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar openModal={() => setModal(true)} />
      <Filters setFilters={setFilters} />

      <DragDropContext onDragEnd={onDragEnd}>
  <div className="w-full overflow-x-auto">
    <div className="flex gap-4 p-4 min-h-[calc(100vh-120px)] mx-auto w-fit">
      {STATUSES.map(status => (
        <Board
          key={status}
          status={status}
          tasks={filteredTasks.filter(t => t.status === status)}
          onEdit={(task) => {
            setEditTask(task);
            setModal(true);
          }}
        />
      ))}
    </div>
  </div>
</DragDropContext>


      {modal && (
        <TaskModal
          close={() => {
            setModal(false);
            setEditTask(null);
          }}
          tasks={tasks}
          setTasks={setTasks}
          editingTask={editTask}
        />
      )}
    </div>
  );
}

export default App;
