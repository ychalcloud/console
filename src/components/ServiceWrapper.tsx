import React from "react";
import styled from "@emotion/styled";

import {
  AiOutlineAppstore,
  AiOutlineCreditCard,
  AiOutlineCloudServer,
  AiOutlineUser
} from "react-icons/ai";

import Logo from "../assets/re-logo-symbol.svg";
import { NavLink } from "react-router-dom";

import Footer from "./Footer";
import css from "@emotion/css";

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <MenuContainer>
          <LogoWrap>
            <LogoImg src={Logo} />
          </LogoWrap>
          <ProfileWrap>
            <ProfileImg src="https://picsum.photos/500/500" />
            <ProfileInfoWrap>
              <ProfileName>이승민</ProfileName>
              <ProfileInfo>lee@seungmin.io</ProfileInfo>
            </ProfileInfoWrap>
          </ProfileWrap>
          <MenuWrap>
            <Menu to="/dashboard" activeClassName="service-wrapper-active-menu">
              <AiOutlineAppstore size={25} css={MenuIcon} />
              <MenuLabel>Dashboard</MenuLabel>
            </Menu>
            <Menu to="/instance" activeClassName="service-wrapper-active-menu">
              <AiOutlineCloudServer size={25} css={MenuIcon} />
              <MenuLabel>Instance</MenuLabel>
            </Menu>
            <Menu to="/billing" activeClassName="service-wrapper-active-menu">
              <AiOutlineCreditCard size={25} css={MenuIcon} />
              <MenuLabel>Billing</MenuLabel>
            </Menu>
            <Menu to="/auth/info" activeClassName="service-wrapper-active-menu">
              <AiOutlineUser size={25} css={MenuIcon} />
              <MenuLabel>My Info</MenuLabel>
            </Menu>
          </MenuWrap>
        </MenuContainer>
        <Body>{children}</Body>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: calc(100% - 40px);
  // overflow: hidden;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #cccccc;
`;

const LogoWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 50%;
  margin: auto;
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
`;

const Menu = styled(NavLink)`
  display: flex;
  align-items: center;
  background: transparent;
  width: 100%;
  padding: 11px 20px;
  color: inherit;
  text-decoration: none;
  box-sizing: border-box;
  position: relative;
  &: after {
    content: "";
    display: block;
    width: 5px;
    height: 100%;
    background-color: #ea6969;
    position: absolute;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s;
  }
  &: hover {
    &: after {
      opacity: 1;
    }
  }
`;

const MenuLabel = styled.span`
  font-size: 16px;
  margin-left: 16px;
  z-index: 100;
`;

const MenuIcon = css`
  z-index: 100;
`;

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: 100%;
  justify-content: space-around;
`;

const ProfileInfo = styled.span`
  font-weight: 300;
`;

const ProfileName = styled(ProfileInfo)`
  font-weight: 400;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f0f0f0;
`;

const BottomMenu = styled.a`
  font-size: 14px;
  font-weight: 300;
  padding: 0 10px;
  &: first-of-type {
    margin-left: 10px;
  }
`;


export default ServiceWrapper;
