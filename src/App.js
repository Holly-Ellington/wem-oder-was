import React, { useState } from "react";
import VocabData from "./data/VocabData";
import VocabList from "./components/VocabList";
import Header from "./Header";

function App() {

  const [vocabData, setVocabData] = useState(VocabData);

  const handleCardDelete = (id) => {
    console.log(id);

    setVocabData(vocabData.filter((word)=>word.id !== id))

} 

  return (
    <>
    <Header />
    <div className="App container">
      
      <VocabList vocab={vocabData} handleCardDelete={handleCardDelete}/>

    </div>
    </>
  );
}

export default App;
