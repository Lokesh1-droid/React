import { useState } from 'react';
function Login(){
  const [pwd1,setPwd1] = useState("");
  const [pwd2,setPwd2] = useState("");
  
  const [same ,setSame] = useState(false)
  function handlepwd1change(event){
    setPwd1(event.target.value)
    //console.log(event.target.value);
    
  }
  function handlepwd2change(event){
    setPwd2(event.target.value)
    //console.log(event.target.value);
    if(pwd1 == event.target.value){
      console.log("same")
      setSame(true)
    }
    else{
      console.log("Not same")
      setSame(false)
    }
  }
  return(
    <>
    <form>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input value={pwd1} onChange={handlepwd1change} type="password" className="form-control"/>
    
  </div>
  <div className="mb-3">
    <label className="form-label">Re-Password</label>
    <input value={pwd2} onChange={handlepwd2change} type="password" className="form-control"/>
    </div>
  <div className="mb-3 form-check">
    <input type ="checkbox" className="form-check-input" />
    <label className="form-check-label">Apply to terms and conditions</label>
  </div>
  {same && <p>Passwords match</p>}
  {!same && <p>Passwords don't match</p>}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </>
    )
}
export default Login