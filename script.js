document.getElementById('search').addEventListener('click', () => {
    const cityNameInput = document.getElementById('city-name-input').value;
    // console.log(cityNameInput);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=8cb6069befbbb8c52a74a977a899ed39`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            const name = data.name; // console.log(data.name);
            if(name == undefined){
                alert("City is not defined")
            }else{
                document.getElementById('city-name').innerText = name;
            }

            const temp = data.main.temp;
            document.getElementById('temp').innerText = temp;// console.log(data.main.temp);
            
            const description = data.weather[0].description;
            document.getElementById('description').innerText = description; // console.log(data.weather[0].description);
            const icon = data.weather[0].icon;
            document.getElementById('icon').src =`http://openweathermap.org/img/wn/${icon}@2x.png`;
        });
});