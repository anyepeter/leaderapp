import React, { useState } from "react";
import {
  Button,
  Flex,
  TextField
} from "@aws-amplify/ui-react";
import '../style/edit.css'
import { API, Storage } from "aws-amplify";
import { updateUser } from '../graphql/mutations';

const ProfileForm = () => {
  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const input = {
      id: "sds",
      name: userName,
      image: profilePicture,
    };

    if(!!input.image) await Storage.put(input.image, 'image');
    await API.graphql({
        query: updateUser,
        variables: {
          input: input
  }})

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

