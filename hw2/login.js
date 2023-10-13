const userapi = 'api/users';
const healthapi = 'api/healthcheck'; 
const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

/*------------------------------------check function-----------------------------------------------*/ 
function Validname(name) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(name);
  }
  
  function Validemail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  function Validpassword(password) {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/|]/;
  
    let typesCount = 0;
  
    if (uppercaseRegex.test(password)) {
      typesCount++;
    }
    if (lowercaseRegex.test(password)) {
      typesCount++;
    }
    if (numberRegex.test(password)) {
      typesCount++;
    }
    if (symbolRegex.test(password)) {
      typesCount++;
    }
  
    return typesCount >= 3;
  }

  /*------------------------------------check function-----------------------------------------------*/ 

function signup(){
  const username = usernameInput.value;
  const email = emailInput.value ;
  const password = passwordInput.value;
  if (Validname(username) && Validemail(email) && Validpassword(password)) {
    const data = {
      "name": username,
      "email": email,
      "password": password
    };

    const Postrequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Request-Date': new Date().toUTCString()
      },
      body: JSON.stringify(data)
    };
    fetch(userapi, Postrequest)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Problem in response');
        }
      })
      .then(data => {
        console.log('Success response:', data);
        alert('Signup Successful!');
      })
      .catch(error => {
        console.error('No problem in response but caught error:', error);
        alert('Signup failed. Please try again later.');
      });
  } else {
    console.log("Invalid Input");
    alert('Invalid Input. Please check your input fields.');
  }
};

function healthcheck(){
  fetch(healthapi)
  .then(response => {
    if (!response.ok) {
      throw new Error('Problem in response');
    }
    return response.text();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Health check failed:', error);
  });
}

