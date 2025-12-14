import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

function Board({ status, tasks, onEdit }) {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
  ref={provided.innerRef}
  {...provided.droppableProps}
  className="bg-gray-200 rounded-xl w-80 p-4 flex-shrink-0 min-h-[70vh]"
>

  <h2 className="font-semibold text-gray-800 mb-4">
    {status}
    <span className="ml-2 text-sm text-gray-500">
      ({tasks.length})
    </span>
  </h2>

  {tasks.length === 0 && (
    <p className="text-sm text-gray-500">No tasks</p>
  )}

  {tasks.map((task, index) => (
    <TaskCard
      key={task.id}
      task={task}
      index={index}
      onEdit={onEdit}
    />
  ))}

  {provided.placeholder}
</div>

      )}
    </Droppable>
  );
}

export default Board;
