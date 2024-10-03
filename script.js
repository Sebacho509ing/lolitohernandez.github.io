let currentContent = '';

function showContent(content) {
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    const backButton = document.getElementById('back-button');

    // Actualiza el contenido
    currentContent = content;
    contentTitle.textContent = content;
    contentBody.textContent = `Contenido de ${content}. Aquí puedes agregar más información.`;
    
    // Muestra el botón de volver
    backButton.style.display = 'block';
}

function goBack() {
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    const backButton = document.getElementById('back-button');

    // Resetea el contenido al estado inicial
    contentTitle.textContent = 'Seleccione una opción';
    contentBody.textContent = 'Por favor, elige una opción del menú vertical.';
    
    // Oculta el botón de volver
    //backButton.style.display = 'none';
}
