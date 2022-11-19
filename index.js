function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: userName, email: userEmail})
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            let ident = document.createElement('h4')
            ident.textContent = object["id"]
            document.body.appendChild(ident)
        })
        .catch (function (error){
            let iErred = document.createElement('h4')
            iErred.textContent = "Unauthorized Access"
            document.body.appendChild(iErred)
            console.log(error.message)
        })
}
