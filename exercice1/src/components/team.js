import React from 'react';
import Card from './card';
import '../css/base.css';


export default function Teams({title, heading, description}) {

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
    
    return (
        <div>
            <header className="team__header">
                <h2 className="team__title">{title}</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">{heading}</h1>
                <p className="team__description">{description}</p>
            </section>
            <ul className="gallery">
                {users.map((user, index) => (
                    <Card key={index} name={user.name} work={user.work} image={user.image} />
                ))}
            </ul>
        </div>
    )
}