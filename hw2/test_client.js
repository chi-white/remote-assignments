apiurl = 'http://localhost:3000/users' ;
// apiurl = 'http://54.66.160.176:3000/users' ;

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



/*-------------------------------------Sign up----------------------------------------------------*/ 
const data = {
    "name": "1234567891011",
    "email": "1234567891011@gmail.com",
    "password": "1234567891011abcABC"
  };
  

const Postrequest = {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    'Request-Date' : new Date().toUTCString()
},
body: JSON.stringify(data)
}


if (Validname(data.name) && Validemail(data.email) && Validpassword(data.password)){
  fetch(apiurl, Postrequest) 
  .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Problem in response');
      }
  })
  .then(data => {
      console.log('sucess response：', data);
  })
  .catch(error => {
      console.error('no problem in response but catch error:', error);
  });
}else{
  console.log("Invalid Input") ;
}

/*----------------------------------------------Query---------------------------------------------------------------------*/
const Getrequest = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Request-Date' : new Date().toUTCString()
  },
  };
 
// const userid = 33;  

// GET request
// fetch(`${apiurl}?id=${userid}`, Getrequest)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Problem in response');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('sucess response : ', data);
//   })
//   .catch(error => {
//     console.error('no problem in response but catch error:', error);
//   });

/*-------------------------------------healthcheck----------------------------------------------------*/ 

// fetch('http://localhost:3000/healthcheck')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Problem in response');
//     }
//     return response.text();
//   })
//   .then(data => {
//     console.log(data); // 打印服务器响应
//   })
//   .catch(error => {
//     console.error('Health check failed:', error);
//   });