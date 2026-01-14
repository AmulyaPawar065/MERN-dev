let count = 0;
let total = 0;

function addC(price) {
    count++;
    total += price;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;
}