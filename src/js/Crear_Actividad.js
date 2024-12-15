const crearActividadBtn = document.getElementById('crearActividad');

crearActividadBtn.addEventListener('click', () => {
    const materia = document.getElementById('materia').value;
    const descripcion = document.getElementById('descripcion').value;
    const audio = document.getElementById('audio').files[0];
    const imagen = document.getElementById('imagen').files[0];

    // Aquí debes implementar la lógica para enviar los datos al servidor o realizar cualquier otra acción necesaria
    // Por ejemplo, podrías usar Fetch API para enviar una solicitud POST a un servidor
    
    console.log('Materia:', materia);
    console.log('Descripción:', descripcion);
    console.log('Audio:', audio);
    console.log('Imagen:', imagen);
});