import React from "react";
import SelectDropdown from "../Features/SelectDropdown";
import CheckBox from "../Features/CheckBox";
import AgainCheckbox from "../Features/AgainCheckbox";
import "./Sidebar.css";
const options1 = ["Haus", "Haus", "Haus"];
const options2 = ["Bauvorhaben", "Bauvorhaben", "Bauvorhaben"];
const options3 = ["Bauphase", "Bauphase", "Bauphase"];
const options4 = ["Raume", "Raume", "Raume"];
function Sidebar({ onScroll }) {
  return (
    <>
      <div id="Sidebar" onScroll={onScroll}>
        <h1>
          Configuration for
          <br /> your Home
        </h1>
        <SelectDropdown title="Installationsort" options={options1} />
        <SelectDropdown title="Bauvorhaben" options={options2} />
        <SelectDropdown title="Bauphase" options={options3} />
        <SelectDropdown title="Raume" options={options4} />
        <h1 style={{ marginTop: "100px" }}>Intention</h1>
        <p>What are your preferences?</p>
        <CheckBox title="Installationsort" />
        <CheckBox title="Bauvorhaben" />
        <CheckBox title="Raume" />
        <CheckBox title="Bauphase" />
        <CheckBox title="Installationsort" />
        <CheckBox title=" Mehr Sicherheit" />
        <div className="d-flex justify-content-center">
          <button className="detailBtn">Detail Zur Inition</button>
        </div>
        <h1 style={{ marginTop: "100px" }}>Intention</h1>
        <AgainCheckbox title="Inition" />
        <AgainCheckbox title="Zur" />
        <AgainCheckbox title="Raume" />
        <AgainCheckbox title="Bauphase" />
        <AgainCheckbox title="Inition" />
        <AgainCheckbox title="Zur" />
        <AgainCheckbox title="Inition" />
      </div>
    </>
  );
}

export default Sidebar;
