// votre code ici

function checkAge(a) {
    let age = parseInt(a);
    if (age < 18) {
        return "Vous êtes mineur."
    }
    else if (age >= 18 && age < 65) {
        return "Vous êtes majeur."
    }
    else {
        return "Vous êtes senior."
    }
}

export default checkAge;
