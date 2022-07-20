import style from "./Card.module.scss";

const Card = (props) => {

  
  return (
    <div className={style.card}>
      <div className={style.card__name}>{props.name}</div>
      <div className={style.card__status}>{"Status: "+props.status}</div>
      <div className={style.card__date}>{"Start Date: "+props.date}</div>
      <div className={style.card__task}>{"Tasks: "+props.task}</div>
      <div className={style.card__members}>{"Members: "+props.members}</div>
      <div className={style.card__percentage}>{"Progress: "+props.percentage}</div>
      {/*<div className={style.card__date}>{props.startDate.toLocaleDateString("tr", { year: 'numeric', month: "long" , day: "numeric"})}</div> */}
    </div>
  )
  }

export default Card;