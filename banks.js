document.getElementById('bank-btn').addEventListener('click', bankBtn);
let mainBody = document.getElementById('main');
mainBody.style.display = 'none';

function bankBtn() {
    let submit = document.getElementById('display1');
    let userN = document.getElementById('userName').value;
    let userP = document.getElementById('userPwd').value;

    
    if (userN === '') {
        alert('Invalid Name');
    } else if (userP === '') {
        alert('Invalid Password');
    } else {
        submit.style.display = 'none';
        mainBody.style.display = 'block';
    }
}

document.getElementById('depositBtn').addEventListener('click', deposit_btn);
document.getElementById('withdrawBtn').addEventListener('click', withdraw_btn);

function table1(description, amount, balance) {
    const statementTable = document.getElementById('statementTable').getElementsByTagName('tbody')[0];
    const row = statementTable.insertRow();
    const dateCell = row.insertCell(0);
    const descCell = row.insertCell(1);
    const amountCell = row.insertCell(2);
    const balanceCell = row.insertCell(3);

    const date = new Date().toISOString().split('T')[0];
    dateCell.textContent = date;
    descCell.textContent = description;
    amountCell.textContent = amount.toFixed(2);
    balanceCell.textContent = balance.toFixed(2);
}

function deposit_btn() {
    let input_field = document.getElementById('inputDeposit');
    let input_amount = parseFloat(input_field.value);

    if (isNaN(input_amount) || input_amount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }

    let deposit_number = parseFloat(document.getElementById('depo-am').innerHTML);
    let total_deposit = deposit_number + input_amount;
    document.getElementById('depo-am').innerHTML = total_deposit;

    let balance = parseFloat(document.getElementById('bal-am').innerHTML);
    let total_balance = balance + input_amount;
    document.getElementById('bal-am').innerHTML = total_balance;

    table1('Deposit', input_amount, total_balance);

    input_field.value = '';
}

function withdraw_btn() {
    let input_field = document.getElementById('inputWithdraw');
    let input_amount = parseFloat(input_field.value);

    if (isNaN(input_amount) || input_amount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }

    let balance = parseFloat(document.getElementById('bal-am').innerHTML);

    if (input_amount > balance) {
        alert('Insufficient balance.');
        return;
    }

    let withdraw_number = parseFloat(document.getElementById('with-am').innerHTML);
    let total_withdraw = withdraw_number + input_amount;
    document.getElementById('with-am').innerHTML = total_withdraw;

    let total_balance = balance - input_amount;
    document.getElementById('bal-am').innerHTML = total_balance;

    table1('Withdrawal', -input_amount, total_balance);

    input_field.value = '';
}
