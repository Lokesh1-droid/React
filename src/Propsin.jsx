import PropTypes from 'prop-types'
import { useState } from 'react'
function Propsin(props){
  //let purchased = false
  const [purchased,setPurchased] = useState(false);
  function Buy(){
    alert("Purchased")
    setPurchased(true);//I have done mistake here,I have assigned but it is function
  }
  return(
     props.name && <div className = "card">
      <img src = {props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.text}</p>
        <button onClick={Buy}>Buy</button>
        <button onClick={()=>props.delete(props.id)}>Delete</button>
        <p>{purchased ? "Already Purchased" : "Buy to Use"}</p>
    </div>
    );}
Propsin.propTypes={
  name : PropTypes.String,
  show : PropTypes.bool
  }
export default Propsin
