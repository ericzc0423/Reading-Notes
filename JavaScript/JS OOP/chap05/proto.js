var monkey = {
    feeds: 'bananas',
    breathes: 'air'
}
function Human() {
    Human.prototype = monkey;
    this.breathes=monkey.breathes;
}
var developer = new Human();
developer.feeds = 'pizza';
developer.hacks='js';

console.log(developer.hacks);
console.log(developer.feeds);
console.log(developer.breathes);