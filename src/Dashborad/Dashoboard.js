import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import PersonItem from './PersonItem/PersonItem';
import profileImage from '../Images/prof1.jpg';
import teacherImage from '../Images/teacher4.png'
import staffImage from '../Images/staff4.png'

const Dashboard = () => {
  const teachers = [
    { src: profileImage, designation: 'Lecturer', name: 'Fahim Arefin', rating: 5 },
    { src: teacherImage, designation: 'Lecturer', name: 'Fahim Arefin', rating: 5 },
    { src: teacherImage, designation: 'Lecturer', name: 'Fahim Arefin', rating: 5 },
  ];

  const staffs = [
    { src: staffImage, designation: 'Cleaner', name: 'MD Shahid', rating: 4 },
    { src: staffImage, designation: 'Cleaner', name: 'MD Shahid', rating: 4 },
    { src: staffImage, designation: 'Cleaner', name: 'MD Shahid', rating: 4 },
  ];

  return (
    <Sidebar>
      <div className='dashboard-container'>
        <div className="listii">
          <div className="list-container">
            <h2 className='list-header'>Teachers</h2>
            <ul className="list">
              {teachers.map((teacher, index) => (
                <li key={index}>
                  <PersonItem
                    src={teacher.src}
                    name={teacher.name}
                    designation = {teacher.designation}
                    rating={teacher.rating}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="separator"></div>
          <div className="list-container">
            <h2 className='star-header'>Staffs</h2>
            <ul className="list">
              {staffs.map((staff, index) => (
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
