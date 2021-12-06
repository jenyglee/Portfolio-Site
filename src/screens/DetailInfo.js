import React, { useEffect } from "react";
import styled from "styled-components";
import Career from "../components/detailProject/info/Career";
import MainTitle from "../components/detailProject/info/MainTitle";
import MyInfo from "../components/detailProject/info/MyInfo";

const Wrap = styled.div`
    max-width: 100%;
    padding: 200px 0;
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

const Section = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
`;

const AmbitionTitle = styled.h5`
    width: 20%;
    font-family: "BLUDHAVEN";
    font-size: 34px;
    margin-right: 30px;
`;

const DescriptionWrap = styled.div`
    width: 80%;
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 15px;
    word-break: keep-all;
`;

const Space = styled.span`
    display: inline-block;
    width: 47px;
`;

const DetailInfo = ({ scrollX }) => {
    const descriptionData = [
        "          저는 3년동안 UX/UI 디자이너로 재직활동을 했습니다. 팀 내에서 디자인과 개발 협업을 하다보면 제가 디자인하며 상상했던 것들을 개발자에게 제대로 전달하지 못하거나, 생각보다 많은 고려사항들 때문에 구현이 어려웠던 경우가 종종 있었습니다. 수시로 이런 일이 발생하다 보니 제 지식의 한계로 만족스러운 결과가 나오지 않는 것에 부족함이 느껴졌고 독학으로 개발공부를 시작했습니다.",
        "          뚜렷한 방향 없이 무작정 시작하여 생각보다 많은 시간이 걸렸지만 그만큼 스스로 방법을 터득했던 경험들과, 오랜시간이 걸려도 결국엔 구현에 성공했던 수많은 삽질의 경험들이 저를 더 단단하게 만들어주었다고 생각합니다.아직도 제 수준을 확실히 몰라 회사에서 얼만큼의 퍼포먼스를 내게 될지 장담이 불가능하지만 항상 배움에 메말라있는 자세와, 시작했으면 끝장을 보는 제 성격으로 회사에 큰 기여를 할 수 있도록 빠르게 배우고 성장하겠습니다.",
    ];

    const careerList = [
        {
            id: 0,
            from: 17,
            to: 18,
            company: "미디어포스원",
            title: "EPSON & KT&G 복지재단 &사회공헌 운영디자인",
            detailCareer: [
                "제품 카탈로그 web/mobile UI 제작",
                "EPSON 프로모션 페이지 제작",
                "Main page UI 개선",
                "Blog 컨셉 활동 뉴스레터 제작",
            ],
        },
        {
            id: 1,
            from: 17,
            to: 18,
            company: "게리온",
            title: "자사 브랜드 홈페이지 UI/UX 디자인",
            detailCareer: [
                "노블인베스트먼트 web/mobile UI/UX 제작",
                "크레타 web/mobile UI/UX 제작",
                "한국주식연구소 web/mobile UI/UX 제작",
                "컨설킷 web/mobile UI/UX 제작",
                "사내 운영 디자인건",
            ],
        },
        {
            id: 2,
            from: 17,
            to: 18,
            company: "9px",
            title: "AI 자동차 그래픽 연구원",
            detailCareer: [
                "차세대 자동차 클러스터, avn 그래픽 시안 제작",
                "오픽 솔루션 앱 랜딩페이지 제작",
                "토익 스피킹 앱 랜딩페이지 제작",
            ],
        },
        {
            id: 3,
            from: 17,
            to: 18,
            company: "다름 커뮤니케이션즈",
            title: "SKT Application 영문버전 디자인",
            detailCareer: ["SKT 글로벌 고객 전용 App UI/UX 시안 제작"],
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
            <MainTitle />
            <MyInfo />
            <Section
                style={{
                    marginBottom: 120,
                }}
            >
                <AmbitionTitle>My Ambition</AmbitionTitle>
                <DescriptionWrap>
                    {descriptionData.map((description) => {
                        return (
                            <Description>
                                <Space />
                                {description}
                            </Description>
                        );
                    })}
                </DescriptionWrap>
            </Section>
            <Section>
                {careerList.map((career) => {
                    return <Career career={career} key={career.id} />;
                })}
            </Section>
        </Wrap>
    );
};

export default DetailInfo;
