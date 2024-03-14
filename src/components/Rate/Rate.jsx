import "./rate.css"
import Star from "/images/icon-star.svg"

export default function Rate(){
  let buttons = [1,2,3,4,5]
  return (
    <div className="rate-container">
      <div className="oval">
        <img src={Star} alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="buttons-div">
      {buttons.map(button => <button className="number-button">{button}</button>)}
      </div>
      
      <button className="submit">Submit</button>
    </div>
  )
}