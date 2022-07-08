
const inputRango = document.getElementById('inputRango');
const visitas = document.getElementById('visitas');
const precio = document.getElementById('precio');

inputRango.addEventListener('input', () => {
    console.log('me diste click 😒');
    console.log(inputRango.value);
    precio.textContent = inputRango.value // De esta manera vinculamos el precio con la barra de rango
    visitas.textContent = arrayVIsitas[(inputRango.value / 8 - 1)]; // El rango que va desde 8 a 40  lo / en 8 entonces si es 8/8 me da 1 -1 = 0 index 0 osea 10K y asi con l,os demas si por ej es 16/8 = 2 -1 = 1 osea index 1 que seria 50K y asi con todos 
});


//  Esta constante la hacemos para hacer dinamico el PAGESVIEW con la linea 10 

const arrayVIsitas = ['10K', '50K', '100k', '500K', '1M'];


