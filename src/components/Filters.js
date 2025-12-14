function Filters({ setFilters }) {
  return (
    <div className="flex flex-wrap gap-3 px-4 py-2 bg-white shadow text-sm">
      <select
        onChange={(e) =>
          setFilters(f => ({ ...f, priority: e.target.value }))
        }
        className="border p-1 rounded"
      >
        <option value="">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        onChange={(e) =>
          setFilters(f => ({ ...f, status: e.target.value }))
        }
        className="border p-1 rounded"
      >
        <option value="">All Status</option>
        <option>To-Do</option>
        <option>In-Progress</option>
        <option>Completed</option>
      </select>

      <select
        onChange={(e) =>
          setFilters(f => ({ ...f, sort: e.target.value }))
        }
        className="border p-1 rounded"
      >
        <option value="">No Sort</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}

export default Filters;
