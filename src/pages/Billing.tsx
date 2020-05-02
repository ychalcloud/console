import React from "react";
import ServiceWrapper2 from "../components/ServiceWrapper2";

import {
  PageHeader,
  IconWrap,
  HeaderText,
  DescriptionText, DescriptionHeaderText
} from "../components/PageHeader";
import { AiOutlineCreditCard } from "react-icons/ai";
import styled from "@emotion/styled";

const Billing: React.FC = () => {
  return (
    <>
      <PageHeader>
        <IconWrap>
          <AiOutlineCreditCard color="black" size={50} />
        </IconWrap>
        <HeaderText>Billing</HeaderText>
        <DescriptionHeaderText>
          빠르게 생성하여 원하는 분야에 효율적으로 활용하는 서버
        </DescriptionHeaderText>
        <DescriptionText>
          에이클라우드 청구 시스템입니다. <br />
          자동결제 예정인 신용(체크)카드 정보를 확인할 수 있으며, 이전의 영수증
          또한 확인 가능합니다.
        </DescriptionText>
      </PageHeader>
      <PageContent></PageContent>
    </>
  );
};

const PageContent = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
  padding: 20px;
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-di
`;

export default Billing;
