// add money to the account

// step-1-add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    

    // step-2- get money added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pi number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
})