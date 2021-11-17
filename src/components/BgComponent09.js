import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bgImages09 } from "../images";

const ComponentWrap = styled.div`
    position: fixed;
    transition: 0.5s;
    top: ${({ transform }) => `calc(50% + ${transform}px)`};
    transform: translateY(-50%);
`;

const Image = styled.img`
    width: 652px;
    height: 1101px;
`;

const BgComponent09 = ({ isShow }) => {
    const [objTransform01, setObjTransform01] = useState(350);
    const [objOpacity01, setObjOpacity01] = useState(0);

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                setObjTransform01(300);
                setObjOpacity01(1);
            }, 0);
        } else {
            setTimeout(() => {
                setObjTransform01(350);
                setObjOpacity01(0);
            }, 0);
        }
    }, [isShow]);
    return (
        <>
            <ComponentWrap
                style={{
                    opacity: objOpacity01,
                    right: 150,
                }}
                transform={objTransform01}
                isShow={isShow}
            >
                <Image src={bgImages09.Image01} />
            </ComponentWrap>
        </>
    );
};

export default BgComponent09;
