import React, {Component} from "react";
import {users} from "users";
import {User} from "components/User";
import qs from "qs"

class UsersPage extends Component {
  state = {
    filtered: users,
    text: ""
  }

  updateText = (text) => {
    this.setState({text})

    let searchLogin = text.trim().toLowerCase();
    if (searchLogin)
      this.setState({
        filtered: users.filter(user => user.login.includes(searchLogin))
      })
  }

  componentDidMount() {
    let query = qs.parse(location.search, {ignoreQueryPrefix: true});
    if (query.id)
      this.setState({filtered: users.filter(user => user.id === +query.id)});
  }


  render() {
    let {text, filtered} = this.state;
    return (
      <div className="container">
        <h1>Пользователи Github (Class Component)</h1>
        <p>Можно использовать параметр в url "?id=x"</p>
        <div>Поиск по имени:</div>
        <div className="mb-20"><input className="form-control" type="text" value={text} onChange={e => this.updateText(e.currentTarget.value)}/></div>
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
}

export {UsersPage}