import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { query } from '../apis/fetchImage';
import Loader from './Loader';

const InputPanel = ({inputPrompts, setInputPrompts, setError}) => {
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
                    imageUrl: imageUrl
                });
                setInputPrompts([...inputPrompts, {
                    id: uuidv4(),
                    text: inputValue,
                    imageUrl: imageUrl
                }])
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Unable to fetch Image!")
                setLoading(false);
            });

        
    }

  return (
    <div className='input-field'>
        <div className="text-area">
            <h4>Your comic prompts will appear here</h4>
            {inputPrompts.map((item, index)=> {
                return <li key={item.id}> {index+1}: {item.text} </li>
            })}
        </div>
        <div className="input">
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} type="text" />
            <button disabled={loading} onClick={handleClick}> { loading ? <Loader /> : "GO!" } </button>
        </div>
    </div>
  )
}

export default InputPanel