document.addEventListener('DOMContentLoaded', () => {
    let inputItem = document.getElementById("item");
    let btnLimpiar = document.getElementById("limpiar");
    let divMostrarNames = document.getElementById("mostrarNames");
    let btnAgregar = document.getElementById("agregar")

    function traerNames() {
        let estudiantesString = localStorage.getItem("names");
        return estudiantesString ? estudiantesString.split(",") : [];
    }

    let names = traerNames();

    function mostrarNames() {
        divMostrarNames.innerHTML = names.length > 0
            ? names.map(nombre => `<p>${nombre}</p>`).join('')
            : '<p>No hay estudiantes en la lista.</p>';
    }

    btnAgregar.addEventListener('click', function() {
        const nombre = inputItem.value.trim();
        if (nombre) {
            if (!names.includes(nombre)) {
                names.push(nombre);
                inputItem.value = '';
              mostrarNames();
            } else {
                alert('El nombre ya está en la lista.');
            }
        } else {
            alert('Ingrese un nombre.');
        }
    }
    );

    btnLimpiar.addEventListener('click', function() {
        names = []; 
        localStorage.removeItem("names"); 
        mostrarNames(); 
    });
})







