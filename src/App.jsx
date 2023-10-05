
import { useRef } from 'react';
import './App.css'
import Hero from './assets/components/Hero';

function App() {

  let marks = 80;
  const city = ['Chittagong', 'Dhaka', 'DInajpur', "COx'xbazar"];

  const Obj = {
    name: "Adib Ahbab",
    age: 18,
    city: city[0]
  }

  const buttonClick = () => {
    alert("Clicked");
  }

  const PostForm = (event) => {
    event.preventDefault();//turn off auto reload while submit
    alert("Posted");
  }

  let firstname = useRef();//similar to document.getElementById('')
  let lastname = useRef();
  const change = () => {
    let fname = firstname.current.value;
    let lname = lastname.current.value;
    alert(fname + " " + lname);
  }
  return (
    <>

      {
        marks > 80 ? <h1>Brilliant Result</h1> : <h1>Avarage Result</h1>
      }

      <ul>
        {
          city.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>

      <Hero item={Obj} Btn={buttonClick}></Hero>

      <form action="" onSubmit={PostForm}>
        <input type="text" placeholder='Name' />
        <button>Submit</button>
      </form>

      <input type="text" ref={firstname} placeholder='First name' />
      <input type="text" ref={lastname} placeholder='Last name' />
      <button className='btn btn-danger' onClick={change}>Submit new</button>
    </>


  );
}

export default App
