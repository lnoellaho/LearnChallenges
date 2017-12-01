//Week 1 Day 4 Leeann and Erika
//Password Checker

function credentialChecker() {
    var userID = prompt("Enter User ID");
    var password = prompt("Enter password");

    if(userID == password) {
        alert("User ID and password must be different");
    }
    if(userID < 6 || password < 6) {
        alert("User ID and password must be at least six characters.");
    }
    for (i = 0; i < userID.length; i++) {
        if (userID.charAt(i) == "!" || userID.charAt(i) == "#" || userID.charAt(i) == "$") {
            alert("User ID cannot contain any of the following characters: !#$");
        }
    }
    for (i = 0; i < password.length; i++) {
        if (password.charAt(i) !== "!" || password.charAt(i) !== "#" || password.charAt(i) !== "$") {
            alert("Password must contain at least one of the following characters: !#$");
        }
    }
    if (password == "password") {
        alert("Password cannot be 'password'");
    }

}
