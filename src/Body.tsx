import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Card from "./Card";

const Body = () => {
    let [name, setName] = useState<string>('')
    let [user, setUser] = useState<string>('')
    let [error, setError] = useState<boolean>(false)
    let [collapsed, setCollapsed] = useState<boolean>(true)

    const errorMessage = 'ты уверен, что это имя?'

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error ? setError(false) : setName(e.currentTarget.value)
    }

    const addName = (name: string) => {
        if (name.trim()) {
            setUser(name)
            setCollapsed(!collapsed)
        } else {
            setError(true)
        }
        setName('')
    }

    const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addName(name)
    }


    return (
        <div className={'name-container'}>
            <div className={'greeting'}>Как тебя зовут, самурай?</div>
            <div>
                <input
                    className={'name-input'}
                    type={'text'}
                    value={name}
                    onChange={onChangeHandler}
                    onKeyPress={pressEnter}
                />
            </div>
            {error ? errorMessage : ''}
            <div>
                <button className={'name-button'} onClick={() => addName(name)}>GO</button>
                {!collapsed && <Card user={user}/>}
            </div>
        </div>
    );
};


export default Body;