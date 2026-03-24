async function sendRequest() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Bitte alles ausfüllen");
        return;
    }

    await fetch("https://business-webseite.onrender.com/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, message })
    });

    alert("Anfrage gesendet!");
}