import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, Users, FolderTree } from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const links = [
    {
      path: "/",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      path: "/products",
      label: "Mahsulotlar",
      icon: <Package size={20} />,
    },
    {
      path: "/admins",
      label: "Adminlar",
      icon: <Users size={20} />,
    },
    {
      path: "/categories",
      label: "Kategoriyalar",
      icon: <FolderTree size={20} />,
    },
  ];

  return (
    <aside className="h-screen bg-gray-900 text-gray-100 p-5 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-2">
        {links.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={index}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
