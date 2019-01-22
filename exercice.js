

function ajaxRequest()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            document.getElementById('pp').innerHTML = this.responseText;
            var objMeteo = this.responseText;

        }

      var   weather = JSON.parse(objMeteo);



     document.getElementById("pp").innerHTML= weather.name;




        if(document.getElementById('pp').innerHTML ==="undefined"){
            document.getElementById('date').innerHTML="veuillez entrer un nom de ville valide";
            document.getElementById('date').style.color ="#bf170a";


        }else{

            document.getElementById('date').style.color ="whitesmoke";

            function dateFr()
            {



                var jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

                var mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];


                var date = new Date();



                var message = jours[date.getDay()] + " ";

                message += date.getDate() + " ";

                message += mois[date.getMonth()] + " ";

                message += date.getFullYear();

                return message;

            }
            document.getElementById('date').innerHTML= dateFr();



        document.getElementById("temperature").innerHTML=  Math.round(weather.main.temp) +"°C";
        document.getElementById("tempmin").innerHTML= "temperature min : "+ weather.main.temp_min+"°C";
        document.getElementById("tempmax").innerHTML= "temperature max : "+ weather.main.temp_max+"°C";
        document.getElementById('pression').innerHTML ="pression atmospherique : "+weather.main.pressure + " Pa";
        document.getElementById('vent').innerHTML = "vitesse du vent : "+(weather.wind.speed*3.6).toFixed(2) + "km/h";
        document.getElementById('humidite').innerHTML = "humidité : "+weather.main.humidity + "%";
        document.getElementById('longitude').innerHTML = "longitude : "+weather.coord.lon + " °";
        document.getElementById('latitude').innerHTML = "latitude : "+weather.coord.lat + " °";



          if (document.getElementById("ville").innerHTML != weather.name ){

              document.getElementById('map').innerHTML = "";

        var map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([weather.coord.lon, weather.coord.lat]),
                zoom: 13
            })
        });

    }
    }
    };
    var valeur = document.getElementById('ville').value;



    xhttp.open("GET", "index.php?ville="+valeur, true);
    xhttp.send();



}

document.getElementById('chercher').addEventListener('click',ajaxRequest);








