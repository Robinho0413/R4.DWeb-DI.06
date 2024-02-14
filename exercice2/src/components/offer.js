import React from 'react';
import "../css/base.css";
import Card from './card';

export default function Page(page) {

    return (
        <div class="offer">
            <div class="offer-section">
                <h2 class="offer-section__title">{page.title}</h2>
                <p class="offer-section__description">{page.description}</p>
                <div class="box">
                    {page.offers.map((offer, index) => (
                    <div key={index}>
                        <Card name={offer.name} price={offer.price} adv={offer.adv} direction={offer.direction} btn={offer.btn} />
                    </div>
                ))}
                </div>
                
            </div>
        </div>

    );
}