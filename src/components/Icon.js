import React from 'react';
import padlock from '../img/padlock.png'
import styled from 'styled-components';


const ImgIcon = styled.img`
    width: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px
`;

const Icon = () => {
    return (
        <div>
            <ImgIcon
                alt=''
                src={padlock}

            ></ImgIcon>
        </div>
    );
};

export default Icon;