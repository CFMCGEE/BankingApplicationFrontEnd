const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {

        FirstName: /^\w+$/i,
        LastName: /^\w+$/i

};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
             console.log(patterns[e.target.attributes.name.value]);
            validate(e.target, patterns[e.target.attributes.name.value]);
    });
});