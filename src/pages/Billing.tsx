import React from "react";
import ServiceWrapper from "../components/ServiceWrapper";

import {
  PageHeader,
  IconWrap,
  HeaderText,
  DescriptionText
} from "../components/PageHeader";
import { AiOutlineCreditCard } from "react-icons/ai";
import styled from "@emotion/styled";

const Billing: React.FC = () => {
  return (
    <ServiceWrapper>
      <PageHeader>
        <IconWrap>
          <AiOutlineCreditCard color="white" size={70} />
        </IconWrap>
        <HeaderText>Billing</HeaderText>
        <DescriptionText>
          에이클라우드 청구 시스템입니다. <br />
          자동결제 예정인 신용(체크)카드 정보를 확인할 수 있으며, 이전의 영수증
          또한 확인 가능합니다.
        </DescriptionText>
      </PageHeader>
      <PageContent></PageContent>
    </ServiceWrapper>
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