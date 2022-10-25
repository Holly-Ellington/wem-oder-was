import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


function WordForm({addVocabWord}) {

    const [gender, setGender] = useState('')
    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')
    const [article, setArticle] = useState('')
    const [partOfSpeech, setPartOfSpeech] = useState('')
    const [wordCase, setWordCase] = useState('')

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const handleArticleChange = (e) => {
        setArticle(e.target.value)
    }

    const handleWordChange = (e) => {
        setWord(e.target.value);
    }

    const handlePartOfSpeechChange = (e) => {
        setPartOfSpeech(e.target.value);
    }

    const handleMeaningChange = (e) => {
        setMeaning(e.target.value);
    }

    // const handleWordCaseChange = (e) => {
    //     setWordCase(e.target.value);
    // }

    const handleSubmitWord = () => {
        // e.preventDefault();
        console.log('word submitted')
        const newWord = {
            id: uuidv4(),
            article: article,
            word: word,
            partOfSpeech: partOfSpeech,
            gender: gender,
            case: 'nominative',
            meaning: meaning,
        }

        addVocabWord(newWord);

    }

  return (

    <form className='form-container'>
        <div className="inputs">
        <h2>Was bedeutet ... </h2>
        <p>fill in your newly learned vocab word to help you keep track of them</p>
        </div>

        <div className="inputs">
        <label htmlFor="article">Article:</label>
        <input  onChange={handleArticleChange} type="text" placeholder='article' id='article' />
        </div>

        <div className="inputs">
        <label htmlFor="gender">Gender:</label>
        <input  onChange={handleGenderChange} type="text" placeholder='gender' id='gender' />
        </div>

        <div className="inputs">
        <label htmlFor="vocabWord">Vocab Word:</label>
        <input onChange={handleWordChange} type="text" placeholder='vocab word' id='vocabWord' />
        </div>

        <div className="inputs">
        <label htmlFor="partOfSpeech">Part Of Speech</label>
        <input  onChange={handlePartOfSpeechChange} type="text" placeholder='partOfSpeech' id='partOfSpeech' />
        </div>

        <div className="inputs">
        <label htmlFor="meaning">Meaning:</label>
        <input onChange={handleMeaningChange} type="text" placeholder='meaning' id='meaning' />
        </div>

        <div className="inputs">
        <button type="button" onClick={handleSubmitWord}>submit</button>
        </div>
    </form>
  )
}

export default WordForm