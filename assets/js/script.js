let listaNombreGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let posicionModificar = -1; 
//Esta función se invoca al momento de que el ususario hace click en el boton
function clickBoton(){
   let nombreGasto =  document.getElementById('nombreGasto').value;
   let valorGasto = document.getElementById('valorGasto').value;
   let descripcionGasto = document.getElementById('descripcionGasto').value;
   // Verifica si estamos agregando o modificando
   if (nombreGasto == '' || valorGasto == '') {
    alert('Ingresa el nombre y el valor del gasto');
} else {
    if (posicionModificar === -1) {
        // Si no estamos modificando, se agrega el nuevo gasto
        listaNombreGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGasto);
    } else {
        // Si estamos en modo de edición, actualizamos los datos en la posición correspondiente
        listaNombreGastos[posicionModificar] = nombreGasto;
        listaValoresGastos[posicionModificar] = valorGasto;
        listaDescripcionGastos[posicionModificar] = descripcionGasto;
        posicionModificar = -1; // Salimos del modo de edición
    }
    
    actualizarListaGastos();
   
  }
}
  function actualizarListaGastos() {
       const listaElementos = document.getElementById('listaDeGastos');
       const totalElementos = document.getElementById('totalGastos');
       let htmlLista = '';
       let totalGastos = 0;
       listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionGastos[posicion]; // Tomamos la descripción de la lista
        htmlLista += `<li> Nombre: ${elemento} - Costo: USD ${valorGasto.toFixed(2)} <br> Descripción: ${descripcionGasto}
        <button onclick="modificarGasto(${posicion})">Modificar</button>
        <button onclick="eliminarGasto(${posicion})">Eliminar</button></li>`;
        totalGastos += valorGasto;
       });
       listaElementos.innerHTML = htmlLista;
       totalElementos.innerHTML = totalGastos.toFixed(2);
       limpiar();
  }
  function limpiar(){
       document.getElementById('nombreGasto').value = '';
       document.getElementById('valorGasto').value = '';
       document.getElementById('descripcionGasto').value = '';
}
 
   function eliminarGasto(posicion){
        //console.log(posicion);
         listaNombreGastos.splice(posicion, 1);
         listaValoresGastos.splice(posicion, 1);
         listaDescripcionGastos.splice(posicion, 1); // Eliminar también la descripción
          actualizarListaGastos();
}
   function modificarGasto(posicion) {
    //  Se cargan los datos actuales en los campos de entrada
    document.getElementById('nombreGasto').value = listaNombreGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
    // Se guarda la posición para actualizar el gasto, al hacer clic en el botón
    posicionModificar = posicion;
}
             
/*
        const carrito = [
            {nombre: 'Monitor 20 pulgadas', precio: 500},
            {nombre: 'Televisión 50 pulgadas', precio: 700},
            {nombre: 'Tablet', precio: 300},
            {nombre: 'Audifonos', precio: 200},
            {nombre: 'Teclado', precio: 50},
            {nombre: 'Celular', precio: 500},
            {nombre: 'Bocinas', precio: 300},
            {nombre: 'Laptop', precio: 800},
        ];
        
        for(let i = 0; i < carrito.length; i++ ){
            console.log(carrito[i].nombre);
        }*/