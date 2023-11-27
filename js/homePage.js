document.addEventListener('DOMContentLoaded', function(){
    preventUserFromEntering();
});
function preventUserFromEntering(){
let isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == true){
        window.location.href = '../pages/login.html'
        isLoggedIn = false
    }
}

function logOut(){
    localStorage.setItem('isLoggedIn', false);
    window.location.href = '../pages/login.html'
}

// function searchBus(){
//     document.querySelector('.hideBus').style.display = "block";
// }

// bus search
function searchbuses() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
  
    let busData = getBusData(start, end)
  
    displayBusList(busData)
  }
  
  function getBusData(start, end) {
    let buses = [
      {start: 'Chandigarh', end: 'Delhi', time: '10;00 AM', price: '250'},
      {start: 'Assam', end: 'Shimla', time: '10;00 pM', price: '300'},
      {start: 'Chandigarh', end: 'Shimla', time: '12;00 pM', price: '300'},
      {start: 'Chandigarh', end: 'Delhi', time: '02;00 AM', price: '300'},
      {start: 'Assam', end: 'Delhi', time: '09;00 pM', price: '250'},
      {start: 'Assam', end: 'Shimla', time: '08;00 AM', price: '250'},
      {start: 'Chandigarh', end: 'Delhi', time: '04;00 pM', price: '400'},
      {start: 'Chandigarh', end: 'Uttrakhand', time: '06;00 AM', price: '250'},
      {start: 'Assam', end: 'Shimla', time: '01;00 pM', price: '340'},
      {start: 'Assam', end: 'Uttrakhand', time: '12;00 AM', price: '250'},
      {start: 'Chandigarh', end: 'Uttrakhand', time: '11;00 pM', price: '400'},
      {start: 'Assam', end: 'Delhi', time: '01;00 pM', price: '300'}
    ]
  
    let filteredBuses = buses.filter((bus) => bus.start == start && bus.end == end)
  
    return filteredBuses
  }
  
  function displayBusList(busData) {
    let busListDiv = document.getElementById('buslist')
    busListDiv.innerHTML = '' 
  
    if (busData.length === 0) {
      busListDiv.innerHTML = 'No buses available for the selected route and date.'
      return
    }
  
    let ul = document.createElement('ul')
    busData.forEach((bus) => {
      let li = document.createElement('li')
      let input = document.createElement('input')
      input.setAttribute("id", "booknow");
      input.setAttribute("type", "button");
      input.setAttribute("onclick", "booknow()");
      input.value = 'Book Now'
      li.textContent = `From: ${bus.start}, To: ${bus.end}, Time: ${bus.time}, price: ${bus.price}`;
      ul.appendChild(li)
      
      li.appendChild(input)
    })
            
    busListDiv.appendChild(ul)
  }
  
  function booknow(){
    window.location.href = '../pages/pages.html'
  }
  