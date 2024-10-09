// console.log('clicking button')
//  1.set event handler

document.getElementById('btn-login').addEventListener('click', function(event){
    // 2. prevent default behavior (reloading)
    event.preventDefault();
    

    // 3.get the phone number

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number & pin number');
    }
})