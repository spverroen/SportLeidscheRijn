function navbar() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById("topnavlogo").style.display="none";

    } else {
      x.className = "topnav";
      document.getElementById("topnavlogo").style.display="block";
    }
}


function initMap() {
  var uluru = {lat: 52.0934089, lng: 5.0101549};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
