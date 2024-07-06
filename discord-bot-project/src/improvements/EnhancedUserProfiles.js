import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/UserProfileService';

const EnhancedUserProfiles = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getUserProfile();
      setUserProfile(profile);
    };
    fetchData();
  }, []);

  const handleUpdateProfile = async (updatedProfile) => {
    const newProfile = await updateUserProfile(updatedProfile);
    setUserProfile(newProfile);
  };

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Level: {userProfile.level}</p>
          <p>Badges: {userProfile.badges.join(', ')}</p>
          <button onClick={() => handleUpdateProfile({ ...userProfile, level: userProfile.level + 1 })}>
            Level Up
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default EnhancedUserProfiles;