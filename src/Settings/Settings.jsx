import React, { useState } from 'react';
import Sidebar from '../General/Sidebar/Sidebar';
import { FaCog } from 'react-icons/fa';
import './Settings.css'

const Settings = () => {

    const [showChangePassword, setShowChangePassword] = useState(false);
    const [firstName, setFirstName] = useState('John Doe');
    const [lastName, setLastName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [department, setDepartment] = useState('Marketing');
    const [designation, setDesignation] = useState('Manager');
    const [toggleSetting, setToggleSetting] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const handleToggleSwitch = () => {
        // Handle toggle switch logic here
        setToggleSetting(!toggleSetting);
      };
    
    const handleChangePassword = () => {
    // Handle change password logic here
    };

    return (
        <Sidebar>
            <div className="account-settings">
                <div className="header">
                    <h1>Account Settings</h1>
                    <FaCog className="settings-icon" />
                </div>
                <div className="allSections">
                    <div className="section section1">       
                        <div className="fields">                 
                            <div className="field">
                                <label>Forst Name:</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled />
                            </div>
                            <div className="field">
                                <label>Last Name:</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled />
                            </div>
                            <div className="field">
                                <label>Email:</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                            </div>
                            <div className="field">
                                <label>Phone Number:</label>
                                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled />
                            </div>
                            <div className="field">
                                <label>Department:</label>
                                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} disabled />
                            </div>
                            <div className="field">
                                <label>Designation:</label>
                                <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} disabled />
                            </div>
                            <div className="toggle-switch">
                                <label>Toggle Setting:</label>
                                <button className={`toggle-button ${toggleSetting ? 'active' : ''}`} onClick={handleToggleSwitch}>
                                {toggleSetting ? 'On' : 'Off'}
                            </button>
                        </div>
                        </div>
                        <button className='submit-Button button' onClick={handleChangePassword}>Update Information</button>                        
                    </div>

                    <div className="section section2">       
                        <div className="fields">                 
                            <div className="field">
                                <label>Forst Name:</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled />
                            </div>
                            <div className="field">
                                <label>Last Name:</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled />
                            </div>                          
                        </div>
                        <button className='submit-Button button' onClick={handleChangePassword}>Update Information</button>                        
                    </div>                                     
                </div>               
            </div>
        </Sidebar>
    );
};

export default Settings;