import React, { useState } from "react";
import {
  Button,
  Flex,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import '../style/edit.css'

const ProfileForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setUserName("");
    setEmail("");
    setProfilePicture(null);
  };

  return (
    <section className="edit-section">
    <div className="form-text">
      <form onSubmit={handleFormSubmit}>
        <Flex direction="column">
          <TextField
            id="userName"
            label="userName"
            name="userName"
            value={userName}
            onChange={handleUserNameChange}
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />

          <Button type="submit" 
          backgroundColor="blue"
          color="#fff"
          >Submit</Button>
        </Flex>
      </form>
    </div>
    </section>
  );
};

export default ProfileForm;

