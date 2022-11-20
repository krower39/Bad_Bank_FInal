//context is globally shared
const ctx = {
    "accounts": [
        {
            "name": "peter",
            "email": "peter@mit.edu",
            "balance": 0,
            "password": "secret"
        }
    ]
}

function create() {
    const name      = document.getElementById('name');
    const email     = document.getElementById('email');
    const password  = document.getElementById('password');
    const status    = document.getElementById('status');
    ctx.accounts.push({
        name: name.value, 
        email: email.value,
        password: password.value,
        balance:100
    });
    name.value      = '', 
    email.value     = '',
    password.value  = '';
    status.innerHTML = 'Account Created!';
}

function AllData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}