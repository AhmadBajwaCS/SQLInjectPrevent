import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./LogPrescription.css";
import { Link } from "react-router-dom";

function LogPrescription(props) {
  const [prescList, setPrescList] = useState([]);
  const [drugList, setDrugList] = useState([]);

  const [prescriber, setPrescriber] = useState("");
  const [drug, setDrug] = useState("");

  const [isRefill, setIsRefill] = useState(false);

  // database calls that run on page load?
  useEffect(() => {
    Axios.get("http://localhost:3002/api/getPrescriberNames").then((data) => {
      setPrescList(data.data);
    });
    Axios.get("http://localhost:3002/api/getDrugs").then((data) => {
      setDrugList(data.data);
    });
  }, []);

  const handlePrescChange = (event) => {
    setPrescriber(event.target.value);
    console.log("prescriber changed");
  };

  const handleDrugChange = (event) => {
    setDrug(event.target.value);
    console.log("drug changed");
  };

  const handleRefillChange = (event) => {
    setIsRefill(!isRefill);
  };

  return (
    <div className="log-body">
      <div className="helmet">
        <Link to="/" className="no-text-decoration">
          <h1 className="title">PHARMACY DB</h1> <br />
        </Link>
      </div>

      <form className="frm1">
        <div className="frm-contents">
          <h2>&emsp; Log Prescription &emsp;</h2>
          <br />
          Date of Birth:<br></br>
          <input type="text" name="dob" /> <br></br>
          SSN: <br></br>
          <input type="text" name="ssn" /> <br></br>
          Drug Name:<br></br>
          <select
            value={drug}
            onChange={handleDrugChange}
            onMouseOver={handleDrugChange}
          >
            {drugList.map((val) => {
              return <option value={val.DrugID}>{val.DrugName}</option>;
            })}
          </select>
          <br />
          Physician: <br></br>
          <select
            value={prescriber}
            onChange={handlePrescChange}
            onMouseOver={handlePrescChange}
          >
            {prescList.map((val, key) => {
              return (
                <option value={val.SSN}>
                  {val.FirstName} {val.LastName}
                </option>
              );
            })}
          </select>
          <br />
          <label>
            Refill Allowed?:
            <input
              type="checkbox"
              name="refill"
              onChange={handleRefillChange}
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" />

        </div>
      </form>
    </div>
  );
}

export default LogPrescription;
