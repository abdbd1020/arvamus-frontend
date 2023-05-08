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
  const location = useLocation();

  const [userId, setUserId] = useState(location.state?.userId);

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
          // const newTeachers = data.response.map((element) => {
          //   return {
          //     src: teacherImage,
          //     designation: "Lecturer",
          //     name: element.first_name + " " + element.last_name,
          //     rating: 5,
          //   };
          // });

          setTeachers([
            {
              src: teacherImage,
              designation: "Lecturer",
              name:
                data.response[0].first_name + " " + data.response[0].last_name,
              rating: 5,
            },
          ]);
        }
      });
    }

    fetchTeachers();
  }, []);

  useEffect(() => {
    // async function fetchTeachers() {
    //   getAllTeachers().then((data) => {
    //     if (data.status == false) {
    //       console.log("Error");
    //       return;
    //     } else {
    //       for (const element of data.response) {
    //         const newElement = {
    //           src: teacherImage,
    //           designation: "Lecturer",
    //           name: element.first_name + " " + element.last_name,
    //           rating: 5,
    //         };

    //         teachers.push(newElement);
    //       }
    //       console.log(teachers);
    //     }
    //   });
    // }

    async function fetchStaffs() {
      const data = await getAllStaff();
      if (data.status == false) {
        console.log("Error");
        return;
      } else {
        data.response.forEach((element) => {
          const newElement = {
            src: staffImage,
            designation: "Stuff",
            name: element.first_name + " " + element.last_name,
            rating: 5,
          };
          staffs.push(newElement);
        });
      }
    }

    // fetchTeachers();
    fetchStaffs();
  }, []);

  return (
    <Sidebar>
      <div className="dashboard-container">
        <div className="listii">
          <div className="list-container">
            <h2 className="list-header">Teachers</h2>
            <ul className="list">
              {tteachers.map((teacher, index) => (
                <li key={index}>
                  <PersonItem
                    src={teacher.src}
                    name={teacher.name}
                    designation={teacher.designation}
                    rating={teacher.rating}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="separator"></div>
          <div className="list-container">
            <h2 className="list-header">Staffs</h2>
            <ul className="list">
              {sstaffs.map((staff, index) => (
                <li key={index}>
                  <PersonItem
                    src={staff.src}
                    name={staff.name}
                    designation={staff.designation}
                    rating={staff.rating}
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
