import style from "./card.module.css"

export default function Card({ image, title, subtitle }) {
  return (
    <figure className={style.card}>
      <div className={style.card__ct}>
        <img src={image} alt={title} className={style.card__image} />
      </div>
      <figcaption className={style.card__desc}>
        <h2 className={style.card__title}>{title}</h2>
        <h3 className={style.card__work}>{subtitle}</h3>
      </figcaption>
    </figure>
  );
}
