 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Header from './components/header';
 import Feed from './components/feed';


function App() {
  return (
    <div className="App">
      {/* Declaración de componente: Main Header - Logo, barra de búsqueda y Avatar */}
      <Header />
      {/* Feed General: Historias, menu, mensajes*/}
      <Feed />

    </div>
  );
}

export default App;
