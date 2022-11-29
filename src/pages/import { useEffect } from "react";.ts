import { useEffect } from "react";

useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json")
        const data = await response.json()
        // setUsers(data);
    }
    fetchData()
},[])