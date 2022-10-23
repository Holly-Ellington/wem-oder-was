import React, { useState } from "react";
import VocabData from "./data/VocabData";
import VocabList from "./components/VocabList";

function App() {

  const [vocabData, setVocabData] = useState(VocabData);

  return (
    <div className="App container">
      <VocabList vocab={vocabData}/>

    </div>
  );
}

export default App;
