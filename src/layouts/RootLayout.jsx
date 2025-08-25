import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <div className="grid grid-cols-[250px_1fr] min-h-screen">
      <Sidebar />
      <main className="p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
