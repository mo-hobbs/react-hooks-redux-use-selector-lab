import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {

  const users = 
  useSelector((state)=> state.users);


  return (
    <div>
      <ul>
        Users!
        <p>Total count of users: {users.length}</p>
        {users.map((user)=><li key={user.username}>username: {user.username}, hometown: {user.hometown}</li>)}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
