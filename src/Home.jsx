import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [entranceCount, setEntranceCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/data");
        console.log("Response data:", response.data);
        setEntranceCount(response.data.largest_serial_number);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>THE COUNT</h1>
      <h2>1. Entrance</h2>
      <p>{entranceCount}</p>
      <h2>2. Exit</h2>
      <p>0</p>
      <h2>3. Awaiting Exit</h2>
      <p>0</p>
    </div>
  );
};

export default Home;
