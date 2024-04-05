

import React from "react";
import "./LocationInfo.Modules.css";
import { useEffect,useState } from "react";
import LocalMap from "./LocalMap";
import axios from "axios";

const LocationInfo = () => {

  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/getUsers");
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);


  return (
    <>
      <LocalMap users={users}/>
    </>
  );
};

export default LocationInfo;

