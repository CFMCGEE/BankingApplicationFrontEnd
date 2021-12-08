export default function customerValidationInfo(values) {
    
    let errors = {}

    if (!values.FirstName) {
        errors.FirstName = "First Name Required!"
    } else if (/^\w+$/i) {
        errors.FirstName = "First Name not properly formed!"
    }

    if (!values.LastName) {
        errors.LastName = "Last Name Required!"
    } else if (/^\w+$/i) {
        errors.LastName = "Last Name not properly formed!"
    }

    // if (!values.accountID) {
    //     errors.accountID = "Account ID Required!"
    // } 

    return errors;

}