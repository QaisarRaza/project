import React from "react";
import "./Style.css";
function AgainCheckbox({ title }) {
  return (
    <>
      <div id="checkBox" className="d-flex justify-content-between">
        <div className="d-flex  align-items-center">
          <input type="checkbox" />
          <p>{title}</p>
        </div>
        <p>{title}</p>
      </div>
    </>
  );
}

export default AgainCheckbox;
