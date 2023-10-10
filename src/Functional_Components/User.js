import { useEffect, useState } from "react";

const User=(props)=>{

    let [count, setCount]=useState(0)

    const [count2]=useState(1)

    useEffect(()=>{
    //  api call here
    },[])

    const {name}=props
    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Count Increase</button>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Contact: deepgarg157@gmail.com</h3>
            <h4>ID:777</h4>
        </div>
    )
}

export default User;