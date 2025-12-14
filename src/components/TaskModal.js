import React, { useEffect, useState } from "react";

function TaskModal({ close, tasks, setTasks, editingTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "To-Do",
  });

  // Populate form when editing
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({
        title: "",
        description: "",
        priority: "Low",
        status: "To-Do",
      });
    }
  }, [editingTask]);

  function saveTask() {
    if (!task.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editingTask) {
      // UPDATE
      setTasks(
        tasks.map((t) =>
          t.id === task.id ? task : t
        )
      );
    } else {
      // CREATE
      setTasks([
        ...tasks,
        {
          ...task,
          id: Date.now(),
        },
      ]);
    }

    close();
  }

  function deleteTask() {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((t) => t.id !== task.id));
      close();
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96 shadow-lg">
        <h2 className="font-bold mb-3 text-lg">
          {editingTask ? "Edit Task" : "Add Task"}
        </h2>

        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Title"
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
        />

        <textarea
          className="border w-full mb-2 p-2 rounded"
          placeholder="Description"
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }
        />

        <select
          className="border w-full mb-2 p-2 rounded"
          value={task.priority}
          onChange={(e) =>
            setTask({ ...task, priority: e.target.value })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          className="border w-full mb-4 p-2 rounded"
          value={task.status}
          onChange={(e) =>
            setTask({ ...task, status: e.target.value })
          }
        >
          <option>To-Do</option>
          <option>In-Progress</option>
          <option>Completed</option>
        </select>

        <div className="flex justify-between items-center">
          {editingTask && (
            <button
              onClick={deleteTask}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          )}

          <div className="flex gap-2 ml-auto">
            <button
              onClick={close}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
            <button
              onClick={saveTask}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
