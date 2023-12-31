document.addEventListener('DOMContentLoaded', function(){
    preventUserFromEntering();
});
function preventUserFromEntering(){
let isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == true){
        window.location.href = '../pages/login.html'
    }
}

function logOut(){
    window.location.href = '../pages/login.html'
}

function searchbuses() {
  let start = document.getElementById('start').value;
  let end = document.getElementById('end').value;
  let date = document.getElementById('date').value;

  if(start == ""){
    document.getElementById("startError").textContent = "Please select city from dropdown";
  }
  else{
    document.getElementById("startError").textContent = "";
  }
  if(end == ""){
    document.getElementById("endError").textContent = "Please select city from dropdown";
  }
  else{
    document.getElementById("endError").textContent = "";
  }
  if(date == ""){
    document.getElementById("dateError").textContent = "Please select date";
    return false;
  }
  else{
    document.getElementById("dateError").textContent = "";
  }

  let busData = getBusData(start, end);

  displayBusList(busData);
}

function getBusData(start, end) {
  let allBuses = [
      { name: 'Bedi Travels', type: 'AC Seater 2+2', source: 'Chandigarh', destination: 'Manali', departureTime: '11:00 AM',arrivalTime: '8:00 PM',  price: '₹500' },
      { name: 'HRTC', type: 'AC Seater 2+2', source: 'Chandigarh', destination: 'Manali', departureTime: '1:00 PM',arrivalTime: '10:00 PM',  price: '₹500' },
      { name: 'Zing Bus Luxe', type: 'AC Seater 2+2', source: 'Chandigarh', destination: 'Manali', departureTime: '3:00 AM',arrivalTime: '12:00 PM',  price: '₹500' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Chandigarh', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹500' },
      { name: 'HIMSUTA', type: 'Volvo 2+2', source: 'Chandigarh', destination: 'Shimla', departureTime: '4:00 PM', arrivalTime: '10:00 PM', price: '₹500' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Chandigarh', destination: 'Shimla', departureTime: '6:00 PM', arrivalTime: '10:00 PM', price: '₹500' },
      { name: 'Rahi Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Manali', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹500' },
      { name: 'GoldLine Super Delux', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Manali', departureTime: '3:00 PM', arrivalTime: '9:00 PM', price: '₹500' },
      { name: 'Thakur Coatch', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Manali', departureTime: '5:00 PM', arrivalTime: '11:00 PM', price: '₹500' },
      { name: 'Green Buss', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '1:00 PM', arrivalTime: '8:00 PM', price: '₹500' },
      { name: 'Billing Height', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '4:00 PM', arrivalTime: '11:00 PM', price: '₹500' },
      { name: 'New Prem Bus Service', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '6:00 PM', arrivalTime: '12:00 PM', price: '₹500' },
      { name: 'Smart Tour and Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '6:00 PM', price: '₹500' },
      { name: 'Yellow Line Bus', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '3:00 PM', arrivalTime: '7:00 PM', price: '₹5000' },
      { name: 'Sanjay and Sahil', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '4:00 PM', arrivalTime: '8:00 PM', price: '₹500' },
      { name: 'Jai Shri Ram Bus Service', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '5:00 PM', arrivalTime: '11:00 PM', price: '₹500' },
      { name: 'Haryana Roadways', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '6:00 PM', arrivalTime: '12:00 AM', price: '₹500' },
      { name: 'GoldLine Super Delux', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '7:00 PM', arrivalTime: '12:00 AM', price: '₹500' },
      { name: 'BR Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '8:00 PM', arrivalTime: '4:00 AM', price: '₹500' },
      { name: 'NueGo', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '9:00 PM', arrivalTime: '5:00 AM', price: '₹500' },
      { name: 'PEPSU', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '10:00 PM', arrivalTime: '6:00 AM', price: '₹500' },

    ];

  let filteredBuses = allBuses.filter(bus => bus.source === start && bus.destination === end);

  return filteredBuses;
}

function displayBusList(busData) {
  let busListDiv = document.getElementById('buslist');
  busListDiv.innerHTML = '';

  if (busData.length === 0) {
      busListDiv.innerHTML = 'Source City and Destination City cannot be same';
      return;
  }

  busData.forEach(bus => {
      let busListing = `
              <div class="card my-4">
                  <div class="card-body">
                      <div class="row">
                          <div class="col-4">
                              <h4>${bus.name}</h4>
                              <h6 class="font-size-dec">${bus.type}</h6>
                          </div>
                          <div class="col-4">
                              <div class="row">
                                  <div class="col-5">
                                  <h4>${bus.source}</h4>
                                  <h6 class="font-size-dec">${bus.departureTime}</h6>
                                  </div>
                                  <div class="col-2">
                                      <h6><i class="fa-solid fa-arrow-right mt-2"></i></h6>
                                  </div>
                                  <div class="col-5">
                                  <h4 >${bus.destination }</h4>
                                  <h6 class="font-size-dec">${bus.arrivalTime}</h6>
                                  </div>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="row">
                                  <div class="col-4 offset-2">
                                      <h4 class="price mb-0 mt-2">${bus.price}</h4>
                                      <span class="font-size-dec mx-2">per seat</span>
                                  </div>
                                  <div class="col-6">
                                      <button class="select-seat-button" onclick="selectSeats('${bus.name}');">Select Seats</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      busListDiv.innerHTML += busListing;
  });
}

function selectSeats(busName) {
  window.location.href = `../pages/seats.html?bus=${(busName)}`;
}
document.getElementById('date').min = new Date().toISOString().split('T')[0];
