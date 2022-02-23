import React, {ChangeEvent, useState} from 'react';
import Star from "./Star";
import Accordion from "./Accordion";

type CardType = {
 user: string
}

export type ValueType = 0 | 1 | 2 | 3 | 4

const Card = (props: CardType) => {
    let [value, setValue] = useState<ValueType>(0)

 return (
     <div className={'card'}>
         <h2>Уважаемый, {props.user}-сан!</h2>
         <h4 style={{color: 'darkred'}}>
             Поздравляю Вас с прошедшим 23 февраля!
         </h4>
         <div style={{padding: '8px', color: 'darkblue'}}>
             Мир не видел еще такого
         </div>
         <div>
             <Star value={1} selected={value > 0} setValue={setValue} title={'сильного'}/>
             <Star value={2} selected={value > 1} setValue={setValue} title={'умного'}/>
             <Star value={3} selected={value > 2} setValue={setValue} title={'смелого'}/>
             <Star value={4} selected={value > 3} setValue={setValue} title={'целеустремленного'}/>
         </div>
         <div style={{padding: '10px', color: 'darkblue'}}>
             <b>самурая как ты!</b>
         </div>
         <Accordion />
     </div>
 )
}

export default Card;