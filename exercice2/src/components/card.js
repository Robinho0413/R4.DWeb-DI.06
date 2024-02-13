'use client';
import '../css/base.css';


function Advantage({name}){
    return (
        <li>
            <span className='advantage__checkmark'>✓</span>
            <p className='advantage__text'>{name}</p>
        </li>
    )
}

export default function Card(offer) {
    
    return (
        <ul className='offer-box'>
            <li className='offer-box__header'>
                <h3 className='offer-box__name'>{offer.name}</h3>
                <p className='offer-box__price'>{offer.price}</p>
            </li>

            <Advantage name={offer.adv.name}/>

            
        </ul>
    )
}