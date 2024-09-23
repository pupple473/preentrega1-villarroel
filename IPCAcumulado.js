function anhosomeses(periodo){
    if (periodo == "A" || periodo == "a"){
        return "años"
    }
    else if (periodo == "M" || periodo == "m"){
        return "meses"
    }
}
function CalcularIPCAcumulado(periodos){
    let valores = []
    for (let i = 0; i < periodos; i++) {
        let valor = parseFloat(prompt("Introduce el valor para el periodo "+(i + 1)+" :"));
        valor = valor/100
        valores.push(valor);
    }
    valoresconsalto = valores.join("\n")
    alert ("Se han ingresado los valores: "+valoresconsalto)





    let acumulado = 0

    for (let i = 0; i < valores.length; i++) {
        if (i == 0){
            acumulado = valores[i] +1
        }
        else{
            acumulado = acumulado * (1 + valores[i]);
        }
        console.log((acumulado-1)*100);
    }
    acumulado = (acumulado * 100) - 100
    acumulado = acumulado.toFixed(2)
    return acumulado;
}



let periodo = prompt("Desea calcular el acumulado en años(A) o meses(M)");
while (periodo != "A" && periodo != "a" && periodo != "M" && periodo != "m"){
    alert("Debe ingresar 'A' para calcular el IPC acumulado en años o 'M' para calcularlo en meses.");
    periodo = prompt("Desea calcular el acumulado en años(A) o meses(M)");
}
let p = anhosomeses(periodo)
let nperiodos = parseInt(prompt("Ingrese el numero de " + p + " "))
if (isNaN(nperiodos)) {
    alert("Debe ingresar un número.");
    do {
        nperiodos = parseInt(prompt("Ingrese el NUMERO de " + p))
    }
    while (isNaN(nperiodos))
}
let IPCAcumulado = CalcularIPCAcumulado(nperiodos)
alert("El IPC acumulado es: " + IPCAcumulado + "%")

