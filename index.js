
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0

function addHomeScore(points) {
        homeScore += points
        homeScoreEl.textContent = homeScore
        
        if (points == 1) {
            console.log("Home scored " + points + " point!")
        }
        else if (points > 1) {
            console.log("Home scored " + points + " points!")
        }
        displayHomeScore()
        evaluateScore() 
}

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function addGuestScore(points) {
        guestScore += points
        guestScoreEl.textContent = guestScore
        if (points == 1) {
            console.log("Guests scored " + points + " point!")
        }
        else if (points > 1) {
            console.log("Guests scored " + points + " points!")
        }
        displayGuestScore()
        evaluateScore()
}

let homeLabel = document.getElementById("home-label")
let guestLabel = document.getElementById("guest-label")

function evaluateScore() {
    if(homeScore == 0 && guestScore == 0) {
        //Makes it so no score is displayed in console when newGame() is called 
    }
    else if(homeScore > guestScore) {
        console.log("Home is in the lead!")
        homeLabel.style.color = "green";
        guestLabel.style.color = "white";
        }
    else if (homeScore < guestScore) {
        console.log("Guests are in the lead!")
        homeLabel.style.color = "white";
        guestLabel.style.color = "green";
    }
    else if(homeScore == guestScore) {
        console.log("It's a tie!")
        homeLabel.style.color = "orange";
        guestLabel.style.color = "orange";
    }
}

function displayHomeScore() {
    if (homeScore == 1) {
            console.log("Home has " + homeScore + " point!")
        }
    else if (homeScore > 1) {
        console.log("Home has " + homeScore + " points!")
    }
}

function displayGuestScore() {
    if (guestScore == 1) {
            console.log("Guest has " + guestScore + " point!")
        }
    else if (guestScore > 1) {
        console.log("Guest has " + guestScore + " points!")
    }
}

let periodEl = document.getElementById("period-el")
let period = 0

function addPeriod() {
    period += 1
    if(period < 5) {
        periodEl.textContent = period
        console.log("It's period number " + period + ".")
    }
    else if(period = 5) {
        periodEl.textContent = "OT"
        console.log("The game has entered overtime")
    }
}

function newGame() {
    addHomeScore(-homeScore)
    homeLabel.style.color = "white";
    addGuestScore(-guestScore)
    guestLabel.style.color = "white";
    period = 0
    periodEl.textContent = 0
    console.log("A new game has started!")
}