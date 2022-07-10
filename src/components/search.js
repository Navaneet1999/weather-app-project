
import { useEffect } from 'react';
import { useState } from 'react';
import './search.css';

export const Searchbar = () =>{
    const [city, setCity] = useState("Pune");
    const [curr, setCurr] = useState("")
    const [datas, setDatas] = useState([]);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '178606e287ff6c8466e0a61d9f70d58b';

    const handlechange = (e) => {
        
        let inp = e.target.value;
        setCurr(inp);
    }
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            setCity(curr);
        }
      }

    
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setDatas(data)
            console.log(data);
        })
    },[URL])
    
    return(
        <div className="inputbar">
            <input id="inputbox" placeholder='Search...' onChange={handlechange} onKeyPress={handleKeyPress}/>
            {datas.length !== 0 && (
                <div>
                    <div>city name: {datas.name}</div>
                    <div>country {datas.sys.country}</div>
                    <div>wind {datas.wind.speed}</div>
                    <div>temp_max {datas.main.temp_max}</div>
                    <div>temp_min {datas.main.temp_min}</div>
                    <div>humidity {datas.main.humidity}</div>
                </div>
            )}
        </div>
    )
}