var searchCity = document.getElementById("findCity");
var city = document.getElementById("inputCity");
var nameCity = document.getElementById("cityName");
searchCity.addEventListener("click", weatherApi);
function weatherApi(data){
        cityName.innerHTML = city.value;
	data.preventDefault();
        var myApi = "a16c0c128d9ff7b80fb914bf2e7a2b2c";
        var openWeather = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
        var think = "&=lang=se&appid=";
        var link = openWeather + city.value + think + myApi;
	var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	var cloud = [] ;
        var humedad= [];
        var presion= [] ;
        var gear = [];
        var mainStatus = [];
	$.ajax({
		method: "GET",
		url: link,
		success: function(finalWeather){
                        var nDay = new Date();
                        var nDay = nDay.getDay();
                        var longitudCity = (finalWeather.city.coord.lon);
        		var latitudCity = (finalWeather.city.coord.lat);
        		var zero = 0;
        			for (var i =0 ; i <= (weekDay.length-1) ; i++) {
        				var zero = (finalWeather.list[i].clouds);
        				cloud.push(zero);
        				var zero = (finalWeather.list[i].humidity);
        				 humedad.push(zero);
        				var zero = (finalWeather.list[i].pressure);
        				 presion.push(zero);
        				var zero = (finalWeather.list[i].speed);
        				 gear.push(zero);
        				var zero = (finalWeather.list[i].weather[0].main);
        				mainStatus.push(zero);
        			};
                        for (var j = 0 ; j <= (weekDay.length-1); j++) {
                                var weatherPeriod = $(".mainScreen .space");
                                if (nDay==(j+1)) {
                                        var finalInfo ="<h1 class='mainScreen'><center>" + weekDay[j] + "</center></h1>" +
                                                        "<h1><center>Coordinates:</h1></center>" +
                                                        "<p><center> Latitude:" + latitudCity + "</center></p>" + 
                                                        "<p><center> Longitude:" + longitudCity + "</center></p>"+
                                                        "<h1><center>Weather:</h1></center>" +
                                                        "<p><center> Clouds:" + cloud[j] + "</center></p>" +
                                                        "<p><center> Humididy:" + humedad[j] + "</center></p>" + 
                                                        "<p><center> Pressure:" + presion[j] + "</center></p>" + 
                                                        "<p><center> Speed:" + gear[j] + "</center></p>" + 
                                                        "<p><center> Status Weather:" + mainStatus[j] + "</center></p>"+
                                                        "<center><img src='" + mainStatus[j] + ".png' class='imgMain'></center>";
                                        weatherPeriod.html(finalInfo); 
                                };
                        };
                        for (var x =0 ; x <= (weekDay.length-1); x++) {
                                var weatherPeriod = $(".dailyScreen ." +  weekDay[x]);
                                var finalInfo ="<h1><center>" + weekDay[x] + "</center></h1>" +
                                                "<h1><center>Coordinates:</h1></center>" +
                                                "<p> Latitude:" + latitudCity + "</p>" + 
                                                "<p> Longitude:" + longitudCity + "</p>"+ 
                                                "<h1><center>Weather:</h1></center>" +
                                                "<p> Status Weather:" + mainStatus[x] + "</p>"+
                                                "<p> Humidity:" + humedad[x] + "</p>" + 
                                                "<p> Pressure:" + presion[x] + "</p>" + 
                                                "<p> Speed:" + gear[x] + "</p>" + 
                                                "<p> Clouds:" + cloud[x] + "</p>" +
                                                "<img src='" + mainStatus[x] + ".png' class='imgSecond'>";
                                weatherPeriod.html(finalInfo);    
                        };

		}
	});

}