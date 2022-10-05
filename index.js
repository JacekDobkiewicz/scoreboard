let home = document.getElementById("home")
let guest = document.getElementById("guest")

let countHome = 0
let countGuest = 0


function homeAdd1() {
    countHome += 1
    home.textContent = countHome
}

function homeAdd2() {
    countHome += 2
    home.textContent = countHome
}

function homeAdd3() {
    countHome += 3
    home.textContent = countHome
}

function guestAdd1() {
    countGuest += 1
    guest.textContent = countGuest
}

function guestAdd2() {
    countGuest += 2
    guest.textContent = countGuest
}

function guestAdd3() {
    countGuest += 3
    guest.textContent = countGuest
}