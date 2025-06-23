import React from 'react'

const Settings = () => {
  return (
    <> 
     <nav className="navbar">
        <div className="image">
        <img src="" alt="" />
        </div>
        <div className="profile">
            <input type="text" className="field" />
            <input type="text" className='icon'/>
            <img src="" alt="" className="profile-pic" />
        </div>
    </nav>
    <main>
      <h1>Settings</h1>
      <div className="container-settings">
        <div className="profile">
          <h2>User Profile</h2>
          <p>Manage you personal information and preferences</p>
          <div className="image-section">
            <img src="" alt="" />
            <button className="upload-picture">Upload New Picture</button>
          </div>
          <div className="information">
            <p className="name">Full Name
              <input type="text" />
            </p>
             <p className="name">Email Address
              <input type="email" />
            </p>
          </div>
          <button>Change Password</button>
          <button>Save Changes</button>
        </div>
        <div className="notifications">
          <h2>Notification Preferences</h2>
          <p>Customize how you receive alerts and updates</p>
          <h4>Email Reminders</h4>
          <p>Receive email notifications for task deadlines</p>
          <h4>Job Update Alerts</h4>
          <p>Get notified about new Job postings matching your criteria</p>
          <h4>Notification Frequency</h4>
          <select name="" id="">
            <option value="">Daily</option>
            <option value="">Weekly</option>
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
          <button>Save Preferences</button>
        </div>
        <div className="appearance">
          <h2>Appearance</h2>
          <p>Customize the application's look and feel</p>
          <h3>Dark Mode</h3>
          <p>Toggle between light and dark themes</p>
          <button className="theme">Apply Theme</button>
        </div>
        <div className="account">
          <h2>Account Settings</h2>
          <p>Manage your account and data</p>
          <h2>Export Data</h2>
          <p>Download your application data.</p>
          <button>Export Data</button>
          <h2>Delete Account</h2>
          <p>Permanently delete your account and all associated data</p>
          <button>Delete Account</button>
          <button>Save Settings</button>
        </div>
        <div className="privacy">
          <h2>Privacy and Security</h2>
          <p>Control your account security and privacy</p>
          <h3>Enable two-factor Authentication</h3>
          <p>Add an extra layer of security to your account</p>
          <h3>Manage Active Sessions</h3>
          <p>See devices logged into your account</p>
          <button>View Sessions</button>
          <h3>Logout from all devices</h3>
          <p>Sign out from all active sessions immediately</p>
          <button>Logout All</button>
          <button className="theme">Save Security Settings</button>
        </div>
        <div className="connected">
          <h2>Connected Applications</h2>
          <p>Integrate with your favorite services to enhance functionality</p>
          <div className="google">
            <p className="image-description"><img src="" alt="" /> Google calendar</p>
            <button>Connect</button>
          </div>
          <div className="google">
            <p className="image-description"><img src="" alt="" /> LinkedIn</p>
            <button>Connect</button>
          </div>
          <div className="google">
            <p className="image-description"><img src="" alt="" /> Twitter</p>
            <button>Connect</button>
          </div>
          <div className="google">
            <p className="image-description"><img src="" alt="" /> Instagram</p>
            <button>Connect</button>
          </div>
          <div className="google">
            <p className="image-description"><img src="" alt="" /> Microsoft Outlook</p>
            <button>Connect</button>
          </div>
           <div className="google">
            <p className="image-description"><img src="" alt="" /> Github</p>
            <button>Connect</button>
          </div>
          <button>Manage All integrations</button>
        </div>
        
      </div>
    </main>
    
    
    </>
  )
}

export default Settings