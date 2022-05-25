let phone;
let mail;
function set_email() {
    let mail_1 = window.prompt("email?");
    if (mail_1 === null) {
        if(!window.confirm('are you sure?')) {
        mail = mail_1;
            document.getElementById('email').innerHTML = mail;
        }
    }
    else {
    mail = mail_1;
        document.getElementById('email').innerHTML = mail;
    }
}
function set_phone() {
    let phone_1 = window.prompt("phone?");
    if (phone_1 === null) {
    if(!window.confirm('are you sure?')) {
        phone = phone_1;
        document.getElementById('phone').innerHTML = phone;
        }
    }
    else {
    phone = phone_1;
        document.getElementById('phone').innerHTML = phone;
    }
}
function email() {
    let subject = window.prompt("subject?");
    let body = window.prompt("body?");
let mailto = encodeURI('mailto:'+mail+'?body='+body+'&subject='+subject);
window.open(mailto);
}
function text() {
    let subject = window.prompt("subject?");
    let body = window.prompt("body?");
let mailto = encodeURI('mailto:'+phone+'@txt.att.net?body='+body+'&subject='+subject);
window.open(mailto);
}