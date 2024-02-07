import './css/base.css';
import Card from './components/card';

let users = [
  {
    name: 'Édouard Jérémie',
    work: 'CEO',
    image: './edouard.jpg'
  },
  {
    name: 'Amélie Christelle',
    work: 'Directeur des recherche',
    image: './amelie.avif'
  },
  {
    name: 'Gilles Damien',
    work: 'Directeur commercial',
    image: './gilles.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <header className="team__header">
        <h2 className="team__title">Notre équipe</h2>
      </header>
      <section className="team__content">
        <h1 className="team__heading">Présentation de notre formidable équipe</h1>
        <p className="team__description"> Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux
          sommets dans le monde de la conduite à hydrogène.</p>
      </section>
      <ul className="gallery">
        {users.map((user, index) => (
          <Card key={index} name={user.name} work={user.work} image={user.image}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
