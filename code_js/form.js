const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const poruka = document.getElementById('poruka');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidName = username => {
    const regex = /^[A-Z][a-z]{4,} [A-Z][a-z]{7,}$/;
    return regex.test(username);
}
const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.rs$/;
    return regex.test(String(email).toLowerCase());
}
const isValidMessage = poruka => {
    const regex = /^([A-Z][a-z]*(\s+[A-Z][a-z]*)*[.?!]\s*)+$/;
    return regex.test(poruka);
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const porukaValue = poruka.value.trim();

    if (usernameValue === '') {
        setError(username, 'This field cannot be empty');
    }
    else if (!isValidName(usernameValue)) {
        setError(username, 'Name is in an incorrect format');
    }
    else{
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'This field cannot be empty');
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'The domain must be .rs');
    }
    else{
        setSuccess(email);
    }

    if (porukaValue === '') {
        setError(poruka, 'This field cannot be empty');
    }
    else if (!isValidMessage(porukaValue)) {
        setError(poruka, 'Message must adhere to gramatical rules');
    }
    else{
        setSuccess(poruka);
    }
};