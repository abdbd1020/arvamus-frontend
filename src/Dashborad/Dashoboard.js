import React from "react";
import "./Dashboard.css";
import Sidebar from "../General/Sidebar/Sidebar";
import PersonItem from "./PersonItem/PersonItem";
import profileImage from "../Images/prof1.jpg";
import teacherImage from "../Images/teacher4.png";
import staffImage from "../Images/staff4.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllTeachers, getAllStaff } from "../Services/appService";

const Dashboard = () => {
  // const location = useLocation();

  // const [userId, setUserId] = useState(location.state?.userId);

  const tteachers = [
    {
      src: profileImage,
      designation: "Lecturer",
      name: "Fahim Arefin",
      rating: 5,
    },
    {
      src: teacherImage,
      designation: "Lecturer",
      name: "Fahim Arefin",
      rating: 5,
    },
    {
      src: teacherImage,
      designation: "Lecturer",
      name: "Fahim Arefin",
      rating: 5,
    },
  ];

  const sstaffs = [
    { src: staffImage, designation: "Cleaner", name: "MD Shahid", rating: 4 },
    { src: staffImage, designation: "Cleaner", name: "MD Shahid", rating: 4 },
    { src: staffImage, designation: "Cleaner", name: "MD Shahid", rating: 4 },
  ];

  const [teachers, setTeachers] = useState([]);
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    async function fetchTeachers() {
      getAllTeachers().then((data) => {
        if (data.status == false) {
          console.log("Error");
          return;
        } else {
          setTeachers(data.response);
        }
      });
    }
    fetchTeachers();
  }, []);

  useEffect(() => {
    async function fetchStaffs() {
      getAllStaff().then((data) => {
        if (data.status == false) {
          console.log("Error");
          return;
        } else {
          setStaffs(data.response);
        }
      });
    }
    fetchStaffs();
  }, []);

  return (
    <Sidebar>
      <div className="dashboard-container">
        <div className="listii">
          <div className="list-container">
            <h2 className="list-header">Teachers</h2>
            <ul className="list">
              {teachers.map((teacher, index) => (
                <li key={index}>
                  <PersonItem
                    src={teacherImage}
                    name={teacher.firstname + " " + teacher.lastname}
                    designation="Lecturer"
                    rating={5}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="separator"></div>
          <div className="list-container">
            <h2 className="list-header">Staffs</h2>
            <ul className="list">
              {staffs.map((staff, index) => (
                <li key={index}>
                  <PersonItem
                    src={staffImage}
                    name={staff.firstname + " " + staff.lastname}
                    designation="Cleaner"
                    rating={4}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
