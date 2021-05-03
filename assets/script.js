function validateForm() {
    var b = document.forms["myForm"]["surname"].value;
    var a = document.forms["myForm"]["firstname"].value;
    var d = document.forms["myForm"]["number"].value;
    var e = document.forms["myForm"]["chocomessage"].value;
    var c = document.forms["myForm"]["email"].value;
    var f = document.forms["myForm"]["housenumber"].value;
    var g = document.forms["myForm"]["street"].value;
    var h = document.forms["myForm"]["city"].value;
    var i = "Galway";
    var mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (a == "") {
        alert("Firstname must be filled out");
        return false;
    } else if (b == "") {
        alert("Surname must be filled out");
        return false;
    } else if (d == "") {
        alert("Number must be filled in");
        return false;
    } else if (isNaN(d) || d % 1 != 0 || d.length < 10) {
        alert("Phone number contain at least 10 numbers and no spaces or characters");
        return false;
    } else if ((document.getElementById("message").value == "Yes") && (e == "")) {
        alert("Please fill out message");
        return false;
    } else if ((document.getElementById("message").value == "Yes") && (e.length > 30)) {
        alert("Max 30 characters in message");
        return false;
    } else if ((document.getElementById("message").value == "No") && (e !== "")) {
        alert("You selceted 'no message'. Please remove message or select 'message'.");
        return false;
    } else if ((document.getElementById("which").value == "delivery") && ((f == "") || (g == ""))) {
        alert("Please fill in address");
        return false;
    } else if ((document.getElementById("which").value == "delivery") && h.toLowerCase() !== i.toLowerCase()) {
        alert("We only deliver within Galway city please make sure you have filled in 'Galway' for city");
        return false;
    } else if ((document.getElementById("which").value == "pickup") && ((f !== "") || (g !== "") || (h !== ""))) {
        alert("You selected pick up. Please remove address or select 'delivery.'");
        return false;
    } else if (!c.match(mailformat)) {
        alert("Enter a valid email");
        return false;
    } else if (c.match(mailformat)) {
        var txt;
        var r = confirm("Would you like to confirm your order??");
        if (r == true) {
            alert("You submitted order");
            return true;
            alert("You submitted order");
        } else {
            alert("You cancelled order");
            return false;
        }
    }
}
function myCal() {
    var p;
    if (document.getElementById("cake").value == "Cake1") {
        p = 14;
    } else if (document.getElementById("cake").value == "Cake2") {
        p = 16;
    } else if (document.getElementById("cake").value == "Cake3") {
        p = 16;
    } else if (document.getElementById("cake").value == "Cake6") {
        p = 20;
    } else {
        p = 18;
    }
    if (document.getElementById("size").value == "feeds12") {
        p = (p + (p / 4));
    } else {
        p = p;
    }
    if (document.getElementById("message").value == "Yes") {
        p = (p + 4);
    } else {
        p = p;
    }
    if (document.getElementById("which").value == "delivery") {
        p = (p + 5);
    } else {
        p = p;
    }
    document.getElementById("cal").innerHTML = "Your total is " + "€" + p;
}