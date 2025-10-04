import React, { useState } from "react";

const GraduateComponent = () => {
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [score, setScore] = useState("");
  const [univ, setUniv] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Graduate Details</h4>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Final Year Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="University"
        value={univ}
        onChange={(e) => setUniv(e.target.value)}
      />
    </div>
  );
};


const PGComponent = () => {
  const [year, setYear] = useState("");
  const [thesis, setThesis] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Post Graduate Details</h4>
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Thesis Subject"
        value={thesis}
        onChange={(e) => setThesis(e.target.value)}
      />
    </div>
  );
};

const UnderGradComponent = () => {
  const [ssc, setSSC] = useState("");
  const [hsc, setHSC] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Under Graduate Details</h4>
      <input
        type="text"
        placeholder="SSC Score"
        value={ssc}
        onChange={(e) => setSSC(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="HSC Score"
        value={hsc}
        onChange={(e) => setHSC(e.target.value)}
      />
    </div>
  );
};


const UserDetailsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label style={{ marginTop: "10px", display: "block" }}>
        Select Education:
      </label>
      <select
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="Graduate">Graduate</option>
        <option value="PG">PG</option>
        <option value="UnderGrad">UnderGrad</option>
      </select>

      {education === "Graduate" && <GraduateComponent />}
      {education === "PG" && <PGComponent />}
      {education === "UnderGrad" && <UnderGradComponent />}

      <button onClick={()=>{
        console.log("UserDetailsForm:",UserDetailsForm);
        console.log("Form Data:",formData);
        alert("Form Submitted,")
      }}
      >
        Submit
        </button>
    </div>
  );
};

export default UserDetailsForm;
