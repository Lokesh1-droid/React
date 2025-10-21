import './App.css'
import Propsin from './Propsin.jsx'
import imagein from './assets/imagein.jpg'
function App() {

  return (
    <>
    <Propsin name='Card1' text="This is card of Card1" image={imagein}/>
    <Propsin name='Card2' text="This is card of Card2" image={imagein}/>
    <Propsin text="This is card of Card3" image={imagein}/>
    </>
  );
}


export default App
