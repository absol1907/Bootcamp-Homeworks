import style from "./Card.module.scss";

const Card = (props) => {

  console.log("Card Components");


  return (
    <div className={style.card}>
      <div className={style.card__student}>{props.name} <br />{props.group}</div>
    </div>
  )
}

export default Card;