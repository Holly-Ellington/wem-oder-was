import React, { useEffect, useState } from "react";
import VocabData from "./data/VocabData";
import VocabList from "./components/VocabList";
import Header from "./Header";
import WordForm from "./components/WordForm";

function App() {

  const [vocabData, setVocabData] = useState(VocabData);


  // https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/ 

  useEffect(()=>{
    fetch(`https://api.pons.com/v1/dictionary?l=deen&q=house`,{
      // X-Secret: ''
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
  })

  const addVocabWord = (newWord) => {
    setVocabData([newWord, ...vocabData]);
  }

  const handleCardDelete = (id) => {
    console.log(id);

    setVocabData(vocabData.filter((word)=>word.id !== id))

  }
  

  return (
    <>
    <Header />
    <div className="App container">
      <WordForm addVocabWord={addVocabWord}/>
      <VocabList vocab={vocabData} handleCardDelete={handleCardDelete}/>

    </div>
    </>
  );
}

export default App;
