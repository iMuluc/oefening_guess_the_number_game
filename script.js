var person = prompt("Welkom! Wat is je naam?", "Name");
if (person != null) {
    alert("Hey " + person);
}

var inputCijfer = "";
var inputCijferText = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...", "Getal tussen 0 en 25");
if (inputCijfer <= 25) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    if (getRandomInt(26) == inputCijfer) {
        prompt("Gefeliciteerd je hebt gewonnen");
        prompt("Dag " + person);
    } else if (inputCijfer > 25) {
        prompt("Oeps! Dat is groter dan 25!");
    } else if (inputCijfer <= 25) {
        prompt("Dat is onjuist! Het juiste antwoord was " + getRandomInt(26) + " Wilt u opniew starten?")
    }
}

