var val = document.querySelector('.valor');
function check (){
    let valor = parseInt(val.textContent);
    console.log(valor)
if (valor >= 500 ) {
    document.body.innerHTML = document.body.innerHTML.replace("👍", "👎");
} else if (valor <= 499){
    document.body.innerHTML = document.body.innerHTML.replace("👎","👍");
}
}
setInterval(check, 1000);
