
$(document).ready(function() {
/**
 * 
 * GLOBALS
 */
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAaBxgXJBVE_9C8qzRu_ebV1sscAVqiers",
    authDomain: "group-project-4da86.firebaseapp.com",
    databaseURL: "https://group-project-4da86.firebaseio.com",
    projectId: "group-project-4da86",
    storageBucket: "group-project-4da86.appspot.com",
    messagingSenderId: "847074672907"
  };
  firebase.initializeApp(config);

  /**
   *  geoIP defaults to empty string
   *  rangeInMile defaults to 10
   *  sortField defaults to datetime_local
   *  sortOrder defaults to desc the other option is asc
   */
  var seatgeek = {
    url : "https://api.seatgeek.com/2/events?client_id=MTM3NTY1NjV8MTU0MTAzNjQ2MC42NA",
    geoIP : "",
    rangeInMiles : 10,
    sortField : "datetime_local",
    sortOrder : "desc"
  };

/**
 * 
 * END OF GLOBALS
 */

/**
 * sample api : https://api.seatgeek.com/2/events?client_id=MTM3NTY1NjV8MTU0MTAzNjQ2MC42NA&geoip=73.241.184.216&range=12mi&sort=datetime_local.desc
 */

 /**
  * @param pass the seakgeek obj fully populated
  * @param geoIP this is the ip from the browser
  * @param radiusInMiles  this is the radius from the geoip address point.
  * 
  * Use the url to search for events that are now and in the future
  */
 function getData() {

    $.ajax({
      url : seatgeek.url + "&geoip=" + seatgeek.geoIP + "&range=" + seatgeek.rangeInMiles + "mi" +
      "&sort=" + seatgeek.sortField + "." + seatgeek.sortOrder,
      method : "GET"
    }).then(function(res){

      return res;

    });

 };

 /**
  * testing
  */


 seatgeek.geoIP = "73.241.184.21";
 console.log(getData());

});