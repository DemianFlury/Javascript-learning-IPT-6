document.getElementById("passwort").addEventListener("click", Passwort)

function Passwort() {
    let wort = prompt("Bitte das Passwort eingeben:", "")
    if (wort == "69"){
        window.location.assign("glückwunsch.html");
    } else {
        alert("Falsch")
    }
}