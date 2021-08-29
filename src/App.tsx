import { AboutMe } from "./blocks/aboutMe/AboutMe";
import { Header } from "./blocks/header/Header";
import { Wallpaper } from "./blocks/header/Wallpaper";
import { MySkills } from "./blocks/mySkills/mySkills";
import { FaReact } from 'react-icons/fa'
import { RiHtml5Line } from 'react-icons/ri'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiRedux, SiAdobephotoshop } from 'react-icons/si'
import s from './blocks/mySkills/skillCard/SkillCard.module.css'
import { Portfolio } from "./blocks/portfolio/Portfolio";
import socialNetworkImage from "./img/dotted.png"
import todoListImage from "./img//png-transparent-todoist-task-management-action-item-zomato-rectangle-logo-business.png"
import calculatorImage from "./img/calculator_14445.png"
import { Contact } from "./blocks/contact/Contact";
import { Footer } from "./blocks/footer/Footer";



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
  image: string
}

const skills: Array<skillType> = [{
  skill: "React",
  percent: 50,
  icon: <FaReact className={s.faReact} />
},
{
  skill: "HTML",
  percent: 80,
  icon: <RiHtml5Line className={s.riHtml5Line} />
},
{
  skill: "CSS",
  percent: 60,
  icon: <DiCss3 className={s.diCss3} />
},
{
  skill: "Redux",
  percent: 50,
  icon: <SiRedux className={s.siRedux} />
},
{
  skill: "Photoshop",
  percent: 80,
  icon: <SiAdobephotoshop className={s.siAdobephotoshop} />
},
{
  skill: "JS Native",
  percent: 60,
  icon: <DiJavascript1 className={s.diJavascript1} />
}
]

const works: Array<worksType> = [{
  name: "Social Network",
  image: socialNetworkImage
},
{
  name: "TodoList",
  image: todoListImage
},
{
  name: "Calculator",
  image: calculatorImage
}
]



function App() {



  return (
    <>
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
