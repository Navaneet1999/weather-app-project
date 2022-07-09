import { useEffect } from 'react';
import { useState } from 'react';
import './search.css';

export const Searchbar = () =>{
    let [city, setCity] = useState("");
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '178606e287ff6c8466e0a61d9f70d58b';

    const handlechange = (e) => {
        const inp = e.target.value;
        setCity(inp)
    }
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    })
    return(
        <div className="inputbar">
            <input id="inputbox" placeholder='Search...' onChange={handlechange}/>
            <div></div>
        </div>
    )
}