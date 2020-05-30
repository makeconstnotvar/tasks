import React, {useEffect, useState} from "react";
import {users} from "users";
import {User} from "components/User";
import qs from "qs"
import {useLocation} from "@reach/router";

const UsersPageAlt = props => {
  const location = useLocation();
  let {id} = qs.parse(location.search, {ignoreQueryPrefix: true});

  let [filtered, updateFiltered] = useState(users)
  let [text, updateText] = useState("");
  let searchLogin = text.trim().toLowerCase();

  useEffect(() => {
    if (searchLogin) {
      id = 0;
    }
    if (id) {
      let result = users.filter(user => user.id === +id)
      updateFiltered(result);
    } else {
      let result = users.filter(user => user.login.includes(searchLogin))
      updateFiltered(result);
    }
  }, [id, searchLogin])

  /*useEffect(() => {
    if (searchLogin) {
     let result = users.filter(user => user.login.includes(searchLogin))
     updateFiltered(result);
    }
  },[searchLogin])*/

  return (
    <div className="container">
      <h1>Пользователи Github (Func Component)</h1>
      <p>Можно использовать параметр в url "?id=x"</p>
      <div>Поиск по имени:</div>
      <div className="mb-20"><input className="form-control" type="text" value={text} onChange={e => updateText(e.currentTarget.value)}/></div>
      <div className="users">
        {
          filtered.map((user, i) => <User key={user.id} user={user}/>)
        }
      </div>
      {
        filtered.length === 0 &&
        <div>Никто не найден, попробуйте изменить критерии поиска.</div>
      }
    </div>
  )
}
export {UsersPageAlt}