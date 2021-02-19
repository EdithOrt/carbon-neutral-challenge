import React, { useEffect, useState } from 'react'

const GetData = () => {
    let [requests, setRequests] = useState([]);
    useEffect(() =>{
       return fetch('https://raw.githubusercontent.com/EdithOrt/dbt/main/db.json')
       .then(res =>res.json())
       .then(res => setRequests(res))
    }, [])
    return requests
}

//https://www.toroto.mx/api/projects
 
export default GetData;