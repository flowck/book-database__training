/**
 * Book
 */
import "./Book.scss";
import React from "react";

export default function (props) {
  return (
    <article className="app-book">
      {/* BOOK COVER */}
      <div
        className="app-book__cover"
        style={{ backgroundImage: `url(${props.cover})` }}
      />

      {/* METADATA */}
      <h1 className="app-book__title">{props.title}</h1>
      <p className="app-book__author">{props.author || "David Goggins"}</p>
    </article>
  );
}
