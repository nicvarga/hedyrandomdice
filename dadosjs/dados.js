
function lanzardados() {

    let inicio = 1;
    let fin = 6;

     let resultado = inicio + Math.floor(Math.random()*fin);

    document.getElementById('dado').innerHTML = resultado
    document.getElementById('imgdados').src="./img/"+resultado+".svg";
}



