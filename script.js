var numLike = 3
var likeCount = document.querySelector("p")

function add1() {
    numLike++
    likeCount.innerText = (numLike + " Like(s)")
    console.log(numLike)
}