import { useState } from "react";
import axios from "axios";
import ConfigForm from "../components/ConfigForm";
import "./Home.css";

const API = "http://localhost:8080/api/myConfigs";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchConfig = async (configId) => {
    setData([]);
    try {
      const res = await axios.get(`${API}/${configId}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>Task 1: View Configuration</h2>
        <ConfigForm onSubmit={fetchConfig} />

        <div className="output">
          {data.length > 0 && (
            <div>
              {data.map((row, i) => (
                <div className="row" key={i}>
                  {row.map((cell, j) => (
                    <div className="cell" key={j}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
