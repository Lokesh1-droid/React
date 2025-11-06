import { useState, useEffect } from 'react'
const useFetch = () => {
  const [Propsof, setProps] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(()=>{
    fetch('http://localhost:3000/Dummy')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => setProps(data))
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      })
    },1000)
  }, []);
  return [Propsof,error,setProps,setError];
}
export default useFetch;
  