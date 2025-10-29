let countEl = document.getElementById("count")
console.log(countEl)

let count = 0;
function increment() {
    // console.log("clicked")
    count += 1
    countEl.innerText = count
}

let wordEl = document.getElementById("words")
function save() {
let name = count + " - ";
wordEl.innerText += name;
    console.log(count)
}



