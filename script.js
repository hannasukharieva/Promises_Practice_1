var isMomHappy = false;

//Promise
var willIGetNewPhone = new Promise(
  function(resolve, reject) {
    if (isMomHappy) {
      var phone = {
        brand: 'Samsung',
        color: 'black'
      }
      //This happens if the promise is fulfilled
      resolve(phone);
    } else {
      var reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);

//Call the promise
var askMom = function () {
  willIGetNewPhone
    .then(function (fulfilled) {
      console.log(fulfilled)
    })
    .catch(function (error) {
      console.log('Mom did not buy you a phone.')
    })
};

askMom()