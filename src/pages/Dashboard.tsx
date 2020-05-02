import React from "react";
import ServiceWrapper from "../components/ServiceWrapper";

import { AiOutlineSelect } from "react-icons/ai";

import {
  AiOutlineDatabase,
  AiOutlineCreditCard,
  AiOutlineCloudServer,
} from "react-icons/ai";

import styled from "@emotion/styled";

import { Link } from "react-router-dom";

import { AgGridReact } from "ag-grid-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import ServiceWrapper2 from "../components/ServiceWrapper2";
import css from "@emotion/css";

const Dashboard: React.FC = () => {
  const data = [
    { name: "오늘", value: 4000 },
    { name: "어제", value: 3000 },
    { name: "3일 전", value: 2000 },
    { name: "4일 전", value: 1223 },
    { name: "5일 전", value: 1890 },
    { name: "6일 전", value: 2390 },
    { name: "7일 전", value: 3490 }
  ];

  const data1 = [
    { name: "5월", value: 4000 },
    { name: "4월", value: 3000 },
    { name: "3월", value: 2000 },
    { name: "2월", value: 1223 },
    { name: "1월", value: 1890 },
    { name: "12월", value: 2390 },
    { name: "11월", value: 3490 }
  ];

  const columnDefs = [
    {
      headerName: "Make",
      field: "make"
    },
    {
      headerName: "Model",
      field: "model"
    },
    {
      headerName: "Price",
      field: "price"
    }
  ];
  const rowData = [
    {
      make: "Toyota",
      model: "Celica",
      price: 35000
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 32000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    }
  ];

  return (
    <ServiceWrapper2>
      <TopCardContainer>
        <TopCard>
          <AiOutlineCloudServer size={50} css={iconCss} color="#7c2ce4"/>
          <TopCardInfo>
            <TopCardHeader>실행중인 인스턴스</TopCardHeader>
            <TopCardValue>2개</TopCardValue>
          </TopCardInfo>
        </TopCard>
        <TopCard>
          <AiOutlineDatabase size={50} css={iconCss} color="#7c2ce4"/>
          <TopCardInfo>
            <TopCardHeader>서버 업타임(지난 일주일)</TopCardHeader>
            <TopCardValue>98%</TopCardValue>
          </TopCardInfo>
        </TopCard>
        <TopCard>
          <AiOutlineCreditCard size={50} css={iconCss} color="#7c2ce4"/>
          <TopCardInfo>
            <TopCardHeader>이번 달 청구 예상 요금</TopCardHeader>
            <TopCardValue>1,280,000원</TopCardValue>
          </TopCardInfo>
        </TopCard>
      </TopCardContainer>
      <DashboardCardContainer>
        <DashboardCardWrap>
          <DashboardCard>
            <CardHeaderWrap>
              <CardHeader>트래픽 통계</CardHeader>
              <CardIcon to="/">
                <AiOutlineSelect size={24} />
              </CardIcon>
            </CardHeaderWrap>
            <CardChartContentWrap>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ left: -40, top: 10, bottom: 10, right: 2 }}
                >
                  <defs>
                    <linearGradient id="pink" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ea6969" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ea6969" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="purple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#b45bff" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#b45bff"
                        stopOpacity={0.0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                  <YAxis tick={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ea6969"
                    fill="url(#pink)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardChartContentWrap>
          </DashboardCard>
        </DashboardCardWrap>
        <DashboardCardWrap>
          <DashboardCard>
            <CardHeaderWrap>
              <CardHeader>지난 6개월 지출 통계</CardHeader>
              <CardIcon to="/">
                <AiOutlineSelect size={24} />
              </CardIcon>
            </CardHeaderWrap>
            <CardChartContentWrap>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data1}
                  margin={{ left: -40, top: 10, bottom: 10, right: 2 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                  <YAxis tick={false} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#b45bff"
                    fill="url(#purple)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardChartContentWrap>
          </DashboardCard>
        </DashboardCardWrap>
        <DashboardCardWrap>
          <DashboardCard>
            <CardHeaderWrap>
              <CardHeader>실행중인 인스턴스</CardHeader>
              <CardIcon to="/">
                <AiOutlineSelect size={24} />
              </CardIcon>
            </CardHeaderWrap>
            <CardContentWrap>
              <GridWrap className="ag-theme-balham">
                <AgGridReact columnDefs={columnDefs} rowData={rowData} />
              </GridWrap>
            </CardContentWrap>
          </DashboardCard>
        </DashboardCardWrap>
        <DashboardCardWrap>
          <DashboardCard>
            <CardHeaderWrap>
              <CardHeader>결제 요청</CardHeader>
              <CardIcon to="/">
                <AiOutlineSelect size={24} />
              </CardIcon>
            </CardHeaderWrap>
            <CardContentWrap>
              <GridWrap className="ag-theme-balham">
                <AgGridReact columnDefs={columnDefs} rowData={rowData} />
              </GridWrap>
            </CardContentWrap>
          </DashboardCard>
        </DashboardCardWrap>
      </DashboardCardContainer>
    </ServiceWrapper2>
  );
};

const TopCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px;
`;

const TopCard = styled.div`
  display: flex;
  width: 32%;
  padding: 30px;
  height: 100%;
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  flex-direction: row;
`;

const TopCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 30px 30px 30px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: repeat(2, calc(50% - 15px));
  grid-template-columns: repeat(2, calc(50% - 15px));
`;

const DashboardCardWrap = styled.div`
  display: flex;
`;

const DashboardCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const CardHeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  // padding: 18px 24px;
  padding: 18px 0;
  align-items: center;
  justify-content: space-between;
`;

const CardContentWrap = styled(CardHeaderWrap)`
  padding: 18px;
  height: 100%;
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const CardChartContentWrap = styled(CardContentWrap)`
  padding: 18px 18px 0 8px;
`;

const CardHeader = styled.p`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
`;

const CardIcon = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const GridWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const TopCardHeader = styled(CardHeader)`
  margin-bottom: 20px;
`;

const TopCardValue = styled(CardHeader)`
  font-weight: 400;
`;

const iconCss = css`
  margin-right: 30px;
`;

export default Dashboard;
