

// var hi=document.getElementsByClassName("t2")[0]
// window.onscroll = function (){
//     var reachHi=hi.getClientRects()
//     console.log(reachHi)
//     var heighttext3=window.innerHeight
//     if(!( reachHi.bottom<0 || reachHi.top>heighttext3)){
//         hi.classList.add('ani-b1')
//     }else{
//         hi.classList.remove('ani-b1')
//     }
// }

//anh3
var anh1 = document.getElementsByClassName('i3')[0]
var text1 = document.getElementsByClassName('t3')[0]
var text2 = document.getElementsByClassName('t1')[0]
window.onscroll = function (e) {
    var reachanh1 = anh1.getClientRects()
    var reacht1 = text1.getClientRects()
    var heightanh3 = window.innerHeight
    if (!(reachanh1.bottom < 0 || reachanh1.top > heightanh3)) {
        anh1.classList.add('img-ani1')
    } else {
        anh1.classList.remove('img-ani1')
    }
    var heightanh3 = window.innerHeight
        if (!(reacht1.bottom < 0 || reacht1.top > heightanh3)) {
            text1.classList.add('ani-b1')
            
        } else {
            text1.classList.remove('ani-b1')
        }
    }
console.log(window.onscroll)

// var anh1 = document.getElementsByClassName('i3')[0]
// var text1 = document.getElementsByClassName('t3')[0]
// var text2 = document.getElementsByClassName('t2')[0]
// var text3 = document.getElementsByClassName('t1')[0]
// window.onscroll = function (e) {
//     var reachanh1 = anh1.getClientRects()
//     var heightanh3 = window.innerHeight
//     console.log(e)
//     if (!(reachanh1.bottom < 0 || reachanh1.top > heightanh3)) {
//         anh1.classList.add('img-ani1')
//     } else {
//         anh1.classList.remove('img-ani1')
//     }
//     var reacht1 = text1.getClientRects()
//     var reacht2 = text2.getClientRects()
//     var reacht3 = text3.getClientRects()
//     var heightanh3 = window.innerHeight
//         if (!(reacht1.bottom < 0 || reacht1.top > heightanh3)) {
//             text1.classList.add('ani-b1')
//         } else {
//             text1.classList.remove('ani-b1')
//         }
//         if (!(reacht2.bottom < 0 || reacht2.top > heightanh3)) {
//             text2.classList.add('ani-b1')
//         } else {
//             text2.classList.remove('ani-b1')
//         }
//         if (!(reacht3.bottom < 0 || reacht3.top > heightanh3)) {
//             text3.classList.add('ani-b1')
//         } else {
//             text3.classList.remove('ani-b1')
//         }

// }

// const item =[
//     {
//         id:'k1',
//         value:'css'
//     },
//     {
//         id:'k2',
//         value:'html2'
//     },
//     {
//         id:'k3',
//         value:'html3'
//     }
// ]

// var j=item.reduce(function(luutru,hientai){
//     return luutru.concat(hientai.value)
// },[])
// console.log(j)



// // console.log(j)
// var h=item.reduce(function(luutru,hientai){
//      luutru[hientai.id]=hientai.value
//     //  console.log(luutru[hientai.id])
//     return luutru

// },{})
// console.log(h)