const seats = document.querySelectorAll('.seats');
const selectedSeats = [];
const unavailableSeats = document.querySelectorAll('.seats.seat-unavailable');
const totalAmountElement = document.getElementById('totalAmount');

for (const seat of seats) {
  seat.addEventListener('click', () => {
    if (unavailableSeats.includes(seat) || selectedSeats.length >= 5) {
      return;
    }

    const seatNumber = parseInt(seat.textContent);

    if (selectedSeats.includes(seatNumber)) {
      selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
      seat.classList.remove('selected');
    } else {
      selectedSeats.push(seatNumber);
      seat.classList.add('selected');
    }

    updateTotalAmount();
  });
}

function updateTotalAmount() {
  const totalPrice = selectedSeats.length * 500;
  totalAmountElement.textContent = `Total Amount: ₹${totalPrice}`;
}
