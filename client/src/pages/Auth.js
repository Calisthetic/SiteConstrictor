import { Component } from "react";
import { Link } from "react-router-dom";
import s from "./Pages.module.css"

export default class Auth extends Component {
  render() {
    return (
      <div className={s.background}>
        <div className={s.field_back}>
          <input type="text" placeholder="login" className={s.input}></input>
          <input type="text" placeholder="password" className={s.input}></input>
            <Link style={{textDecoration: "none"}} to="/main"><div className={s.button}>Entry</div></Link>
        </div>
      </div>
    )
  }
}