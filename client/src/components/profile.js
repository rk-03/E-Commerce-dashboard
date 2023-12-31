import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>You are not authenticated. Please sign in.</p>
      )}
    </div>
  );
};

export default Profile;
