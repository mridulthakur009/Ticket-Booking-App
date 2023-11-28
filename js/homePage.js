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

  let busData = getBusData(start, end);

  displayBusList(busData);
}

function getBusData(start, end) {
  let allBuses = [
      { name: 'Bedi Travels', type: 'AC Seater 2+2', source: 'Chandigarh', destination: 'Manali', departureTime: '11:00 AM',arrivalTime: '8:00 PM',  price: '₹600' },
      { name: 'Bedi Travels', type: 'AC Seater 2+2', source: 'Chandigarh', destination: 'Manali', departureTime: '11:00 AM',arrivalTime: '8:00 PM',  price: '₹600' },
      { name: 'Bedi Travels', type: 'AC Seater 2+2', source: 'Chandigarh', destination: 'Manali', departureTime: '11:00 AM',arrivalTime: '8:00 PM',  price: '₹600' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Chandigarh', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'HIMSUTA', type: 'Volvo 2+2', source: 'Chandigarh', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Chandigarh', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Manali', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Manali', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Manali', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Shimla', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Chandigarh', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },
      { name: 'Reo India Travels', type: 'AC Semi-Sleeper 2+2', source: 'Manali', destination: 'Shimla', departureTime: '2:00 PM', arrivalTime: '8:00 PM', price: '₹800' },

    ];

  let filteredBuses = allBuses.filter(bus => bus.source === start && bus.destination === end);

  return filteredBuses;
}

function displayBusList(busData) {
  let busListDiv = document.getElementById('buslist');
  busListDiv.innerHTML = '';

  if (busData.length === 0) {
      busListDiv.innerHTML = 'No buses available for the selected route and date.';
      return;
  }

  busData.forEach(bus => {
      let busListing = `
              <div class="card mt-4">
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
  window.location.href = `../pages/seats.html?bus=${encodeURIComponent(busName)}`;
}