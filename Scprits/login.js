//!

// console.log('Connected');

document.getElementById('login-btn').addEventListener('click', function () {
  //1. get the mobile number input
  const inputNumber = document.getElementById('input-number');
  const contactNumber = inputNumber.value;
  console.log('Number :',contactNumber);
  //2. get the pin input
  const inputPin = document.getElementById('input-pin');
  const userPin = inputPin.value;
  console.log('pin',userPin);
  //3. matvh pin & mobile number
  if (contactNumber == '01732676674' && userPin == '1234') {
    //3.1 true ::: > alert> home page
    alert('Login Successful');
    window.location.assign('/Home.html')
  } else {
    //2.2 false::> alert> retrun
    alert('Invalid');
    return;
  }
});
