const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const weather=document.querySelector("#weather")
const form=document.querySelector("form")
const search=document.querySelector("#search")
const getweather=async (city)=>{
    weather.innerHTML = `<Loading`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response=await fetch(url)
    console.log(response)
    const data=await response.json()
    console.log(data)
    return showdata(data)
}

const showdata=(data)=>{
    if(data.code=="404"){
        weather.innerHTML = `<h1> 404 CITY NOT FOUND </h1>`
        return;
    }
    weather.innerHTML=`
    <div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
    <div>
      <h2 style="font-size: 40px;">${parseInt(data.main.temp)}℃</h2>
      
      <h2 style="font-size: 30px;" class="last">${data.weather[0].main}</h2>
    </div>
    `

}
form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    }
)
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
