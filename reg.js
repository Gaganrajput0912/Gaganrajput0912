

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

function localS(e) {
    const name = e.target.username.value
    const email = e.target.email.value
    const number = e.target.number.value
    const date = e.target.date.value
    const time = e.target.time.value;

    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('number', number)
    localStorage.setItem('date', date)
    localStorage.setItem('time', time)
}

