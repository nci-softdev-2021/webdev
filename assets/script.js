let total;

 function JSalert(){
 swal("The total cost of your order is" + " €" + total);
 }

function validateForm() {
    /*Define the variables*/
    let surname = document.forms["myForm"]["surname"].value;
    let firstname = document.forms["myForm"]["firstname"].value;
    let phonenumber = document.forms["myForm"]["number"].value;
    let chocolateMessage = document.forms["myForm"]["chocomessage"].value;
    let email = document.forms["myForm"]["email"].value;
    let housenumber = document.forms["myForm"]["housenumber"].value;
    let street = document.forms["myForm"]["street"].value;
    let city = document.forms["myForm"]["city"].value;
    let i = "Galway";
    let mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    /*Check first name has been entered*/
    if (firstname == "") {
        alert("Firstname must be filled out");
        return false;
    /*Check surname has been entered*/
    } else if (surname == "") {
        alert("Surname must be filled out");
        return false;
    /*Check phone number has been entered*/
    } else if (phonenumber == "") {
        alert("Number must be filled in");
        return false;
    /*Check phone number has is at least 10 characters with no characters or spaces*/
    } else if (isNaN(phonenumber) || phonenumber % 1 != 0 || phonenumber.length < 10) {
        alert("Phone number contain at least 10 numbers and no spaces or characters");
        return false;
    } else if (chocolateMessage.length > 30) {
        alert("Max 30 characters in message");
        return false;
    /*If delivery is selected make sure address is not blank*/
    } else if ((document.getElementById("which").value == "delivery") && ((housenumber == "") || (street == ""))) {
        alert("Please fill in address");
        return false;
    
	/*If delivery is selected make city is selected as Galway*/
    } else if ((document.getElementById("which").value == "delivery") && city.toLowerCase() !== i.toLowerCase()) {
        alert("We only deliver within Galway city please make sure you have filled in 'Galway' for city");
        return false;

    /*If pick up is selected make address is empty*/
    } else if ((document.getElementById("which").value == "pickup") && ((housenumber !== "") || (street !== "") || (city !== ""))) {
        alert("You selected pick up. Please remove address or select 'delivery.'");
        return false;
    /*Vadidate email address*/
    } else if (!email.match(mailformat)) {
        alert("Enter a valid email");
        return false;
    } else if (email.match(mailformat)) {
    /*Ask user to confirm order*/
        let r = confirm("Would you like to confirm your order??");
        if (r == true) {
            alert("You submitted order");
            return true;
        } else {
            alert("You cancelled order");
            return false;
        }
    }
}

function myCal() {
     /*Base price depends on cake selected by user*/
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
    /*Increase price if larger size*/
    if (document.getElementById("size").value == "feeds12") {
        total = total*1.25;
    }
     /*Increase price if chocolate message selected*/
    if (document.getElementById("chocomessage").value !== "") {
        total = (total + 4);
    }
    /*Increase price if delivery selected*/
    if (document.querySelector('input[name="which"]:checked').value === "delivery") {
        total = (total + 5);
    }
    /*Alert user of the price*/
    JSalert()
}