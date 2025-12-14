import { Draggable } from "react-beautiful-dnd";

function TaskCard({ task, index, onEdit }) {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => onEdit(task)}
          className="bg-white rounded-lg p-4 mb-4 shadow-sm hover:shadow-md cursor-pointer transition"
        >
          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-1">
            {task.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3">
            {task.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs">
            {/* Priority */}
            <span
              className={`font-medium ${
                task.priority === "High"
                  ? "text-red-600"
                  : task.priority === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {task.priority}
            </span>

            {/* Due Date (optional) */}
            {task.dueDate && (
              <span className="text-gray-400">
                {new Date(task.dueDate).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
