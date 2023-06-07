import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map(({ pageId, links, page }) => (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map(({ id, url, label, icon }) => (
                  <a key={id} href={url}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
