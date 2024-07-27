let cityName = document.getElementById("cityName");
let city1 = document.getElementById("city");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

async function fetchCityName()
{
    let city = cityName.value;
    if(city== "")
    {
        alert("ENTER A CITY NAME");
    }
    else{
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85ecfebb9a0e7a34f32f326ea0648424`;
        let data = await fetch(api);
        let dt = await (data.json())
        //console.log(dt)
        city1.innerText = dt.name;
        temp.innerText ="Temp : "+((dt.main.temp)-273.15).toFixed(3)+"°C";
        humidity.innerText ="Humidity : "+dt.main.humidity+"%";
        wind.innerText="Wind Speed : "+dt.wind.speed+"km/hr";
    }
    cityName.value =""
}