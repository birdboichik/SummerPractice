import { useState } from 'react';
import './Input.css'

type InputProps = {
    txt: string;
}

const Input: React.FC<InputProps> = ({ txt }) => {
    const [currentValue, newValue] = useState<string>('')
    return (
        <input type='text' className='inputText' onChange={(change) => { newValue(change.target.value) }} value={currentValue} placeholder={txt} />
    )
}

export default Input;