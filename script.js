import React, { useState } from 'react';
import './style.css';

function App() {
  const [activeContent, setActiveContent] = useState('Grados');

  const showContent = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-area">
        <Menu showContent={showContent} />
        <VerticalMenu showContent={showContent} />
        <Content activeContent={activeContent} />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="app-header">
    </header>
  );
}

function Menu({ showContent }) {
  return (
    <nav className="app-menu">
      <div className="menu-links">
        <a href="#inicio" onClick={() => showContent('Grados')}>Inicio</a>
        <a href="#servicios" onClick={() => showContent('Servicios')}>Servicios</a>
        <a href="#acerca" onClick={() => showContent('Acerca')}>Acerca de</a>
        <a href="#contacto" onClick={() => showContent('Contacto')}>Contacto</a>
      </div>
    </nav>
  );
}

function VerticalMenu({ showContent }) {
  return (
    <div className="vertical-menu">
      {['Grados', 'Docentes', 'Modalidad', 'Días',
       'Salones', 'Horas', 'Asignación', 
       'InsertarAsignatura', 'Material'].map((item) => (
        <a key={item} href="#" onClick={() => showContent(item)}>{item}</a>
      ))}
    </div>
  );
}

function Content({ activeContent }) {
  return (
    <div className="app-content">
      {activeContent === 'Asignación' && <Asignacion />}
      {activeContent === 'InsertarAsignatura' && <InsertarAsignatura />}
      {activeContent !== 'Asignación' && activeContent !== 'InsertarAsignatura' && (
        <h2>Ingresa los datos de tu horario</h2>
      )}
    </div>
  );
}

function Asignacion() {
  const [inputValue, setInputValue] = useState('');
  const [documentList, setDocumentList] = useState([]);

  const handleSave = () => {
    if (inputValue) {
      setDocumentList([...documentList, inputValue]);
      setInputValue('');
    } else {
      alert("Por favor, ingresa el nombre de la asignatura.");
    }
  };

  return (
    <div className="tab-content">
      <h3>Asignar Asignatura</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa el nombre de la asignatura"
      />
      <button onClick={handleSave}>Guardar Asignatura</button>
      <ul>
        {documentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function InsertarAsignatura() {
  const [newSubjectInput, setNewSubjectInput] = useState('');
  const [newSubjectList, setNewSubjectList] = useState([]);

  const handleSaveNewSubject = () => {
    if (newSubjectInput) {
      setNewSubjectList([...newSubjectList, newSubjectInput]);
      setNewSubjectInput('');
    } else {
      alert("Por favor, ingresa el nombre de la nueva asignatura.");
    }
  };

  return (
    <div className="tab-content">
      <h3>Insertar Nueva Asignatura</h3>
      <input
        type="text"
        value={newSubjectInput}
        onChange={(e) => setNewSubjectInput(e.target.value)}
        placeholder="Nombre de la nueva asignatura"
      />
      <button onClick={handleSaveNewSubject}>Guardar Nueva Asignatura</button>
      <h4>Lista de Asignaturas</h4>
      <ul>
        {newSubjectList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
}

export default App;
