import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <>
      <div className="grid grid-cols-[1fr_3fr]">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
