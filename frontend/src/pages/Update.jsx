import React, { useState } from "react";
import axios from "axios";
import ConfigForm from "../components/ConfigForm";
import "./Home.css";

const API = "http://localhost:8080/api/myConfigs";

const Update = () => {
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (configId) => {
    try {
      await axios.put(`${API}/${configId}`, { remark });
      setMessage("Remark updated successfully!");
      setRemark("");
    } catch (err) {
      console.error(err);
      setMessage("Error updating remark");
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Task 2: Update Remark</h2>
        <ConfigForm onSubmit={handleUpdate} buttonText="Update" />

        <div className="remark-box">
          <label>Remark:</label>
          <textarea
            rows="4"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Update;
