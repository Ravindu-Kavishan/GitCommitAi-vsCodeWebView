import React from "react";

export default function Button({ text, color, onClick, tcolor }) {
  return (
    <div className="flex justify-center my-1">
      <button
        className={`w-11/12 py-1 rounded-4xl hover:border-red-800  transition duration-300 `}
        style={{ backgroundColor: color, color: tcolor }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
