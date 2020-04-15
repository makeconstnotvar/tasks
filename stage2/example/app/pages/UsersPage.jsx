import React from "react";
import {users}from "users";
import {User} from "components/User";

const UsersPage = props => {
  return (

      <div className="container">
        <h1>Пользователи Github</h1>
        <div className="users">
          {
            users.map((user, i) => <User key={i} user={user}/>)
          }
        </div>
      </div>

  )
}
export {UsersPage}