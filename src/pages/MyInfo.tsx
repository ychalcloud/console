import React from "react";
import ServiceWrapper2 from "../components/ServiceWrapper";

import {
  PageHeader,
  IconWrap,
  HeaderText,
  DescriptionText
} from "../components/PageHeader";

import { AiOutlineUser } from "react-icons/ai";

const MyInfo: React.FC = () => {
  return (
    <>
      <PageHeader>
        <IconWrap>
          <AiOutlineUser color="white" size={70} />
        </IconWrap>
        <HeaderText>My Info</HeaderText>
        <DescriptionText>
          에이클라우드플랫폼에 안전하게 저장되어 있는 고객님의 정보입니다.
          <br />
          정보 확인 혹은 변경 중 생기는 문제는 카카오톡 플러스친구 @에이클라우드플랫폼 으로 연락주세요.
        </DescriptionText>
      </PageHeader>
    </>
  );
};

export default MyInfo;
