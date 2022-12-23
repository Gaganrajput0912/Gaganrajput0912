

window.onload = function () {
    cl = document.getElementById("sub");
    cl.addEventListener("click", function display(e) {
        e.preventDefault();

        console.log(document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("number").value,
            document.getElementById("date").value,
            document.getElementById("time").value)
    });
}

