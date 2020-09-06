import React from "react";

/**
 * Input
 * @property {string} type - Input type
 * @property {string} label - Label
 * @property {function} setValue - useState setter
 *
 * @returns {Component}
 */
export default function ({ type, label, setValue }) {
  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            type={type}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
