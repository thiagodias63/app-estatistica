var xi = [];
var fi = []; //frequencia absoluta 
        
function Adicionar(){
	var x = parseFloat(window.sheet.xi.value);
    var f = parseFloat(window.sheet.fi.value);
    if((x !== "" && x > 0) && (f !== "")){
        xi.push(x); //final array
		fi.push(f); //final array
        montarTabela(x,f);
    }
    else{
		window.alert("É necesário informar um x e f");
    }
}
function montarTabela(x,f){
	document.getElementById("lista").innerHTML = "";
    var texto = "";
    var somaFrequenciaRel = 0;
    var somaFrequenciaAbs = 0;
    for(var i = 0; i < xi.length ;i++)
    {
		somaFrequenciaRel += fi[i];
        texto += "<tr><td>" + xi[i] + "</td><td>" + fi[i] + "</td><td>" + (xi[i] * fi[i]) + "</td><td>" + somaFrequenciaRel + "</td><td id='fr["+ i +"]'></td><td id='fracu["+ i +"]'> </td></tr>";
    }
    texto += "<tr><td>Soma:</td><td>" + somaFrequenciaRel + "</td><td> - </td><td> - </td><td id='frTotal'> </td><td> - </td> </tr>";
    document.getElementById("lista").innerHTML += texto;
    for(var i = 0; i < xi.length ;i++)
    {
		var frtemp = fi[i] / somaFrequenciaRel;
        somaFrequenciaAbs += frtemp;
        document.getElementById("fracu["+i+"]").innerHTML = somaFrequenciaAbs.toFixed(2);
        document.getElementById("fr["+i+"]").innerHTML = frtemp.toFixed(2);
    }
	document.getElementById("frTotal").innerHTML = somaFrequenciaAbs;
	AbrirClasse(xi);
}
function AbrirClasse(tabela){
	var inicio = tabela[0];
	var index_fim = tabela.length - 1;
	var fim = tabela[index_fim];
	var aa = fim - inicio;
	var k = Math.round(Math.sqrt(aa)); //numero de classes
	console.log(k);
   var extensao = aa/k;
   
	/*@sheetClasse tabela que */
}
