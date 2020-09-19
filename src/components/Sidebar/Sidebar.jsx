/**
 * Sidebar
 */

import "./Sidebar.scss";
import React from "react";

export default function Sidebar({ onOpenModal }) {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__logo">
        <h1>BOOKS DATABASE</h1>
      </div>

      <div className="app-sidebar__new">
        <button onClick={onOpenModal}>Add book</button>
      </div>

      <nav className="app-sidebar__nav">
        <ul>
          <li>My books</li>
          <li>Whish list</li>
        </ul>
      </nav>
    </aside>
  );
}
