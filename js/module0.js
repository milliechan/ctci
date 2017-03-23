function fromListToObject(arr) {
  // create empty obj
  // loop through arr to get pairs
  // for each pair, first el is key, 2nd is value. push into obj
  var obj = {}
  arr.forEach((pair) => {
    for (var i = 0; i < pair.length; i ++) {
      obj[pair[0]] = pair[1]
    }
  })
  return obj;
}

//arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
//console.log(fromListToObject(arr));

// returns an array of all input obj values
function listAllValues(obj) {
  var arr = [];
  for(key in obj) {
    arr.push(obj[key])
  };
  return arr;
};

// obj = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// }

//console.log(listAllValues(obj))

// transforms employee data from 1 format to another 
function transformEmployeeData(arr) {
  var result = []; 
  arr.forEach((data) => { 
    var obj = {}
    data.forEach((el) => {
      obj[el[0]] = el[1];
    });
    result.push(obj);
  });
  return result;
}

// arr = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ]
// console.log(transformEmployeeData(arr));


// converts an object literal into array of arrays
function convertObjectToList(obj){
  var result = [];

  for(key in obj) {
    result.push([key, obj[key]])
  }
  return result;
}

// obj = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }

// console.log(convertObjectToList(obj));

// returns greeting based on how many times customer has visited the restaurant 


var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var name = customerData[firstName];
  var visits = 0;
  if (name != undefined) {
    visits = customerData[firstName].visits;
  }
  var greeting = "Welcome! Is this your first time?";
  
  // your code here
  if (visits == 1) {
    greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  } else if( visits > 1) {
    greeting = "Welcome back, " + firstName + "! So glad to see you again!";
  } 
  
  return greeting;
}


// console.log(greetCustomer('Carrie'));













