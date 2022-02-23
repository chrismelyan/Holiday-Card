import React, {useState} from 'react';
import Gif from "./Gif";
import './App.css'

const Accordion = () => {
    let [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickGif = () => setCollapsed(!collapsed)

    return (
        <div>
            <button className={'button'} onClick={onClickGif}>А если тяжело сражаться одному</button>
            {!collapsed && <Gif/>}
        </div>
    );
};

export default Accordion;