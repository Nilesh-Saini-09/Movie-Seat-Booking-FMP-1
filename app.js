const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// the + sign is to convert string to number
let ticketPrice = +movieSelect.value;

// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy selected seats into arr
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    // storing local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
   
    // Map through array
    // return a new array indexes

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

// Movie Select Event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Seat Click Event

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})


