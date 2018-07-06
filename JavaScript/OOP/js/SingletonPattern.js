// var n = 2 ;
// var obj = {
//     n:3,
//     fn: (function (n) {
//         n *=2;
//         console.log(this)
//         this.n +=2;
//         var n = 5;
//         return function (m) {
//             console.log((m + (++n)));
//         }
//
//     }) (n)
// };
// var fn = obj.fn
// fn(3)
// obj.fn(3)
// console.log(this)
// console.log(n, obj.n)

var utils = (function () {
    return{
        aa:function () {
            
        }
    }
})();

var skipRender = (function (){
    var fn1 = function (){

    };
    return {

    }

    })();
skipRender.init();

var weatherRender = (function () {
    var fn = function () {

    };
    return{
        init: function () {
            fn();
        }
    }
});
weatherRender.inactive