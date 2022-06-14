// constructor

function Transaccion(nombre, valor, fecha) {
  this.nombre = nombre;
  this.valor = valor;
  this.fecha = fecha;
}
//array

let listaGastos = JSON.parse(localStorage.getItem("lista")) || [];
let total = parseInt(localStorage.getItem("total"))|| 0;
let nombre
let valor 

//FUNCION  que hace todo el trabajo

function ingresarTransaccion() {
  
  //DATE

 let date = new Date();
 let fechas = date.getDate() + "/" + date.getMonth() 
  
 let Transaccion1 = new Transaccion(nombre, valor,fechas);
  
  //array
  listaGastos.push(Transaccion1);
  
 // La fecha de ingreso de gasto aparece como parrafo
  let data = document.createElement("p")
  data.innerHTML = fechas

  // El gasto ingresado aparece como parrafo
  let lista = document.createElement("p")
  lista.innerHTML = nombre

  //El precio ingresado aparece como parrafo 
 let precios = document.createElement("p")
 precios.innerHTML = "$" + valor
 

 document.getElementById("fecha").appendChild(data)
 document.getElementById("lista").appendChild(lista)
 document.getElementById("precios").appendChild(precios)
 
 
 //Total
 total = total + valor;
 
 
 gastos.innerHTML= "Total gastado = $" + total;
 //Para que se ponga en blanco el input despues de enviar.
 input1.value=""
 input2.value=""
 
 
 //STORAGE

 localStorage.setItem("lista", JSON.stringify(listaGastos
  ))

 localStorage.setItem("total", total)

 
 //SWEET ALERT
 
 Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Gasto regristrado con exito',
  showConfirmButton: false,
  timer: 1000,
  background:"#edede9"
})

}
//Fin de la funcion


//lista
for (const gasto of listaGastos) {

 let mostrarFecha =  document.createElement("p")
 mostrarFecha.innerHTML = gasto.fecha 

 let nombreGasto =  document.createElement("p")
 nombreGasto.innerHTML = gasto.nombre

 let nombreValor = document.createElement("p")
 nombreValor.innerHTML =  "$" + gasto.valor

  document.getElementById("fecha").appendChild(mostrarFecha)
  document.getElementById("lista").appendChild(nombreGasto)
  document.getElementById("precios").appendChild(nombreValor)

}


//total
let resultadoFinal = document.createElement("p")
resultadoFinal.innerHTML = "Total gastado = $" + total;

total > 0 && document.getElementById("gastos").appendChild(resultadoFinal)


//INPUTS
let input1= document.querySelector("#nombre")
input1.addEventListener("input", ()=>{
    nombre = input1.value
  })

let input2= document.querySelector("#valor")
  input2.addEventListener("input", ()=>{
    valor = parseInt(input2.value) 
  }) 

  
//BUTTON


const btnEnviar = document.querySelector("#btnEnviar")
btnEnviar.addEventListener("click", ingresarTransaccion)
  


//Muestra el total 
const gastos = document.getElementById("gastos")


//fetch

let datosP = document.querySelector("#datos")

fetch("https://api.openweathermap.org/data/2.5/weather?lat=-36.89&lon=-60.32&units=metric&appid=8243b35c8900a9ffd8eda410b7f075ed")
.then((response) => response.json())
.then(data => {
  const temp = document.createElement('p')
  temp.innerHTML = "Temperatura: " + data.main.temp + "°"
  const feels = document.createElement('p')
  feels.innerHTML = "Sensación térmica: " + data.main.feels_like + "°"
  const humidity = document.createElement('p')
  humidity.innerHTML = "Humedad: " + data.main.humidity + "%"
  datosP.appendChild(temp)
  datosP.appendChild(feels)
  datosP.appendChild(humidity)
})