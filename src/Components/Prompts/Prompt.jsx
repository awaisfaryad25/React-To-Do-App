// Components/Prompts/Prompt.js
import React from "react";
import "./Prompt.css";

const Prompt = ({ editValue, setEditValue, handleConfirmEdit, handleClosePrompt }) => {
  return (
    <div className="prompt">
      <h1 className="title">Edit Your List</h1>
      <div className="input py-4">
        <input
          type="text"
          className="py-1 px-3"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      </div>
      <div className="btn mt-4">
        <button className="cnlBtn" onClick={handleClosePrompt}>
          Cancel
        </button>
        <button className="cnfrmBtn" onClick={handleConfirmEdit}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Prompt;
