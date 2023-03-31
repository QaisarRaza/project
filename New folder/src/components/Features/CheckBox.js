import React from "react";

function CheckBox({ title }) {
  const [checked, setChecked] = React.useState();
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <div
        id="checkBox"
        className={checked ? "borderClr" : ""}
        onClick={handleChange}
      >
        <input type="checkbox" onChange={(e) => handleChange(e)} />
        <p>{title}</p>
      </div>
    </>
  );
}

export default CheckBox;
