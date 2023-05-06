document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.querySelector('.message');
    messageElement.textContent = 'ITI';
  
    var buttonElement = document.querySelector('#myButton');
    buttonElement.addEventListener('click', function() {
      messageElement.textContent = 'Hello from ITI!';
    });
  });