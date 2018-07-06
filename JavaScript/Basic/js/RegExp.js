// let reg = /^[\d]+$/;
// console.log(reg.test('0'));
// console.log(reg.test('d'));
//
// let reg1 = /^[.]+ $/;
// reg1.test('......')
//
// let reg = /^[18]$/;
// console.log(reg.test('18'))
// console.log(reg.test('1'))
// console.log(reg.test('8'))
//
// let reg=/^[12-65]$/
// console.log(reg.test('13'));
// console.log(reg.test('1'));
// console.log(reg.test('2'));
// console.log(reg.test('6'));
// console.log(reg.test('5'));
//
// let reg = /^((1[89])|([2-5]\d)|(6[0-5]))$/
//
// console.log(reg.test(64));
// console.log(reg.test(37));
// console.log(reg.test(17));

// let reg = /^\[object .+\]$/
// console.log(reg.test('[object *]'));

// let reg = /^((18)|(19))$/;
// console.log(reg.test('18'));
// console.log(reg.test('19'));
// console.log(reg.test('1819'));
// console.log(reg.test('119'));
// console.log(reg.test('819'));

// let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|X)$/
// //let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d2(\d)(\d|X)$/
// console.log(reg.test('34122119901008041X'));


// let reg = /^[+-]?(\d|([1-9]\d))(\.\d+)?$/
// console.log(reg.test(10.35));

// let str='test2018test2019test2030test3001'
// let reg = /\d+/g
// console.log(reg.test(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);


    //
    // let str='test{2018}test{2019}test{2030}test{3001}'
    // let reg = /\{?:(\d+)\}/g
    // console.log(reg.exec(str));

let str = 'test{val:2018}test{val:2019}',
        reg =  '/\{val:(\d+)\}}\g'      ;
    str = str.replace(reg, (...arg) => {
           console.log(arg);
    });










