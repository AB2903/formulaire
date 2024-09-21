let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    let mail = document.getElementById("email").value;
    let mdp = document.getElementById("pwd").value;
    if (mail === '' || mdp === ''){
        alert("Veuillez renseigner les deux champs")
        e.preventDefault();
    }else {
        alert("Validée !!!!")
    }
})



 