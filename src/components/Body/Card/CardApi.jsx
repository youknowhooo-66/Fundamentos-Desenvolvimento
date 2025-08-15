import { useEffect } from "react"
import { useState } from "react"
import styles from './Card.module.css'

export const CardApi = ()=>{
//---PRÁTICA DE CONCEITO ---> USESTATE <---
//   const [contador, setContador] = useState(0);
//   const Acrescimo=()=>{setContador(cont => cont+1)}
//   return(<><p>{contador}</p><button onClick={Acrescimo}>+</button></>)

    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
        })
        console.log(users)
    },[])
    return(<>
    <div className={styles.cardContainerApi}>
    {
        users.map((user)=>(
            <div className={styles.card} key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
                <p>{user.address.suit}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipecode}</p>
            </div>
        ))
    }
    </div>
    </>)
}
//---PRÁTICA DE CONCEITO ---> CALLBACK <---
// function greeting(name) {alert("Olá " + name);}
// function processUserInput(callback) {var name = prompt("Por favor insira seu nome.");callback(name);}processUserInput(greeting);

