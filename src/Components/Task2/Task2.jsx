import React, { useState } from "react";
import "./Task2.css";
const Task2 = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(null);
  const [selectedValue, setSelectValue] = useState("");
  const [experience, setExperience] = useState(null);
  const [checkbox, setCheckBox] = useState([]);
  const [url, setURL] = useState(null);
  const [mgt, setMgt] = useState(null);
  const [data, setData] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please fill the name field");
      return false;
    }

    if (mail === "") {
      alert("Please fill the Mail field");
      return false;
    }

    if (phone.length > 10 || phone.length < 10) {
      alert("Plaese enter a valid number");
      return false;
    }

    if (experience == 0) {
      alert("Experienece must be greater than zero or must be filled");
      return false;
    }
    if (selectedValue == "") {
      alert("Please select position");
      return false;
    }
    if (selectedValue == "developer" && experience == null) {
      alert("Please fill the experience field");
      return false;
    }
    if (selectedValue == "designer" && url == null) {
      alert("Please fill the url field");
      return false;
    }
    if (selectedValue == "manager" && mgt == null) {
      alert("Please fill the Management field");
      return false;
    }
    if (checkbox.length == 0) {
      alert("Plaese select atleast one skill");
      return false;
    }
    setData(true);
    return true;
  };
  const handleCheckBox = (e) => {
    let res = e.target.name;
    setCheckBox([...checkbox, res]);
  };
  return (
    <>
      <h2>Job Application Form</h2>
      <div className="parent">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Your Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Apply for Position</label>
          <select
            value={selectedValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option selected aria-disabled></option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          {selectedValue === "developer" || selectedValue === "designer" ? (
            <>
              <br />
              <br />
              <input
                type="text"
                placeholder="Relevant Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </>
          ) : null}
          {selectedValue === "designer" && (
            <>
              <br /> <br />{" "}
              <input
                type="url"
                placeholder="Portfolio URl"
                value={url}
                onChange={(e) => setURL(e.target.value)}
              />
            </>
          )}
          {selectedValue === "manager" && (
            <>
              <br /> <br />
              <input
                type="text"
                placeholder="Management Experience"
                value={mgt}
                onChange={(e) => setMgt(e.target.value)}
              />
            </>
          )}
          <br />
          <br />
          <span>Additional Skills -</span>
          <input
            type="checkbox"
            name="javascript"
            onChange={(e) => handleCheckBox(e)}
          />
          Javascript
          <input
            type="checkbox"
            name="CSS"
            onChange={(e) => handleCheckBox(e)}
          />
          CSS
          <input
            type="checkbox"
            name="python"
            onChange={(e) => handleCheckBox(e)}
          />
          Python
          <br />
          <br />
          <label htmlFor="dt">Preferred Interview Time -</label>
          <input type="date" id="dt" required />
          <input type="time" required />
          <button>submit</button>
        </form>

        {data && (
          <>
            <h3>Summary</h3>
            <p>userName : {name}</p>
            <p>user Email : {mail}</p>
            <p>user Phone : {phone}</p>
            <p>Apply for Position : {selectedValue}</p>
            {selectedValue === "developer" || selectedValue === "designer" ? (
              <>
                <p>selected position : {selectedValue}</p>
                <p>Experience : {experience}</p>
              </>
            ) : null}
            {selectedValue === "designer" && <p>Portfolio URL : {url}</p>}
            {selectedValue === "manager" && (
              <p>Management experience : {mgt}</p>
            )}
            <p>
              Additional Skills :{" "}
              {checkbox.map((item) => {
                return item + " ";
              })}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Task2;
