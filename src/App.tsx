import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { RiHtml5Line } from 'react-icons/ri';
import { SiAdobephotoshop, SiRedux } from 'react-icons/si';
import st from "./App.module.css";
import { AboutMe } from "./blocks/aboutMe/AboutMe";
import { Contact } from "./blocks/contact/Contact";
import { Footer } from "./blocks/footer/Footer";
import { Header } from "./blocks/header/Header";
import { Wallpaper } from "./blocks/header/Wallpaper";
import { MySkills } from "./blocks/mySkills/mySkills";
import s from './blocks/mySkills/skillCard/SkillCard.module.css';
import { Portfolio } from "./blocks/portfolio/Portfolio";
import kino_logo from "./img//kino_logo.png";
import converter_logo from "./img/converter_logo.png";
import Pokeball from "./img/pokeb.png";
import timer from "./img/timet.png";
import Weather from "./img/unnamed.png";


export type skillType = {
  skill: string,
  percent: number,
  icon: JSX.Element
}
export type projectType = {
  name: string,
  description: string,

}

export type worksType = {
  name: string,
  image: string,
  link: string
}

const skills: Array<skillType> = [{
  skill: "React",
  percent: 80,
  icon: <FaReact className={s.faReact} />
},
{
  skill: "HTML",
  percent: 80,
  icon: <RiHtml5Line className={s.riHtml5Line} />
},
{
  skill: "CSS",
  percent: 70,
  icon: <DiCss3 className={s.diCss3} />
},
{
  skill: "Redux",
  percent: 80,
  icon: <SiRedux className={s.siRedux} />
},
{
  skill: "Photoshop",
  percent: 90,
  icon: <SiAdobephotoshop className={s.siAdobephotoshop} />
},
{
  skill: "JS Native",
  percent: 80,
  icon: <DiJavascript1 className={s.diJavascript1} />
}
]

const works: Array<worksType> = [
  {
    name: "PokeStore",
    image: Pokeball,
    link: "https://newshinsky.github.io/PokemonStore/#/PokemonStore/Login"
  },
  {
    name: "Weather",
    image: Weather,
    link: "https://newshinsky.github.io/weather-widget/"
  },
  {
    name: "Timer",
    image: timer,
    link: "https://newshinsky.github.io/timer/"
  },
  {
    name: "Converter",
    image: converter_logo,
    link: "https://newshinsky.github.io/currency-converter/"
  },
  {
    name: "Kinopoisk",
    image: kino_logo,
    link: "https://newshinsky.github.io/kinopoisk/"
  },
]


function App() {



  return (
    <>
      <div className={st.arrowDown}>
        <a href="#Home">  <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <Header />
      <Wallpaper />
      <AboutMe />
      <MySkills skills={skills} />
      <Portfolio works={works} />
      <Contact />
      <Footer />
    </>
  );

}

export default App;
