import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { query } from '../apis/fetchImage';
import Loader from './Loader';

const InputPanel = ({inputPrompts, setInputPrompts, setError, inputFieldVisible}) => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)

    const handleClick = ()=> {
        setLoading(true);
        query({ "inputs": inputValue })
            .then((response) => {
                const imageUrl = URL.createObjectURL(response);
                console.log({
                    id: uuidv4(),
                    text: inputValue,
                    image_annotation: inputValue,
                    imageUrl: imageUrl
                });
                setInputPrompts([...inputPrompts, {
                    id: uuidv4(),
                    text: inputValue,
                    image_annotation: inputValue,
                    imageUrl: imageUrl
                }])
                localStorage.setItem("stored", JSON.stringify(inputPrompts))
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Unable to fetch Image!")
                setLoading(false);
            });

        
    }

  return (
    <div className={`input-field ${inputFieldVisible ? 'visible' : ''}`}>
        
        <div className="text-area">
            <p>{inputPrompts.length === 0 ? `You will see your prompts here` : `YOUR PROMPTS`}</p>
            {inputPrompts.map((item, index)=> {
                return <li className='input-prompt' key={item.id}><span>{index+1}</span> {item.text} </li>
            })}
        </div>
        <div className="input">
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" placeholder='Create your first page'/>
            <button disabled={loading} onClick={handleClick}> { loading ? <Loader /> : "Go!" } </button>
        </div>
        
    </div>
  )
}

export default InputPanel