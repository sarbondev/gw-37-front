import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    {
      path: "/",
      label: "dashboard",
    },
    {
      path: "/products",
      label: "Mahsulotlar",
    },
    {
      path: "/admins",
      label: "Adminlar",
    },
    {
      path: "/categories",
      label: "kategoriyalar",
    },
  ];

  return (
    <aside className="h-screen">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
