const christmasDate = "2023-12-25"

function countdown(countdownDate) {
    const endDate = new Date(countdownDate);
    const currentDate = new Date();

    diff = endDate - currentDate - 60 * 60 * 1000; // Subtracting an hour to correct for local timezone

    countdownParams = {};
    
    countdownParams["days"] = Math.floor(diff / (24 * 60 * 60 * 1000));
    countdownParams["hours"] = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    countdownParams["minutes"] = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    countdownParams["seconds"] = Math.floor((diff % (60 * 1000)) / (1000));
    
    return countdownParams;
}


function updateCountdown() {
    let countdownParams = countdown(christmasDate);
    
    document.getElementById("days").innerHTML = countdownParams["days"];
    document.getElementById("hours").innerHTML = countdownParams["hours"];
    document.getElementById("minutes").innerHTML = countdownParams["minutes"];
    document.getElementById("seconds").innerHTML = countdownParams["seconds"];
}

setInterval(updateCountdown, 1000);