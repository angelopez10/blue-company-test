import React, { useState } from "react";
import Nav from "./Nav.js";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleSidebarOpen = () => {
    setOpen(true);
    console.log("click");
  };

  const handleSidebarClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Nav handleOpen={handleSidebarOpen} open={open} />
      <Sidebar
        handleOpen={handleSidebarOpen}
        handleClose={handleSidebarClose}
        open={open}
      />
    </>
  );
};

export default Navbar;
