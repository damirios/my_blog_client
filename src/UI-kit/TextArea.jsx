import { useEffect } from "react";
import { useState, useRef } from "react"

export function TextArea({className, name, placeholder}) {

    const [text, setText] = useState('');
    const textAreaRef = useRef(null);

    const resizeTextarea = () => {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }

    useEffect(resizeTextarea, [text]);

    function handleChange(e) {
        setText(e.target.value);
    }

return <textarea ref={textAreaRef} value={text} onChange={handleChange} placeholder={placeholder} name={name} className={className}>

    </textarea>
}