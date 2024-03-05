import Team from "./component/Team/Team";

import "./global.css";

function App() {
  let data = {
    title: "Notre équipe",
    heading: "Présentation de notre équipe formidable",
    description:
      "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.",
    employees: [
      {
        id: 1,
        image: "/edouard.jpg",
        title: "Pierre Durand",
        subtitle: "Responsable de la gestion locative",
      },
      {
        id: 2,
        image: "/amelie.avif",
        title: "Sophie Lefevre",
        subtitle: "Responsable de la communication",
      },
      {
        id: 3,
        image: "/gilles.jpg",
        title: "Gilles Damien",
        subtitle: "Directeur commercial",
      },
    ],
  };

  let data2 = {
    title: "Our Team !",
    heading: "Here is our amazing team !",
    description: "We know how to make your dreams come true",
    employees: [
      {
        id: 1,
        image: "https://i.pravatar.cc/505",
        title: "George Abitbol",
        subtitle: "International Design Manager",
      },
      {
        id: 2,
        image: "https://i.pravatar.cc/401",
        title: "Sophie Lefevre",
        subtitle: "CEO",
      },
      {
        id: 3,
        image: "https://i.pravatar.cc/452",
        title: "Hugo Sanchez",
        subtitle: "CTO",
      },
      {
        id: 4,
        image: "https://i.pravatar.cc/450",
        title: "Hugo Sanchez",
        subtitle: "CTO",
      },
    ],
  };

  return (
    <>
      <Team {...data} />
      <Team {...data2} />
    </>
  );
}

export default App;
