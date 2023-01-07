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
        axios.post("https://crudcrud.com/api/5861d4a9f9154659b11b404cfab8138d/data", obj).then(res => console.log(res)).catch(err => console.log(res))





        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('number', number)
        localStorage.setItem('date', date)
        localStorage.setItem('time', time)
        localStorage.setItem(obj.email, JSON.stringify(obj))
        details = document.getElementById('details')
        showNewUserOnScreen(obj)
        window.addEventListener("DOMContentLoaded", () => {
            axios.get("https://crudcrud.com/api/5861d4a9f9154659b11b404cfab8138d/data").then(res => {
                console.log(res)
                for (var i = 0; i < res.data.length; i++) {
                    console.log(res.data[i])
                    showNewUserOnScreen(res.data[i])
                }
            }
            ).catch(err => console.log(res))
            console.log(data)
            // const localStorageObj = localStorage;
            // const localstoragekeys = Object.keys(localStorageObj)

            // for (var i = 0; i < localstoragekeys.length; i++) {
            //     const key = localstoragekeys[i]
            //     const userDetailsString = localStorageObj[key];
            //     const userDetailsObj = JSON.parse(userDetailsString);
            //     showNewUserOnScreen(userDetailsObj)
            // }
        })

    })
}
function showNewUserOnScreen(user) {
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.number} - ${user.date} - ${user.time} <button onclick="deleteUser('${user.email}')"> Delete User </button> </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function removeUserFromScreen(emailId) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}
function deleteUser(emailId) {
    // console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}


