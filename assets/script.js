 function JSalert(total){
 swal("The total cost of your order is" + " €" + total);
 }

function validateForm() {
    let surname = document.forms["myForm"]["surname"].value;
    let firstname = document.forms["myForm"]["firstname"].value;
    let phonenumber = document.forms["myForm"]["number"].value;
    let chocolateMessage = document.forms["myForm"]["chocomessage"].value;
    let email = document.forms["myForm"]["email"].value;
    let housenumber = document.forms["myForm"]["housenumber"].value;
    let street = document.forms["myForm"]["street"].value;
    let city = document.forms["myForm"]["city"].value;
    const i = "Galway";
    // email validation regex
    const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (firstname == "") {
        alert("Firstname must be filled out");
        return false;
    } else if (surname == "") {
        alert("Surname must be filled out");
        return false;
    } else if (phonenumber == "") {
        alert("Number must be filled in");
        return false;
    } else if (isNaN(phonenumber) || phonenumber % 1 != 0 || phonenumber.length < 10) {
        alert("Phone number contain at least 10 numbers and no spaces or characters");
        return false;
    } else if (chocolateMessage.length > 30) {
        alert("Max 30 characters in message");
        return false;
    } else if ((document.querySelector('input[name="which"]:checked').value == "delivery") && ((housenumber == "") || (street == ""))) {
        alert("Please fill in address");
        return false;
    } else if ((document.querySelector('input[name="which"]:checked').value == "delivery") && city.toLowerCase() !== i.toLowerCase()) {
        alert("We only deliver within Galway city please make sure you have filled in 'Galway' for city");
        return false;
    } else if ((document.querySelector('input[name="which"]:checked').value == "pickup") && ((housenumber !== "") || (street !== "") || (city !== ""))) {
        alert("You selected pick up. Please remove address or select 'delivery.'");
        return false;
    } else if (!email.match(mailformat)) {
        alert("Enter a valid email");
        return false;
    } else {
        let r = confirm("Would you like to confirm your order??");
        if (r) {
            alert("You submitted order");
            return true;
        } else {
            alert("You cancelled order");
            return false;
        }
    }
}

function myCal() {
    let total;
    switch (document.getElementById("cake").value) {
    case "Cake1":
        total = 14;
        break;
    case "Cake2":      
    case "Cake3":
        total = 16;
        break;
    case "Cake6":
        total = 20;
        break;
    default:
        total = 18;
    }

    if (document.getElementById("size").value == "feeds12") {
        total = total*1.25;
    }

    if (document.getElementById("chocomessage").value !== "") {
        total = (total + 4);
    }

    // check if delivery is selected
    if (document.querySelector('input[name="which"]:checked').value === "delivery") {
        total = (total + 5);
    }
    JSalert(total)
}