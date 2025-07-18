import {ChangeEvent} from 'react';
import {useState} from 'react';

type InputPropsType = {
    currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
    setCurrentText: (text: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {

    const [text, setText] = useState('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // НУЖНО ДОПИСАТЬ
        props.setCurrentText(event.currentTarget.value);
    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
    );
};
