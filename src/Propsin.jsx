function Propsin(props){
  return(
      <div className = "card">
      <img src = {props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.text}</p>
    </div>
    );
}

export default Propsin