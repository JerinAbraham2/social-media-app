import { Circle, Info } from "react-feather"
import "./Widgets.css"

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <Circle className="widgets__icon"/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Organized News</h2> 
        <Info />
      </div>
      {newsArticle("Tobi Turner", "Must read - 9,182 readers")}
      {newsArticle("The Organized Communication Social Media App", "Social - 29,132 readers")}
      {newsArticle("React is overused", "Must read - 4,982 readers")}
      {newsArticle("Is redux still good?", "Some redux website - 1,284 readers")}
      {newsArticle("Should you use SCSS in 2022", "Some SCSS website - 3,293 readers")}
      {newsArticle("JavaScript Why?", "C++isbetter.com - 4,292 readers")}
    </div>
    
  )
}

export default Widgets