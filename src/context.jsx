import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const closeSidebar = () => setIsSidebarOpen(false);

  const openSidebar = () => setIsSidebarOpen(true);

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
