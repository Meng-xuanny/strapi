import React, { useRef } from "react";
import sublinks from "../data";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const submenuContainer = useRef();

  const currentPage = sublinks.find((link) => link.pageId === pageId);

  const handleSubmenu = (e) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1)
      setPageId(null);
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleSubmenu}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>

      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, url, label, icon }) => (
          <a key={id} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
