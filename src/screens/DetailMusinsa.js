import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../components/detailProject/Title";
import MainVisualMusinsa from "../components/detailProject/musinsa/MainVisualMusinsa";
import Accordion from "../components/detailProject/Accodion";
import FooterButton from "../components/FooterButton";
import { footer } from "../images";
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

const MusinsaWrap = styled.div`
    width: 100%;
    padding-bottom: 200px;
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

const DetailMusinsa = ({ scrollX, scrollY }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Wrap>
            <DetailHeader scrollY={scrollY} />
            <MusinsaWrap>
                <MainWrap>
                    <Title
                        number="03"
                        title="컨셉디자인 무신사"
                        titlePoint=""
                        startDate="202108"
                        endDate="202112"
                    />
                    <MainVisualMusinsa />
                    <Accordion
                        projectNumber="03"
                        number="01"
                        title="UX/UI Design"
                        detailNumber="1"
                        scrollX={scrollX}
                    />
                    <Accordion
                        projectNumber="03"
                        number="02"
                        title="Component"
                        detailNumber="2"
                        scrollX={scrollX}
                    />
                </MainWrap>
                <FooterButton
                    prevLink={`/2/0`}
                    prevTitle="AVN / Cluster"
                    prevImg={footer.avn}
                    nextLink={`/2/2`}
                    nextTile="KT&G UI/UX"
                    nextImg={footer.ktng}
                />
            </MusinsaWrap>
        </Wrap>
    );
};

export default DetailMusinsa;
