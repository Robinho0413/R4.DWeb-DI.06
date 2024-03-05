import Card from "../Card/Card";

function Team(team) {
  let employees = team.employees.map((employee) => {
    // console.log(index);
    return (
      <li key={employee.id} className="team__galleryItem">
        <Card
          image={employee.image}
          title={employee.title}
          subtitle={employee.subtitle}
        />
      </li>
    );
  });
  return (
    <section className="team">
      <header className="team__header">
        <h2 className="team__title">{team.title}</h2>
        <h1 className="team__heading">{team.heading}</h1>
      </header>
      <div className="team__content">
        <p className="team__description"> {team.description}</p>
        <ul className="team__gallery">{employees}</ul>
      </div>
    </section>
  );
}

export default Team;
