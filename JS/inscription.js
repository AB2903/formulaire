let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {

    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let mail = document.getElementById("mail").value;
    let pwd = document.getElementById("pwd").value;
    let pwd1 = document.getElementById("pwd1").value;

    if(prenom === '' || nom === '' || mail === '' || pwd === '' || pwd1 === ''){
        alert("Il faut tout remplir !!!");
        e.preventDefault();
    } else if (pwd !== pwd1) {
        alert("Les deux mots de passe ne sont pas identiques");
    } else{
        alert("Votre inscription est validée !!!");
    }

})