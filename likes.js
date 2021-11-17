// var count = document.querySelector("#count1").innerHTML;
// count++
// console.log(count)


// console.log(num)

function LikeCount(element) {
    var e = "#count" + element
    console.log(e)
    var num = 0;
    var count = document.querySelector(e).innerHTML; 
    // console.log(count)
    num++
    document.querySelector(e).innerHTML = parseInt(count) + num
}



