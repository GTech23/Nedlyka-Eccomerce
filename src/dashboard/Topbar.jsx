function Topbar() {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <div className="font-bold text-lg text-gray-800">
        Nedlyka Admin Dashboard
      </div>
      <div>
        <span className="text-gray-600">Admin</span>
        {/* Add avatar or dropdown here if needed */}
      </div>
    </header>
  );
}

export default Topbar;
