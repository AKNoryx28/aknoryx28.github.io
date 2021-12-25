let cc = 0

function Increment() {
    if (cc >= 0) {
        cc++
    }
    document.getElementById("count-el").innerText = cc
}
function Decrement() {
    if (cc >= 1) {
        cc--
    }
    document.getElementById("count-el").innerText = cc
}