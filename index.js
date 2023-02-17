// const me = {
//     firstName: 'timur',
//     secondName: 'gerasenko'

// }
// console.log(me)


// console.log(me.hasOwnProperty('firstName'))

// // const objKeys = Object.keys(me)
// // console.log(objKeys)

// // const objValues = Object.values(me)
// // console.log(objValues)

// // const objEntries = Object.entries(me)
// // console.log(objEntries)

// // me.nickName = 'zxc'
// // console.log(me)

// // const obj3 = Object.assign(me)
// // console.log(obj3)

// // const obj5 = {}
// // for (prop in me) {
// //     obj5[prop] = me[prop]
// // }
// // obj5.www = 'www'
// // console.log(obj5)
// const obj6 = Object.freeze(me)
// obj6.www = 'www'
// console.log(obj6)

// function sayHello() {
//     console.log('hello')
// }
// sayHello()

// function summ(a,b,...spread) {
//     console.log(a+b)
//     console.log(spread)
// }
// summ(4,98,2,4)

// (function() {
//     console.log('aaa')
// })()

// const myFunc = function() {
//     console.log('jaoijf')
// }
// myFunc()
// ()

// const arrowFunc = () =>{
//     console.log('arrowFunc')
// }
// arrowFunc()
// function urawn(a,b,c) {
//     const D = b*b-4*a*c
//     if(D>0) {
//         let x1 = (-b + Math.sqrt(D))/(2*a)
//         let x2 = (-b - Math.sqrt(D))/(2*a)
//         console.log(x1,x2)
//     } else if(D=0) {
//         let x = -b/(2*a)
//         console.log(x)
//     } else {
//         console.log('korney net')
//     }
// }
// urawn(1,3,-6)
function count(s) {
    let col = 0
    let sym = ['!',',',' ']
    for (let i = 0 ; i < s.length ; i++) {
        if (s[i] == s[i].toUpperCase() && !sym.includes(s[i])) {
            col+=1
        }
    }
    console.log(col)
}
count('Hello! My name is Timur')