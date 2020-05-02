import React from "react";
import ServiceWrapper from "../components/ServiceWrapper";

import {
  PageHeader,
  IconWrap,
  HeaderText,
  DescriptionText
} from "../components/PageHeader";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Redirect } from "react-router";

const Root: React.FC = () => {
  return (
    <ServiceWrapper>
      <PageHeader>
        <HeaderText>MAINPAGE</HeaderText>
      </PageHeader>
      <Redirect to="/billing" />
    </ServiceWrapper>
  );
};

export default Root;
