import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Style.css";
function SelectDropdown({ title, options }) {
  return (
    <>
      <div className="mt-3">
        <h5 className="mb-2">{title}</h5>
        <Dropdown>
          <Dropdown.Toggle className="dropdown" id="dropdown-basic">
            {options[0]}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options.map((name) => (
              <Dropdown.Item>{name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default SelectDropdown;
