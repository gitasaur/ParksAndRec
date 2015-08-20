/**
 * Created by marcusklein on 20/08/15.
 */

var lat = -36.840, lng = 174.74;


var styles = [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}];
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 14,
            styles: styles
        });

        map.data.loadGeoJson('javascripts/ParkSportFieldMarking.json');

        map.data.setStyle({
            fillColor: 'blue',
            strokeWeight: 0
        });

        navigator.geolocation.getCurrentPosition(function(pos){
            lat = pos.coords.latitude.toFixed(3);
            lng = pos.coords.longitude.toFixed(3);
            var myLatlng = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
            map.panTo(myLatlng);
            map.setZoom(15);
            console.log("should have moved");
        }, function(error) {
            console.error("something went wrong");
            console.error(error);
        });

      }