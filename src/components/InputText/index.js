import { useState } from 'react';
import './input_text.css';

export default function InputText(InputProps){

    const onType = (event) =>{
        InputProps.onChange(event.target.value);
    }

    return(
        <div className='text_input'>
            <label className='default_label'>{InputProps.label}</label>
            {/* dava para usar o placeholder sem estar no formato de strin aq */}
            <input value={InputProps.value} onChange={onType} required={InputProps.required} className='default_input' placeholder={`${InputProps.placeholder}`}/>
        </div>
    )
}