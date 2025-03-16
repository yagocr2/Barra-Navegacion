/**
 * Script para la barra de navegación con animación
 * Controla el movimiento del indicador y la activación de elementos
 */
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos de navegación
    const items = document.querySelectorAll('.navbar .item');
    // Seleccionar el indicador que se moverá
    const indicator = document.querySelector('.indicator');
    
    /**
     * Función para actualizar la posición del indicador y el estado activo
     * @param {HTMLElement} el - El elemento de navegación que se activará
     */
    function updateIndicator(el) {
        // Obtener el índice del elemento desde el atributo data-index
        const index = parseInt(el.getAttribute('data-index'));
        
        // Actualizar posición del indicador
        // Cada elemento ocupa 20% del ancho, así que multiplicamos el índice por 100%
        indicator.style.transform = `translateX(${index * 100}%)`;
        
        // Remover clase active de todos los elementos
        items.forEach(item => {
            item.classList.remove('active');
        });
        
        // Agregar clase active al elemento seleccionado
        el.classList.add('active');
    }
    
    // Agregar evento click a cada elemento de navegación
    items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
            updateIndicator(this); // Actualizar indicador al elemento actual
        });
    });
    
    // Inicializar el indicador en la posición del elemento activo al cargar la página
    const activeItem = document.querySelector('.navbar .item.active');
    if (activeItem) {
        updateIndicator(activeItem);
    }
});



