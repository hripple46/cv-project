import React, { useState } from "react";

function GeneralInfo(props) {
  let [name, changeName] = useState("Placeholder");

  let updateName = (e) => {
    changeName(e.target.value);
  };

  if (!props.submissionStatus) {
    return (
      <div>
        <label htmlFor="name">Your Name:</label>
        <input
          onChange={updateName}
          type="text"
          name="name"
          value={name}
        ></input>
      </div>
    );
  } else {
    return <h1>{name}</h1>;
  }
}

export default GeneralInfo;
