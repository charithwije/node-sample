
var square = (x) => x*x;


var user = {
  name: 'Sunimal',
  getName() {
    console.log('Hi from ', this.name);
  }
}

user.getName();
