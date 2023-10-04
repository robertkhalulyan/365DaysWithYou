// Function to calculate time remaining until January 22nd of the next year
function getTimeRemaining() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 22);
    const timeRemaining = nextYear - now;
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    return {
        total: timeRemaining,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Function to check the entered password and redirect to the poem page
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const correctPassword = 'october42022';

    if (passwordInput.value === correctPassword) {
        // Correct password, redirect to the poem page
        window.location.href = 'poem.html';
    } else {
        // Incorrect password, display an error message
        alert('Incorrect password. Please try again.');
        passwordInput.value = ''; // Clear the input field
    }
}
// Calculate the difference between two dates in days
function calculateDaysBetweenDates(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDifference = Math.round(Math.abs((start - end) / oneDay));
    return daysDifference;
}

// Update the "Days together" section with the calculated days
function updateDaysTogether() {
    const specialDate = new Date('2023-01-22'); // Your special date
    const currentDate = new Date();
    const daysCount = calculateDaysBetweenDates(specialDate, currentDate);

    let daysMessage = "";
    if (daysCount > 365) {
        const years = Math.floor(daysCount / 365);
        const remainingDays = daysCount % 365;
        if (years === 1) {
            daysMessage = `1 year`;
        } else {
            daysMessage = `${years} years`;
        }
        if (remainingDays > 0) {
            daysMessage += `, ${remainingDays} days`;
        }
    } else {
        daysMessage = `${daysCount} days`;
    }

    document.getElementById('daysCount').textContent = `Offical 1 year: ${daysMessage}`;
}

// Call the function to update the "Days together" section
updateDaysTogether();



// Function to update the countdown timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const time = getTimeRemaining();

    timerElement.innerHTML = `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
    
    if (time.total <= 0) {
        clearInterval(interval);
        timerElement.innerHTML = 'Countdown expired!';
    }
}

// Initial call to updateTimer to display the countdown immediately
updateTimer();

// Update the countdown timer every second
const interval = setInterval(updateTimer, 1000);
