import React from 'react'
import VocabWord from './VocabWord'

function VocabList({vocab, handleCardDelete}) {
    console.log(vocab);

  return (
    <>
        <div className="list">
            {vocab.map((word)=>(
               <VocabWord 
                    id={word.id}
                    article={word.article}
                    word={word.word}
                    partOfSpeech={word.partOfSpeech}
                    gender={word.gender}
                    handleCardDelete={handleCardDelete}
                /> 
            ))}
        </div>
    </>
  )
}

export default VocabList