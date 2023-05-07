import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    console.log("useEffect from app.js")

  

  }, []);

  const firefunc = async () => {
    console.log('firing the function');
    try {
      const response = await fetch('http://localhost:5000/getData/', {
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          method: "POST",
          body: 'heres the response body'
      });
      console.log(' response')
      console.log(response)

      if (response.status === 200) {
        response.json().then( (res) => {
          console.log('res hey were over here :D ')
          console.log(res)
        })
          // response.json().then(handleJsonFromApi);
      } else {
          setResponse({message: "The server denied our request."})
      }
  } catch (e) {
      setResponse({message: "Failed fetching from the API"});
  }
}
  

  return (
    <div className="App">
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
      }}>
      <h1> oh wow </h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KFPCph5OFIWpi9IfEJf5S6Sot12hdqWiZg&usqp=CAU"/>
<button style={{ backgroundColor: 'indigo', color: 'blanchedalmond', marginTop: '0.5em', border: '3px solid black'}} 
    onClick={firefunc}> click me </button>
      </div>

    
    </div>
  );
}

export default App;
