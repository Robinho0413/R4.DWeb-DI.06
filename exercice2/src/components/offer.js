import React, { useState } from 'react';
import "../css/base.css";
import Card from './card';


export default function Page(page, cb_buy) {

    // checked est l'état courant de cette variable d'état et setToggleChecked est la fonction de mise à jour
    // useState défini l'état initial
    const [checked, setChecked] = useState(false);

    // fonction lors du click sur le toggle
    let handler = function(){
        //defini useState en l'inverse de la position actuelle
        setChecked(!checked);
    }

    let popup = function(){
        alert("hello")
    }

    return (
        <div className="offer">
            <div className="offer-section">
                <h2 className="offer-section__title">{page.title}</h2>
                <p className="offer-section__description">{page.description}</p>

                <div className='offer-section__toggle'>
                    <label className="switch">
                        <input type="checkbox" onClick={handler}/>
                        <span></span>
                    </label>
                </div>

                <div className="box">
                    {page.offers.map((offer, index) => (
                        <div key={index}>
                            <Card name={offer.name} price={checked ? offer.price.leasing : offer.price.buying} adv={offer.adv} handler={cb_buy} direction={offer.direction} btn={offer.btn} />
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
}