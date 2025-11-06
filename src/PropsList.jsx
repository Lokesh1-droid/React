//import imagein from './assets/imagein.jpg'
import Propsin from './Propsin.jsx'
import { useState, useEffect } from 'react'
import useFetch from './useFetch.jsx'
function PropsList() {
  const [Propsof,error,setProps,setError] = useFetch()
  function handleDelete(id) {
    const NewProps = Propsof.filter((card) => card.id !== id);
    setProps(NewProps);
  }
  if(!Propsof){
    return(
    <>
    {!error && <p>Loading...</p>}
    {error && <p>{error}</p> }
    </>
    )
  }
  return (
    <>
      {Propsof.map((course) => (
        <Propsin 
          key={course.id}
          name={course.name}
          image={course.image}
          text={course.text}
          delete={handleDelete}
          id={course.id}
        />
      ))}
    </>
  );
}

export default PropsList;

