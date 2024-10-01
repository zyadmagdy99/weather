
async function getdata(locationk){
  let data=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8468bee53dfc454696e93530242306&q=${locationk}&days=7`)
  let resault =await data.json()
 console.log(resault);
 info(resault.location,resault.current,resault.forecast.forecastday)
}

function info(data,data2,data3){
      document.querySelector("#city").innerHTML = data.name   
      document.querySelector("#temp1").innerHTML = data2.temp_c   
      document.querySelector("#temp2").innerHTML = data3[1].day.avgtemp_c  
      document.querySelector("#temp3").innerHTML = data3[1].day.mintemp_c
      document.querySelector("#temp4").innerHTML = data3[2].day.avgtemp_c 
      document.querySelector("#temp5").innerHTML = data3[2].day.mintemp_c
      document.querySelector("#img").setAttribute("src", data3[2].day.condition.icon);
      document.querySelector("#img2").setAttribute("src", data3[2].day.condition.icon);
      document.querySelector("#img3").setAttribute("src", data3[2].day.condition.icon);
      document.querySelector("#stat").innerHTML = data3[0].day.daily_will_it_rain
      document.querySelector("#stat2").innerHTML = data3[0].day.maxwind_kph
      document.querySelector("#cloud").innerHTML = data3[1].day.condition.text
      document.querySelector("#cloud2").innerHTML = data3[2].day.condition.text
      document.querySelector("#cloud3").innerHTML = data3[3].day.condition.text

    }
    
let find = document.querySelector("#location")

find.addEventListener('input', () => {
    console.log(find.value);
    let location =find.value
    getdata(location)

});

const date = new Date('2024-10-02');

const dayOfWeek = date.getDay();

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = dayNames[dayOfWeek];


const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate(); 

const formattedDate = `${day} ${month}`;

const dayNames2 = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ,'Sunday'];
const dayName2 = dayNames2[dayOfWeek];
const dayNames3 = [  'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ,'Sunday','Monday'];
const dayName3 = dayNames3[dayOfWeek];

document.querySelector("#first").innerHTML=dayName
document.querySelector("#second").innerHTML=formattedDate
document.querySelector("#third").innerHTML=dayName2
document.querySelector("#four").innerHTML=dayName3



