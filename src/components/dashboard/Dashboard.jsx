import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("accessToken")) {
        try {
          let response = await axios.get("https://dummyjson.com/auth/me", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          console.log("API Response:", response.data);
          setData(response.data);
        } catch (err) {
          console.log("Error: ", err.message);
          if (err.response?.status === 401) {
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
        }
      }
    };
    fetchData();
  }, [navigate]);

  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">
        Welcome to the Dashboard
      </h1>
      {data && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          {data.bank && (
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Card Expire:</span>{" "}
                {data.bank.cardExpire}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Card Number:</span>{" "}
                {data.bank.cardNumber}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Card Type:</span>{" "}
                {data.bank.cardType}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
