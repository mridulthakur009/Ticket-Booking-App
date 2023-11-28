document.addEventListener('DOMContentLoaded', function () {
    const seats = document.querySelectorAll('.seats');

    const selectedSeats = [];

    function updateSelectedSeats() {
        const selectedSeatsElement = document.getElementById('selected-seats');
        const totalAmountElement = document.getElementById('total-amount');

        selectedSeatsElement.textContent = selectedSeats.join(', ');

        const seatPrice = 100; 
        const amount = selectedSeats.length * seatPrice;

        totalAmountElement.innerHTML = ` ₹ ${amount}`;
    }

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('seat-selected');

            const seatNumber = seat.textContent;

            if (selectedSeats.includes(seatNumber)) {
                selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
            } else {
                selectedSeats.push(seatNumber);
            }

            if (selectedSeats.length > 5) {
                alert('You can select a maximum of 5 seats.');
                seat.classList.remove('seat-selected'); 
                selectedSeats.pop();
            }

            updateSelectedSeats();
        });
    });

    const payNowButton = document.getElementById('pay-now-button');
    payNowButton.addEventListener('click', function () {
        if (selectedSeats.length < 2) {
            alert('Please select at least 2 seats before proceeding to payment.');
        } else {

            window.location.href = '../pages/ticket.html';
        }
    });
});

