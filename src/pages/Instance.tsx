import React from "react";
import ServiceWrapper2 from "../components/ServiceWrapper2";

import {
  PageHeader,
  IconWrap,
  HeaderText,
  DescriptionText
} from "../components/PageHeader";

import { AiOutlineCloudServer } from "react-icons/ai";

const Instance: React.FC = () => {
  return (
    <>
      <PageHeader>
        <IconWrap>
          <AiOutlineCloudServer color="white" size={70} />
        </IconWrap>
        <HeaderText>Instance</HeaderText>
        <DescriptionText>
          에이클라우드플랫폼이 제공하는 인스턴스 자동화 시스템입니다. <br />
          에이클라우드플랫폼만의 차별화된 디도스 보안존을 누려보세요.
        </DescriptionText>
      </PageHeader>
    </>
  );
};

export default Instance;
