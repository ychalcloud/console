import React from "react";
import styled from "@emotion/styled";

import {
  AiFillAppstore,
  AiFillCreditCard,
  AiFillCloud,
  FaUser,
  MdCall,
  FiChevronDown
} from "react-icons/all";

import Logo from "../assets/logo-one-color.svg";
import { NavLink } from "react-router-dom";

import Footer from "./Footer";
import css from "@emotion/css";

const ServiceWrapper2: React.FC = ({ children }) => {
  return (
    <>
      <MenuContainer>
        <LogoContentWrap>
          <LogoWrap>
            <LogoImg src={Logo} />
          </LogoWrap>
        </LogoContentWrap>
        <MenuContentWithoutPadding>
          <MenuButton>
            <span>Customer Center</span> <MdCall size={25} />
          </MenuButton>
        </MenuContentWithoutPadding>
        <MenuContentsWrap>
          <Menu
            to="/main/dashboard"
            activeClassName="service-wrapper-active-menu"
          >
            <AiFillAppstore size={25} css={MenuIcon} />
            <MenuLabel>Dashboard</MenuLabel>
          </Menu>
        </MenuContentsWrap>
        <MenuContentsWrap>
          <Menu
            to="/main/instance"
            activeClassName="service-wrapper-active-menu"
          >
            <AiFillCloud size={25} css={MenuIcon} />
            <MenuLabel>Instance</MenuLabel>
          </Menu>
        </MenuContentsWrap>
        <MenuContentsWrap>
          <Menu
            to="/main/billing"
            activeClassName="service-wrapper-active-menu"
          >
            <AiFillCreditCard size={25} css={MenuIcon} />
            <MenuLabel>Billing</MenuLabel>
          </Menu>
        </MenuContentsWrap>
        <MenuContentsWrap>
          <Menu
            to="/auth/info"
            activeClassName="service-wrapper-active-menu"
          >
            <FaUser size={25} css={MenuIcon} />
            <MenuLabel>My Info</MenuLabel>
          </Menu>
        </MenuContentsWrap>
        <BottomMenuWrap>
          <BottomMenu>이용 약관</BottomMenu>
          <BottomMenu>개인 정보 처리 방침</BottomMenu>
          <br />
          <BottomMenu>ⓒ A Cloud Platform. All rights reserved.</BottomMenu>
        </BottomMenuWrap>
      </MenuContainer>
      <BodyContainer>
        <Body>
          {/*<Header>*/}
          {/*  <HeaderContentWrap>*/}
          {/*    <ProfileWrap>*/}
          {/*      <ProfileImg src="https://picsum.photos/500/500" />*/}
          {/*      <ProfileInfoWrap>*/}
          {/*        <ProfileName>이승민</ProfileName>*/}
          {/*        <ProfileInfo>lee@seungmin.io</ProfileInfo>*/}
          {/*      </ProfileInfoWrap>*/}
          {/*      <FiChevronDown size={20} color="#72798B" />*/}
          {/*    </ProfileWrap>*/}
          {/*  </HeaderContentWrap>*/}
          {/*</Header>*/}
          {children}
        </Body>
      </BodyContainer>
    </>
  );
};

const Header = styled.div`
  display: flex;
  height: 100px;
  background-color: white;
  justify-content: flex-end;
`;

const HeaderContentWrap = styled.div`
  display: flex;
  width: 300px;
`;

const LogoContentWrap = styled(HeaderContentWrap)``;

const LogoWrap = styled.div`
  display: flex;
  width: 260px;
  justify-content: center;
  margin: auto;
`;

const LogoImg = styled.img`
  width: 70%;
  height: fit-content;
`;

const MenuContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 300px;
  height: 100%;
  align-items: center;
  background-color: white;
  z-index: 300;
  border-right: 1px solid #f5f6fa;
`;

const MenuContentsWrap = styled.div`
  display: flex;
  width: 260px;
  padding: 20px;
`;

const MenuContentWithoutPadding = styled(MenuContentsWrap)`
  padding: 20px 0;
`;

const Menu = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #8c92a7;
  text-decoration: none;
  box-sizing: border-box;
  position: relative;
  // &: after {
  //   content: "";
  //   display: block;
  //   width: 5px;
  //   height: 100%;
  //   background-color: #ea6969;
  //   position: absolute;
  //   right: 0;
  //   opacity: 0;
  //   transition: opacity 0.2s;
  // }
  &: hover {
    &: after {
      opacity: 1;
    }
  }
`;

const MenuLabel = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-left: 30px;
  z-index: 100;
  .service-wrapper-active-menu > & {
    color: #333;
  }
`;

const MenuIcon = css`
  z-index: 100;
  .service-wrapper-active-menu > & {
    color: #7c2ce4;
  }
`;

const MenuButton = styled.button`
  width: 100%;
  border: 0;
  margin: 0;
  outline: 0;
  display: flex;
  padding: 14px 25px;
  background-color: #7c2ce4;
  font-size: 16px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  border-radius: 8px;
  justify-content: space-between;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  width: calc(100% - 300px);
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: 100%;
  margin-left: 300px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  min-height: 100vh;
`;

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 29px;
`;

const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  height: 100%;
  justify-content: space-around;
`;

const ProfileInfo = styled.span`
  font-weight: 300;
`;

const ProfileName = styled(ProfileInfo)`
  font-weight: 400;
`;

const BottomMenuWrap = styled.div`
  margin-top: auto;
  padding: 20px;
`;

const BottomMenu = styled.a`
  color: #494c56;
  font-size: 14px;
  font-weight: 300;
  line-height: 2;
  &: first-of-type {
    margin-right: 10px;
  }
`;

export default ServiceWrapper2;
