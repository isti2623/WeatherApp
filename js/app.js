const loadWeather = () => {
    const inputField = document.getElementById("input-field");
    const inputText = inputField.value;
    inputField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=3356e96a48d2a31ca5c02d49edd764ef`;

    fetch(url)
        .then(res => res.json())
        .then(data => showWeather(data))
    // .catch(err => alert("Wrong city name!"));
}

const showWeather = temp => {
    console.log(temp);
    const showText = document.getElementById("show-text");

    var details = document.createElement('div')
    details.classList.add('card');
    details.innerHTML = `
    
    <h1 class="name" id="name">${temp.name}</h1>
    <p class="temp">${temp.weather[0].description}</p>
 
    `
    showText.appendChild(details);

}