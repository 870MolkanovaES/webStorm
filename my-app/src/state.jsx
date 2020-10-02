/* user из БД*/
const user= {
    name: "Иван",
    lastname: "Иванов",
    email: "ivanov@mail.ru",
    id: "1",
    about: "Тут я рассказываю о себе...",
    avatar: "https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
}
const users={
    0:  {name: "Сигизмунд", lastname: "Никеров", id:2},
    1:  {name: "Христина", lastname: "Бендлина", id:4},
    2:  {name: "Аза", lastname: "Зыкина", id:8},
    3:  {name: "Максим", lastname: "Никеров", id:9},
    4:  {name: "Евдокия", lastname: "Зыкина", id:15},
    5:  {name: "Варфоломей", lastname: "Кобонов", id:18},
    6:  {name: "Янина", lastname: "Кобонова", id:21},
    7:  {name: "Христина", lastname: "Кугушева", id:22},
    8:  {name: "Христина", lastname: "Зыкина", id:23},
    9:  {name: "Варфоломей", lastname: "Левченко", id:28},
    10: {name: "Ираида", lastname: "Гречко", id:31}
}

export function getUser(userId){
    for (let i = 0; i < Object.keys(users).length; i++)
        if (users[i].id == userId)
            return users[i];
    return user;
}
export function getUsers(){
    return users;
}

