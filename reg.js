

window.onload = function () {
    cl = document.getElementById("sub");
    cl.addEventListener("click", function display(e) {
        e.preventDefault();

        console.log(document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("number").value,
            document.getElementById("date").value,
            document.getElementById("time").value)
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const number = document.getElementById("number").value
        const date = document.getElementById("date").value
        const time = document.getElementById("time").value;
        const obj = {
            name: name,
            email: email,
            number: number,
            date: date,
            time: time
        }
        // localStorage.setItem('name', name)
        // localStorage.setItem('email', email)
        // localStorage.setItem('number', number)
        // localStorage.setItem('date', date)
        // localStorage.setItem('time', time)
        localStorage.setItem(obj.email, JSON.stringify(obj))

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            alert(`${key} : ${localStorage.getItem(key)}`)
        }

    });
}
