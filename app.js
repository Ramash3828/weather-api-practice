const api_keys = `b7819ff783c31630c1715a0ad83bf947`;

const tempareture = () => {
    const inputField = document.getElementById("inputField");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${api_keys}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => weather(data));

    inputField.value = "";
};

const getElement = (ID, item) => {
    document.getElementById(ID).innerText = item;
};
const weather = (data) => {
    console.log(data);
    getElement("city_name", data.name);
    getElement("temp", data.main.temp);
    getElement("lead", data.weather[0].main);

    //Set weather image link
    const w_url = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const w_img = document.getElementById("weather-img");
    w_img.setAttribute("src", w_url);
};

function name() {
    console.log("Hello");
}