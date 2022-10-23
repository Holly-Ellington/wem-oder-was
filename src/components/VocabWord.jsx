import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function VocabWord({article,word, id, partOfSpeech, gender, handleCardDelete}) {
  return (
    <>
    <div key={id} className="card">
        <div>
            <h4>{article} {word} ({gender}) [{partOfSpeech}]</h4>
            <button className='card-btn' onClick={()=>{handleCardDelete(id)}}>
                <FaTrash color='#F64740' className='fa-xl' />
            </button>
                  
        </div>
        
    </div>
    </>
  )
}

export default VocabWord