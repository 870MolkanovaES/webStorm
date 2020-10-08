import React from 'react';
import {NavLink} from "react-router-dom";

const Settings = (props)=>{
    let user=props.function();
    let changeSettings=()={

    }
    return(<div>
        <h1>Настройки страницы</h1>
        <p>Имя: <span>{user.name}</span> <button onClick={changeSettings}>изменить</button></p>
        <p>Фамилия: <span>{user.lastname}</span> <span>[изменить]</span></p>
        <p>[изменить пароль]</p>
</div>
    )
}

export default Settings;