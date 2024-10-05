function showContent(content) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Limpiar contenido previo

    createTab(content);
    createContent(content);
}

function createTab(content) {
    const contentArea = document.getElementById('content-area');
    const tab = document.createElement('a');
    tab.className = 'tab tab-active';
    tab.id = `tab-${content}`;
    tab.textContent = content;
    tab.onclick = () => activateTab(content);
    contentArea.appendChild(tab);
}

function createContent(content) {
    const contentArea = document.getElementById('content-area');
    let contentDiv;

    if (content === 'Asignación') {
        contentDiv = document.getElementById('asignacion-content');
    } else if (content === 'InsertarAsignatura') {
        contentDiv = document.getElementById('insertar-asignatura-content');
    } else {
        contentDiv = document.createElement('div');
        contentDiv.textContent = `Contenido de ${content}. Aquí puedes agregar más información específica sobre ${content}.`;
    }

    contentArea.appendChild(contentDiv);

    // Activar funcionalidades específicas
    if (content === 'Asignación') {
        setupAssignmentFunctionality();
    } else if (content === 'InsertarAsignatura') {
        setupNewSubjectFunctionality();
    }
}

function setupAssignmentFunctionality() {
    document.getElementById("guardar").addEventListener("click", function() {
        const text = document.getElementById("searchInput").value;
        if (text) {
            const documentList = document.getElementById("documentList");
            const li = document.createElement("li");
            li.textContent = text;
            documentList.appendChild(li);
            document.getElementById("searchInput").value = ''; // Limpiar campo de entrada
        } else {
            alert("Por favor, ingresa el nombre de la asignatura.");
        }
    });
}

function setupNewSubjectFunctionality() {
    document.getElementById("guardarNueva").addEventListener("click", function() {
        const newText = document.getElementById("newSubjectInput").value;
        if (newText) {
            const newSubjectList = document.getElementById("newSubjectList");
            const li = document.createElement("li");
            li.textContent = newText;
            newSubjectList.appendChild(li);
            document.getElementById("newSubjectInput").value = ''; // Limpiar campo de entrada
        } else {
            alert("Por favor, ingresa el nombre de la nueva asignatura.");
        }
    });
}

function activateTab(content) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('tab-active');
    });
    contents.forEach(contentDiv => {
        contentDiv.style.display = 'none';
    });

    const activeTab = document.getElementById(`tab-${content}`);
    const activeContent = document.getElementById(content === 'Asignación' ? 'asignacion-content' : 'insertar-asignatura-content');
    activeTab.classList.add('tab-active');
    activeContent.style.display = 'block';
}
function activateTab(content) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('tab-active');
    });
    contents.forEach(contentDiv => {
        contentDiv.classList.remove('active'); // Cambia a uso de clase
    });

    const activeTab = document.getElementById(`tab-${content}`);
    const activeContent = document.getElementById(content === 'Asignación' ? 'asignacion-content' : 'insertar-asignatura-content');
    activeTab.classList.add('tab-active');
    activeContent.classList.add('active'); // Cambia a uso de clase
}

