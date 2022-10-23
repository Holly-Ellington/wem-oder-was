import React from 'react'

function VocabWord({article,word, id}) {
  return (
    <>
    <div key={id} className="card">
        <div>{article}</div>
        <h4>{word}</h4>
    </div>
    </>
  )
}

export default VocabWord