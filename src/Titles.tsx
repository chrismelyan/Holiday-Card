import React from 'react';

type TitlesPropsType = {
    title: string
}

const Titles = (props: TitlesPropsType) => {

    return (
        <span>
         {props.title}
        </span>
    );
};

export default Titles;