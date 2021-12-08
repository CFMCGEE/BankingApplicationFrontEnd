export default function creationDateValidation(values) {
    
    let errors = {}

    if (!values.FirstName) {
        errors.FirstName = "First Name Required!"
    } else if (/^\w+$/i) {
        errors.FirstName = "First Name not properly formed!"
    }

    if (!values.LastName) {
        errors.LastName = "LastName Required!"
    } else if (/^\w+$/i) {
        errors.LastName = "First Name not properly formed!"
    }

    return errors;

}