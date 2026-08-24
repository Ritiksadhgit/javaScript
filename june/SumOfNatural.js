let data = document.getElementsByClassName("data");

data[0].innerHTML = "Hello";

function natural_sum() {

    let n = parseInt(document.getElementById("num").value);
    let s = 0;

    for (let i = 1; i <= n; i++) {
        s = s + i;
    }

    data[1].innerHTML = `<h1 style="color: blue">The sum is ${s}</h1>`;
}