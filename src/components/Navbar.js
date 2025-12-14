function Navbar({ openModal }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Trello-Style Board</h1>
      <button
        onClick={openModal}
        className="bg-white text-blue-600 px-4 py-1 rounded"
      >
        + Add Task
      </button>
    </div>
  );
}

export default Navbar;
