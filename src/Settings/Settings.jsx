import React, { useState } from 'react';
import Sidebar from '../General/Sidebar/Sidebar';
import { FaCog } from 'react-icons/fa';
import './Settings.css'

const Settings = () => {

    const [showChangePassword, setShowChangePassword] = useState(false);
    const [name, setName] = useState('John Doe');
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
                <div className="fields">
                    <div className="field">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled />
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
                </div>
                <div className="toggle-switch">
                    <label>Toggle Setting:</label>
                    <button className={`toggle-button ${toggleSetting ? 'active' : ''}`} onClick={handleToggleSwitch}>
                    {toggleSetting ? 'On' : 'Off'}
                    </button>
                </div>
                <button onClick={() => setShowChangePassword(true)}>Change Password</button>
                {showChangePassword && (
                    <div className="popup">
                    <div className="close-icon" onClick={() => setShowChangePassword(false)}>X</div>
                    <div className="input-fields">
                        <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <button onClick={handleChangePassword}>Confirm Change</button>
                    </div>
                )}
            </div>
        </Sidebar>
    );
};

export default Settings;