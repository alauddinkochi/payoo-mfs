// console.log('clicking button')
//  1.set event handler

document.getElementById('btn-login').addEventListener('click', function(event){
    // 2. prevent default behavior (reloading)
    event.preventDefault();
    console.log('btn clicked');

    // 3.get the phone number

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})