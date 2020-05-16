// from data.js
// Get a reference to the following variables
var tbody = d3.select("tbody");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldShape = d3.select("#shape");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Appending a table to the webpage, adding rows and the given columns
var populate = (dataInput) => {

  dataInput.forEach(ufoReport => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufoReport[column])
    )
  });
}
// Populating the table
populate(data);

// Console.log the ufo data from data.js
console.log(data)

// Filters attributes and creating a button for this
// Defining our Filter button
const button = document.getElementById("filter-btn")

button.addEventListener("click", function (e) {
  e.preventDefault()
  console.log('It Works')
  // Defining input variables
  var inputDate = inputFieldDate.property("value").trim();
  var inputCity = inputFieldCity.property("value").toLowerCase().trim();
  var inputState = inputFieldState.property("value").toLowerCase().trim();
  var inputShape = inputFieldShape.property("value").toLowerCase().trim();

  // Filters by field matching input value
  var filterDate = data.filter(data => data.datetime === inputDate);
  var filterCity = data.filter(data => data.city === inputCity);
  var filterState = data.filter(data => data.state === inputState);
  var filterShape = data.filter(data => data.shape === inputShape);
  var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);

  // Adding the requested all filters to table
  tbody.html("");

  let response = {
    filterData, filterCity, filterDate, filterState, filterShape
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  }

  if (response.filterState.length !== 0) {
    populate(filterState);
  }

  if (response.filterShape.length !== 0) {
    populate(filterShape);
  }
  else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))) {
    populate(filterCity) || populate(filterDate);
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