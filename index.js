// myways solution 
function fizzBuzz(phoneNumber) {
  // Calculate the sum of digits in the phone number
  const numSum = phoneNumber.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  
  // Loop from 1 to the sum of digits in the phone number
  for (let i = 1; i <= numSum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 4 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(9173121851); // my phone number 


