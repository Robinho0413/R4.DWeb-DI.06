import './css/base.css';
import Teams from './components/team';

let teams = {
    title: 'Notre équipe', 
    heading: 'Présentation de notre formidable équipe', 
    description: 'Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.'
};




function App() {
  return (
    <div className="App">
      <Teams {...teams}/>
    </div>
  );
}

export default App;
