import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Listing from "../DashboardPages/Listing";
import ManageQuestions from "../DashboardPages/ManageQuestions";
import useAuthStore from "../../store/authStore";

function UDashboard() {
  const { user, checkAuth, loading } = useAuthStore();
  const [appointment, setAppointment] = useState(null);
  const [loadingAppointment, setLoadingAppointment] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch appointment data when component mounts
    const fetchAppointment = async () => {
      try {
        const response = await fetch("http://localhost:9085/api/v1/appoint/1");
        if (!response.ok) {
          throw new Error("Failed to fetch appointment data");
        }
        const data = await response.json();
        setAppointment(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingAppointment(false);
      }
    };

    fetchAppointment();
  }, []);

  console.log(user);

  return (
    <div className="dashboard-container">
      {/* <Sidebar /> */}
      <div className="main-content">
        <h2>Your Appointment</h2>

        {loadingAppointment ? (
          <p>Loading appointment data...</p>
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : appointment ? (
          <div className="appointment-details">
            <p>
              <strong>Name:</strong> {appointment.firstName}{" "}
              {appointment.lastName}
            </p>
            <p>
              <strong>City:</strong> {appointment.city}
            </p>
            <p>
              <strong>Contact:</strong> {appointment.contact}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(appointment.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {appointment.time}
            </p>
            <p>
              <strong>Email:</strong> {appointment.email}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(appointment.dob).toLocaleDateString()}
            </p>
            <p>
              <strong>Doctor:</strong> {appointment.doctor || "Not assigned"}
            </p>
            <p>
              <strong>Status:</strong> {appointment.status}
            </p>
          </div>
        ) : (
          <p>No appointment data found</p>
        )}
      </div>
    </div>
  );
}

export default UDashboard;
