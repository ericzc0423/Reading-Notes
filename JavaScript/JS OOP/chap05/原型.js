function Gadget(name,color) {
    this.name=name;
    this.color=color;
    this.whatAreYou = function () {
        return 'I am a ' + this.color + ' ' + this.name;
    }
}
console.log(Gadget.prototype);

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getinfo = function () {
    return 'Rating: ' + this.rating + ', Price' + this.price;
}
Gadget.prototype.getInfo = function (what) {
    return this[what];
}

// console.log(Gadget.prototype);

var newtoy = new Gadget('webcam','black')
console.log(newtoy.name);
console.log(newtoy.color);
console.log(newtoy.whatAreYou());
console.log(newtoy.price);
console.log(newtoy.getinfo());

console.log(newtoy.getInfo('price'));
