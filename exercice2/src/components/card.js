'use client';
import '../css/base.css';


function Advantage({ name, isChecked }) {
    if (isChecked) {
        return (
            <>
                <span className='advantage__checkmark'>✓</span>
                <p className='advantage__text'>{name}</p>
            </>
        )

    }
    else {
        return (
            <>
                <span class="advantage__notcheckmark">✓</span>
                <p class="advantage__text">{name}</p>
            </>
        )
    }
}

export default function Card(offer) {

    return (
        <ul className='offer-box'>
            <li className='offer-box__header'>
                <h3 className='offer-box__name'>{offer.name}</h3>
                <p className='offer-box__price'>{offer.price}</p>
            </li>
            {offer.adv.map((adv, index) => (
                <li class="advantage">
                    <Advantage key={index} name={adv.name} isChecked={adv.isChecked} />
                </li>
            ))}
            <li >
                <a href={offer.direction} class="header__lien"><button class="header__button btn--hero__nav">{offer.btn}</button>
                </a>
            </li>
        </ul>
    )
}