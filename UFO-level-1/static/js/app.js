// from data.js
// Get a reference to the following variables
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var inputFieldDate = d3.select("#datetime")

// Appending a table to the webpage, adding rows and the given columns
var populate = (dataInput) => {

  dataInput.forEach(ufoReport => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufoReport[column])
    )
}
// Populating the table
populate(data);

// Console.log the ufo data from data.js
console.log(data)

// Filter only the date/time attribute and creating a button for this
// Defining our Filter button
const button = document.getElementById("filter-btn")

button.addEventListener("click", function (e) {
  e.preventDefault()
  console.log('It Works')
  
  // Defining input variables
  var inputDate = inputFieldDate.property("value").trim();

  // Filter by field matching input value
  var filterDate = data.filter(data => data.datetime === inputDate);
  //console.log(filterDate)

  // Adding filtered date to table
  tbody.html("");

  let response = {
    filterDate
  }

  if (response.filterDate.length !== 0) {
    populate(filterDate);
  }

  // If the date filter does not work, then:
  else {
    tbody.append("tr").append("td").text("Unfortunately No Sightings... Let's move on!");
  }
})

// Adding a Reset button
const reset_button = document.getElementById("reset-btn")
reset_button.addEventListener("click", function (e) {
  e.preventDefault()
  console.log('Reset Works')
  tbody.html("");
  populate(data)
  
})