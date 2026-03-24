async function sendRequest() {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Bitte alles ausfüllen");
        return;
    }

    await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, message })
    });

    alert("Anfrage gesendet!");
}