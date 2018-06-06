const request = require('request');


var square = (x) => x*x;


var user = {
  name: 'Sunimal',
  getName() {
    console.log('Hi from ', this.name);
  }
}

user.getName();

request({
  url:'',
  json :true
},
  (error, response, body)=>{
    console.log();
});
