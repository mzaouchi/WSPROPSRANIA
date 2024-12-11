import './App.css';
import About from './Components/About';

function App() {
  var name = "Wajdi"
  var age = 20
  var pays = ["Tunisia","France","Malta","Canada"]
  var car = {
    model : 'Ford',
    year : 2020,
    owner : 'Walid'
  }

  var user = "Rania"

  const handleHello =()=> alert('Hello Rahma')

  const handleNamedHello=(esm)=>alert(`Hello ${esm}`)
  
  const show  = true
  return (
   <div>
    <h1>Workshop PROPS</h1>
    <About name={name} age={age} pays={pays} car={car} user={user} handleHello={handleHello} handleNamedHello={handleNamedHello} show={show}>
      <h2>Hadir</h2>
      <h4>Yesser</h4>
      <img src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Lapin_belier_hollandais.jpg' alt='Not Found'/>
    </About> 
   </div>
  );
}

export default App;
