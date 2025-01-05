import { useState } from 'react'

import './App.css'

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [paragraph, setParagraph] = useState('');

  const words = ["apple", "banana", "cherry", "dog", "elephant", "forest", "giraffe", "house", "island", "jungle", "kite", "lion", "mountain", "notebook", "orange", "pencil", "quartz", "river", "sun", "table", "umbrella", "village", "whale", "xylophone", "yacht", "zebra", "anchor", "bridge", "cloud", "dolphin", "earth", "fire", "garden", "horizon", "igloo", "jacket", "king", "ladder", "moon", "north", "ocean", "pearl", "queen", "rose", "star", "tiger", "uniform", "valley", "wind", "xenon", "year", "zoo", "arrow", "breeze", "candle", "dream", "engine", "feather", "globe", "honey", "ink", "jewel", "kite", "light", "map", "night", "owl", "piano", "quill", "ring", "snow", "tree", "universe", "vase", "water", "x-ray", "yellow", "zipper", "armor", "blossom", "circle", "dragon", "emerald", "feast", "giant", "harmony", "ivory", "jungle", "knight", "leaf", "music", "nest", "opal", "path", "quest", "rainbow", "shadow", "treasure", "unity", "vortex", "manal", "asif", "hamdulay"];

  function generateParagraph() {
    let generatedParagraph = ""

    if(wordCount <= 0) {
       return setParagraph("Enter a positive number");
    }

    for(let i=0; i<wordCount; i++) {
      generatedParagraph += words[Math.floor(Math.random() * words.length)] + " ";
    }

    return setParagraph(generatedParagraph);
  }

  return (
    <>
      <div>
        <h1>Para Generator</h1>
        <div>
          <input type='number' placeholder='Enter Number of Words' onChange={(e) => setWordCount(e.target.value)} value={wordCount} />
          <button onClick={generateParagraph}>Generate</button>
        </div>
        <br />
        <div>{paragraph}</div>
      </div>
    </>
  )
}

export default App
