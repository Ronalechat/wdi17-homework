
var lines = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};
$(document).ready(function(){


 var departSelector = $('<select/>', {id: "departSelector"});
 var arriveSelector = $('<select/>', {id: "arriveSelector"});
 var arriveHeading = $('<h2/>').html("Going to: ")
 var buttonMaker = $('<button/>', {
   text: "Make my trip!",
   id: "submit",
   $('submit').click(function() {
     // Event listener

     //On submit, get values of depart/arrive selector
     // call plan_trip, put those values in. 
   }
 });

for (var line in lines){
  for( var station in lines[line]){
  $('<option/>', {value: line + ':' + lines[line][station], text:  line + ': ' + lines[line][station]}).appendTo(departSelector);
  }
}

for (var line in lines){
  for( var station in lines[line]){
  $('<option/>', {value: line + ':' + lines[line][station], text:  line + ': ' + lines[line][station]}).appendTo(arriveSelector);
  }
}

 departSelector.appendTo("#input");
 arriveHeading.appendTo("#input")
 arriveSelector.appendTo("#input");
 buttonMaker.appendTo("#input")


  var check_stations = function (line, depart, arrive) {
    var mtaLine = lines[line]
    var departIndex = _.indexOf(mtaLine, depart);
    var arriveIndex = _.indexOf(mtaLine, arrive);
    var trip = [];
    if (departIndex < arriveIndex) {
      trip = mtaLine.slice(departIndex, (arriveIndex + 1))
    } else {
      trip = mtaLine.slice(arriveIndex, (departIndex + 1)).reverse()
    }
    return trip;
  };// end of check_stations

  var plan_trip = function (departLine, departStation, arriveLine, arriveStation) {
    if (departLine === arriveLine) {
      var singleLineTrip = check_stations(departLine, departStation, arriveStation)
      var tripLength = singleLineTrip.length;
    } else {
      var firstLeg = check_stations(departLine, departStation, "Union Square")
      var secondLeg = check_stations(arriveLine, "Union Square", arriveStation)
      tripLength = firstLeg.concat(secondLeg).length;
    }
    console.log(singleLineTrip);
    console.log(firstLeg);
    console.log("Change at Union square to the " + arriveLine + " line");
    console.log(secondLeg);
    console.log("Your journey has a total of " + tripLength + " stops");
    console.log(tripLength);
  };// End of plan_trip
  console.log(plan_trip("N", "Times Square", "6", "Astor Place"))

}); // End of document ready
