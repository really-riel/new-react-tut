import React from "react";
import { FaTrash } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        htmlFor=""
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <FaTrash
        role={"button"}
        tabIndex={0}
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
