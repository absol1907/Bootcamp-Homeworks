import Wrapper from "../Wrapper/Wrapper";
import CTAButton from "../Button/Button";
import DATA from "../Students/studentData";

import style from "./Header.module.scss";

const Header = () => {

  const title = "Kodluyoruz Bursa Front-End Botcamp Students";

  return (
    <header className={style.header}>

      <Wrapper className="column">
        <h1 className={style.header__title}>{title}</h1>
        <p className={style.header__content}>
          There are 3 diffrent groups in the bootcamp.
          <br />
          Every group has an assistant.(Assistants declared by bold font)
        </p>
      </Wrapper>

      <Wrapper>
        <CTAButton className ="blue" text="Group AliceBlue" onClick = {DATA.id=0}/>
        <CTAButton className ="orange" text="Group OrangeRed" />
        <CTAButton className ="pink" text="Group DeepPink" />
      </Wrapper>
    </header>
  )
}

export default Header;