import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // generates random number between min and max 
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // capitalizes first letter of any text
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // formates and generated main output
  function strFormater(text, num) {
    // clear unwanted characters
    let textCleared = text.replace(/[.;:,()'"\[\d\]]/g,'')

    // convert str to array
    let textArrayed = textCleared.split(" ")

    // remove duplicated words and make them lowercase
    let textUnique  = [...new Set(textArrayed)].map(i => i.toLowerCase())

    let output = ""

    //num shows number of sentences
    for (let i = 0; i < num; i++) {

      // randWordCount shows number of words in a specific sentence
      let randWordCount = getRandomArbitrary(20, 60)
      for (let x = 0; x < randWordCount; x++) {

        // randWordSelector selects the word 
        let randWordSelector = getRandomArbitrary(0, textUnique.length - 1)
        if (x == 0) {
          output+= `${capitalizeFirstLetter(textUnique[randWordSelector])} `
        } else if (x == randWordCount - 1) {
          output+= `${textUnique[randWordSelector]}.\n\n`
        } else {
          output+= `${textUnique[randWordSelector]} `
        }
      }
    } 
    return output
  }

  // sample str: backend
  let sampleStrText = "Football' is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America and Oceania); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.[1] These various forms of football share to varying extent common origins and are known as football codes."
  
  // gets sentences
  sampleStrText = strFormater(sampleStrText, getRandomArbitrary(2, 6))

  // sets state
  let [sampleStr, setSampleStr] = useState(sampleStrText);

  return (
    <div className="App">
      <header className="App-header">
        
        <input className='input' type="text" placeholder='please enter your word' />
        <br />
        <input type="number" placeholder='please enter paragraph number' />
        <br />
        <button className='btn btn-primary lg' >Generate</button>
        <br />
        <br />
        <div>
          <textarea>{sampleStr}</textarea>

        </div>
      </header>
    </div>
  );
}

export default App;
