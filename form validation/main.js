// forms

function validate() {
    var fname = document.myForm.fname.value;
    var password = document.myForm.password.value;
    if (fname == null || fname == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("password must bhi a 6 characters");
        return false;
    }
    return false;
}










