import './App.css';
import Card from './components/card';


let offer = {


    name: 'Starter Package',
    price: '29 999.99',

  
  adv: [
    {
      text: 'Assurance auto complémentaire',
    },
    {
      text: 'Première recharge offerte',
    },
    {
      text: 'Assurance contre le vol',
    }
  ]
};


function App() {
  return (
    <div className="App">
      <Card {...offer}/>
    </div>
  );
}

export default App;
