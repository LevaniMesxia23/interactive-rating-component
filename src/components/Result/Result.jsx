import "./result.css"
import image from "/images/illustration-thank-you.svg"
export default function Result(){
  return (
    <div className="container">
      <img src={image} alt="" />
      <button>You selected {} out of 5</button>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}