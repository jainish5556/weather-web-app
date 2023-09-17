let c = document.getElementById("search");
let click = document.getElementById("click");
let h = document.getElementById("h");

// const APIKEY = "43a55de379f0d2e8efacenc03336312c3";
let  url = `https://api.openweathermap.org/data/2.5/weather?appid=43a55de379f0d2e8efacec03336312c3&units=metric&q=`;

async function check(city){

const response = await fetch(url+ city);

var data = await response.json(); 

console.log(data);
document.getElementById("h").innerText = data.main.temp + " °C";
document.getElementById("o").innerText = data.name;
document.getElementById("r").innerText = data.main.pressure +"hPa";
document.getElementById("s").innerText = data.wind.speed + "Km/h";
document.getElementById("e").innerText = data.main.humidity +"%";
document.getElementById("f").innerText = data.main.feels_like +"°C";


}



const apikey="43a55de379f0d2e8efacec03336312c3";

            // const url= `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
            
 function forecast(city){
    const url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`;
            fetch(url).then((res)=>{
                return res.json();
            }).then((forecast)=>{
                console.log(forecast);
            
for(i=0;i<40;i++ ) {

            document.getElementById("time" + (i+1)).innerText = forecast.list[i].dt_txt 
            document.getElementById("te" + (i+1)).innerText = forecast.list[i].main.temp + " °C"
};
            })
            
        }




        click.addEventListener( "click", ()=> {
   
            check(c.value);
            forecast(c.value);
        });







// for window load
















        let  ur = `https://api.openweathermap.org/data/2.5/weather?appid=43a55de379f0d2e8efacec03336312c3&units=metric&q=`;

        async function check(city){
        
        const response = await fetch(ur+city);
        
        var dat = await response.json(); 
        
        console.log(dat);
        document.getElementById("h").innerText = dat.main.temp + " °C";
        document.getElementById("o").innerText = dat.name;
        document.getElementById("r").innerText = dat.main.pressure +"hPa";
        document.getElementById("s").innerText = dat.wind.speed + "Km/h";
        document.getElementById("e").innerText = dat.main.humidity +"%";
        document.getElementById("f").innerText = dat.main.feels_like +"°C";





        const apike="43a55de379f0d2e8efacec03336312c3";

        // const url= `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
        
function forecasting(city){
const url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apike}&units=imperial`;
        fetch(url).then((fore)=>{
            return fore.json();
        }).then((forec)=>{
            console.log(forec);
        
for(i=0;i<40;i++ ) {

        document.getElementById("time" + (i+1)).innerText = forec.list[i].dt_txt 
        document.getElementById("te" + (i+1)).innerText = forec.list[i].main.temp + " °C"
};
        })
        
    }
    forecasting('ahmedabad')
        
        }


        




     







































 























