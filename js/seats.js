document.addEventListener('DOMContentLoaded', function () {
    const seats = document.querySelectorAll('.seats');
    const selectedSeats = [];
    const seatPrice = 100;
    const selectedSeatsElement = document.getElementById('selected-seats');
    const totalAmountElement = document.getElementById('total-amount');

    function updateSelectedSeats() {
        selectedSeatsElement.textContent = selectedSeats.join(', ');

        const amount = selectedSeats.length * seatPrice;
        totalAmountElement.innerHTML = ` ₹ ${amount}`;
    }

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            const seatNumber = seat.textContent;

                if (selectedSeats.length < 5) {
                    seat.classList.add('seat-selected');
                    selectedSeats.push(seatNumber);
                } else {
                    alert('You can select a maximum of 5 seats.');
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
