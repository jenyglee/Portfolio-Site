import React, { useEffect } from "react";
import styled from "styled-components";
import MainTitle from "../components/detailProject/ability/MainTitle";
import Ability from "../components/detailProject/ability/Ability";
import FooterButton from "../components/FooterButton";
import DetailHeader from "../components/DetailHeader";
import { footer } from "../images";

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

const AbilityWrap = styled.div`
    width: 100%;
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${({ theme }) => theme.size1200} {
        padding: 130px 0;
    }
    @media ${({ theme }) => theme.size960} {
        padding: 120px 0;
    }
    @media ${({ theme }) => theme.size768} {
        padding: 110px 0;
    }
    @media ${({ theme }) => theme.size568} {
        padding: 104px 0;
    }
`;

const Section = styled.section`
    width: 100%;
`;

const Abilities = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;

    flex-flow: row wrap;
    @media ${({ theme }) => theme.size960} {
        /* justify-content: center; */
    }
    @media ${({ theme }) => theme.size768} {
        flex-flow: row nowrap;
        /* justify-content: center; */
    }
`;

const DetailAbility = ({ scrollX, scrollY }) => {
    const titleData = [
        "REACT NATIVE",
        "ASYNC STORAGE",
        "USECONTEXT",
        "LIFE CYCLE",
        "STACK",
        "BOTTOM TABS",
        "NAVIGATION",
        "AXIOS",
        "REDUX",
        "REDUX THUNK",
        "MOB X",
        "FIREBASE",
        "DATA HANDLING",
    ];

    const abilityData = [
        {
            id: 0,
            name: "React Native",
            gauge: 80,
        },
        {
            id: 1,
            name: "React",
            gauge: 70,
        },
        {
            id: 2,
            name: "MySQL",
            gauge: 40,
        },
        {
            id: 0,
            name: "Axios/Fetch API",
            gauge: 50,
        },
        {
            id: 1,
            name: "Redux",
            gauge: 50,
        },
        {
            id: 2,
            name: "Firebase",
            gauge: 60,
        },
        {
            id: 0,
            name: "Git",
            gauge: 40,
        },
        {
            id: 1,
            name: "HTML/CSS",
            gauge: 90,
        },
        {
            id: 2,
            name: "Figma",
            gauge: 80,
        },
        {
            id: 0,
            name: "PhotoShop",
            gauge: 100,
        },
        {
            id: 1,
            name: "Illustrator",
            gauge: 100,
        },
    ];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Wrap>
            <DetailHeader scrollY={scrollY} />
            <AbilityWrap>
                <Section
                    style={{
                        marginBottom: 132,
                    }}
                >
                    <MainTitle titleData={titleData} />
                </Section>
                <Section>
                    <Abilities>
                        {abilityData.map((ability) => {
                            return (
                                <Ability ability={ability} scrollY={scrollY} />
                            );
                        })}
                    </Abilities>
                </Section>
                <FooterButton
                    prevLink={`/0/0`}
                    prevTitle="Info"
                    prevImg={footer.info}
                    nextLink={`/0/2`}
                    nextTile="Github"
                    nextImg={footer.github}
                />
            </AbilityWrap>
        </Wrap>
    );
};

export default DetailAbility;