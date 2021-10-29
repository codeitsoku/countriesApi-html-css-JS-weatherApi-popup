fetch("https://restcountries.com/v3.1/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

function appendData(data) {
    var z = document.getElementById("cnt");
    var a = document.createElement("div");
    a.className = "row mx-lg-n5";

    var addhtml = "";

    data.forEach(function (data) {
        addhtml += `<div class='col col-lg-4'> \n
                <div class='card' style=" margin:10px; background-color:#f2cc8f "> \n
                <h5 class='card-header' align="center" style="background-color:#495057; color: white">${data.name.common}</h5> \n
                <div class='card-body'> \n
                    <center> \n
                        <p class='card-text'>  <img src="${data.flags.png}" alt="img" width='90%' height='150'> <br> Capital: ${data.capital} <br> Region: ${data.region} <br> Country Code: ${data.cca3} \n
                        </p>\n
                    </center>\n
                    <br>\n
                    <center><button onclick="myFunction('${data.name.common}')" class='btn btn-primary' id='btn'>Click for Weather</button></center>\n
                </div>\n
            </div >\n
        </div >`;



    });

    console.log(addhtml);
    a.innerHTML = addhtml;
    z.appendChild(a);

}

function myFunction(code) {

    document.getElementById('popout').style.display = 'block';
    document.getElementById('cnt').style.opacity = '1';


    var api = "https://api.openweathermap.org/data/2.5/weather?q=" + code + "&appid=6b84ff09d97d2a24673f1f1b6c9cc7fe";
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data1) {//data1.weather[0].description


            let n = data1.name;
            let h = data1.main['temp'];
            let w = data1.wind['speed'];
            let m = data1.main['humidity'];
            document.getElementById("span_county_name").innerHTML = n;
            document.getElementById("span_humidity").innerHTML = m;
            document.getElementById("span_Wind_Speed").innerHTML = w;
            document.getElementById("span_country_temp").innerHTML = h;



            //alert(`Weather:-\n\n\nMain: ${data1.weather[0]['main']}\n\nDescription: ${data1.weather[0]['description']}\n\nMinimum Temperature: ${data1.main.temp_min}\n\n
            //Maximum Temperature: ${data1.main.temp_max}\n\nPressure: ${data1.main.pressure}\n\nHumidity: ${data1.main.humidity}\n\nWind Speed: ${data1.wind.speed}`);
        })
        .catch(function (err) {
            console.log(err);
        });

}
document.getElementById('closeBtn').addEventListener('click',()=>{
    document.getElementById('popout').style.display='none';
})








