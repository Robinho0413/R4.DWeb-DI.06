import './App.css';
import Page from './components/offer';


let page = {

  title: "Prix et option à l'achat",
  description: "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",

  offers: [
    {
      name: "Starter Package",
      price: {
        buying : "29 999.99",
        leasing : "299.99",
      },
      adv: [
        { isChecked: true, name: "Assurance auto complémentaire" },
        { isChecked: true, name: "Première recharge offerte" },
        { isChecked: true, name: "Assurance contre le vol" },
        { isChecked: true, name: "Service de rappel d'entretien" },
        { isChecked: false, name: "Nettoyage hebdomadaire" },
        { isChecked: false, name: "Service de diagnostic à distance" },
        { isChecked: false, name: "Service de remplissage du réservoir" },
        { isChecked: false, name: "Service de réparation à domicile" },
        { isChecked: false, name: "Entretien régulier" },
        { isChecked: false, name: "Recharge d'hydrogène illimité" }
      ],
      direction: "dejdefd",
      btn: "Get Started"
    },
    {
      name: "Premium Package",
      price: {
        buying : "35 999.99",
        leasing : "359.99",
      },
      adv: [
        { isChecked: true, name: "Assurance auto complémentaire" },
        { isChecked: true, name: "Première recharge offerte" },
        { isChecked: true, name: "Assurance contre le vol" },
        { isChecked: true, name: "Service de rappel d'entretien" },
        { isChecked: true, name: "Nettoyage hebdomadaire" },
        { isChecked: true, name: "Service de diagnostic à distance" },
        { isChecked: true, name: "Service de remplissage du réservoir" },
        { isChecked: false, name: "Service de réparation à domicile" },
        { isChecked: false, name: "Entretien régulier" },
        { isChecked: false, name: "Recharge d'hydrogène illimité" }
      ],
      direction: "dejdefd",
      btn: "Get Started"
    },
    {
      name: "Prestige Package",
      price: {
        buying : "49 999.99",
        leasing : "499.99",
      },
      adv: [
        { isChecked: true, name: "Assurance auto complémentaire" },
        { isChecked: true, name: "Première recharge offerte" },
        { isChecked: true, name: "Assurance contre le vol" },
        { isChecked: true, name: "Service de rappel d'entretien" },
        { isChecked: true, name: "Nettoyage hebdomadaire" },
        { isChecked: true, name: "Service de diagnostic à distance" },
        { isChecked: true, name: "Service de remplissage du réservoir" },
        { isChecked: true, name: "Service de réparation à domicile" },
        { isChecked: true, name: "Entretien régulier" },
        { isChecked: true, name: "Recharge d'hydrogène illimité" }
      ],
      direction: "dejdefd",
      btn: "Get Started"
    }
  ],
}


function App() {

  let cb_buy = function(){
    alert("merci pour votre achat")

  }

  return (
    <div className="App">
      <Page {...page, cb_buy} />
    </div>
  );
}

export default App;
