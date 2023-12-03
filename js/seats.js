document.addEventListener('DOMContentLoaded', function () {
    const seats = document.querySelectorAll('.seats');
    const seatPrice = 500;
    const selectedSeatsElement = document.getElementById('selected-seats');
    const totalAmountElement = document.getElementById('total-amount');

    const bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || [];

    const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    let selectedSeats = [...storedSelectedSeats];

    function updateSelectedSeats() {
        selectedSeatsElement.textContent = selectedSeats.join(', ');

        const amount = selectedSeats.length * seatPrice;
        totalAmountElement.innerHTML = ` ₹ ${amount}`;

        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    }

    function toggleSeat(seat) {
        const seatNumber = seat.textContent;

        if (bookedSeats.includes(seatNumber)) {
            alert('This seat is already booked.');
            return;
        }

        const index = selectedSeats.indexOf(seatNumber);

        if (index === -1 && selectedSeats.length < 5) {
            seat.classList.add('seat-selected');
            selectedSeats.push(seatNumber);
        } else if (index !== -1) {
            seat.classList.remove('seat-selected');
            selectedSeats.splice(index, 1);
        } else {
            alert('You can select a maximum of 5 seats.');
        }

        updateSelectedSeats();
    }

    seats.forEach(seat => {
        const seatNumber = seat.textContent;
        if (bookedSeats.includes(seatNumber)) {
            seat.classList.add('seat-selected');
        }
    });

    seats.forEach(seat => {
        if (storedSelectedSeats.includes(seat.textContent)) {
            seat.classList.add('seat-selected');
        }
    });

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            toggleSeat(seat);
        });
    });

    const payNowButton = document.getElementById('pay-now-button');
    payNowButton.addEventListener('click', function () {
        if (selectedSeats.length < 2) {
            alert('Please select at least 2 seats before proceeding to payment.');
        } else {
            bookedSeats.push(...selectedSeats);
            localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));

            selectedSeats = [];
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));

            window.location.href = '../pages/ticket.html';
        }
    });
});
