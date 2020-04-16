import React from "react";
const User = props => (
  <div className={`user`}>
    <div className="foto">
      <img src={props.user.avatar_url} alt=""/>
    </div>
    <div className="info">
      <div className="name">{props.user.login}</div>
    </div>
  </div>
)
export {User}