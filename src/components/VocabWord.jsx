import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// next steps: conditional styling based on gender and partOfSpeech

function VocabWord({article, word, id, partOfSpeech, gender, handleCardDelete, meaning}) {
  return (
    <>
    <div key={id} className="card">
        <button className='card-btn' onClick={()=>{handleCardDelete(id)}}>
            <FaTrash color='#F64740' className='fa-xl' />
        </button> 
        <div className='card-contents'>
        <h3 className={`${gender === 'f' && 'fem'} ${gender === 'm' && 'masc'} ${gender === 'n' && 'neut'} `}><span className='article-span'>{article}</span> <span className='article-span'>{word}</span></h3>
        <div><span>{gender}</span> • <span>{partOfSpeech}</span></div>
        <p>{meaning}</p>
     
        </div>
        
    </div>
    </>
  )
}

export default VocabWord