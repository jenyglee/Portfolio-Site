import React, { useEffect } from "react";
import styled from "styled-components";
import { handleTop } from "./../helper/helper";
import Title from "../components/detailProject/Title";
import MainVisualAvn from "../components/detailProject/anv/MainVisualAvn";
import Accordion from "../components/detailProject/Accodion";
import { header } from "../images";
import DetailHeader from "../components/DetailHeader";

const Wrap = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    @media ${({ theme }) => theme.size1200} {
        max-width: 960px;
    }
    @media ${({ theme }) => theme.size960} {
        max-width: 768px;
    }
    @media ${({ theme }) => theme.size768} {
        max-width: 568px;
    }
    @media ${({ theme }) => theme.size568} {
        max-width: 320px;
    }
`;

const AvnWrap = styled.div`
    width: 100%;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainWrap = styled.main`
    width: 100%;
    padding-top: 260px;
    @media ${({ theme }) => theme.size960} {
        padding-top: 190px;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${({ theme }) => theme.size568} {
        padding-top: 105px;
    }
`;

const DetailAvn = ({ scrollY }) => {
    useEffect(() => {
        handleTop();
    }, []);

    return (
        <Wrap>
            <DetailHeader
                scrollY={scrollY}
                prevLink={`/1/0`}
                prevTitle="Gulp"
                prevImg={header.gulpApp}
                nextLink={`/2/1`}
                nextTitle="Musinsa"
                nextImg={header.musinsa}
            />
            <AvnWrap>
                <MainWrap>
                    <Title
                        number="02"
                        title="AVN/Cluster"
                        titlePoint=""
                        startDate="202108"
                        endDate="202112"
                    />
                    <MainVisualAvn />
                    <Accordion
                        projectNumber="02"
                        number="01"
                        title="Concept"
                        detailNumber="1"
                    />
                    <Accordion
                        projectNumber="02"
                        number="02"
                        title="GUI Design"
                        detailNumber="2"
                    />
                    <Accordion
                        projectNumber="02"
                        number="03"
                        title="Component"
                        detailNumber="3"
                    />
                </MainWrap>
            </AvnWrap>
        </Wrap>
    );
};

export default DetailAvn;
