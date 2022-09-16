/*
function sumatoriaNumeros (m){
  let contador = 0;
  let sumatoria = 0;
  for(let i = 0; i < m; i++){
  sumatoria = sumatoria + contador
  contador++
  console.log(sumatoria)
}}
sumatoriaNumeros(11)
*/

/*
let n = 10;

if(n % 2 == 0){
  console.log("Es entero")
}else{
  console.log("No es entero")
}
*/

function numerosPares (max){
    let sumatoria = 0;     
  for(let i = 0; i < max; i++){
    if(i % 2 == 0){
    sumatoria += i
     console.log("Numeros pares: " + i)
    }}
  console.log("Sumatoria de los numeros pares: "  + sumatoria)
}

numerosPares(1000)