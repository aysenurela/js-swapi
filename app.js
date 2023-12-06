// Task 1: Making an API Call
const fetchData = () => {
  const swapiData = localStorage.getItem('swapiData');

  if (swapiData) {
    // use storage data
  } else {
    // fetch data from the API
  }
} 

// Task 2: Data Filtering Function
function filterData(array) {
  
}

// Task 3: UI Rendering Function
const createInfoCard = (person) => {
  
}

// Example Usage (starting the project)
fetchData().then(() => {
  const filteredData = filterData(data);
  // filteredData.forEach(...);
});