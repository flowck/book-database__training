/**
 * Sidebar
 */

import "./Sidebar.scss";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      {/* APP NAME */}
      <div className="app-sidebar__logo">
        <h1>BOOKS DATABASE</h1>
      </div>

      {/* ADD NEW */}
      <div className="app-sidebar__new">
        <button>Add book</button>
      </div>

      {/* MENU */}
      <nav className="app-sidebar__nav">
        <ul>
          <li>My books</li>
          <li>Whish list</li>
        </ul>
      </nav>
    </aside>
  );
}
