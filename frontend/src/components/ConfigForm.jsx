import React, { useState } from "react";

const ConfigForm = ({ onSubmit} ) => {
  const [configId, setConfigId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!configId.trim()) {
      alert("Please enter a configId");
      return;
    }
    onSubmit(configId);
    setConfigId("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>ConfigId:</label>
      <input
        type="text"
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfigForm;
