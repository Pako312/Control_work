
const API_KEY = "401dac943ba445ff9b381057231711";
const input = document.querySelector(".input");
const weatherBox = document.querySelector(".weatherBox")

// getWeather(url);

async function getWeather(value) {
    try { const resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=401dac943ba445ff9b381057231711&q=${value}`);
    const respData = await resp.json();
    console.log(respData)
    showData(respData)
    console.log(respData)
} catch(error) {
 console.log(error)

}

}

function showData(respData) {
    const localtime = respData.location.localtime.split(' ')
    const [date, time] = localtime
    const now = new Date(date)

    const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    document.getElementById("span1").innerHTML = respData.location.name
    document.getElementById("span2").innerHTML = formattedDate
    document.getElementById("span3").innerHTML = localtime
    document.getElementById("temp").innerHTML= Math.round(respData.current.temp_c)+"°C";
    document.getElementById("icon").src = `https:${respData.current.condition.icon}`;
    document.getElementById("condition").innerHTML = respData.current.condition.text;
    document.getElementById("feelslike").innerHTML ="Feels like: " + Math.round(respData.current.feelslike_c)+"°C";
    document.getElementById("humidity").innerHTML ="Humidity: " + respData.current.humidity+"%";
    document.getElementById("wind").innerHTML ="Wind: " + respData.current.wind_kph+" kph";
    // document.getElementById("country").innerHTML = respData.location.country;

}

// function nothing(){
//     weatherBox.classlist.remove("weatherBox");
//     weatherBox.classlist.add("weatherBox_off");

// }

input.addEventListener('keypress', (e) => {
    const value = input.value
    if (e.key === "Enter" && value) {
        getWeather(value)
    }   
    // else if (value === 0) {
    //     weatherBox.classlist.remove("weatherBox");
    //     weatherBox.classlist.add("weatherBox_off");
    // }
});







