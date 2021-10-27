import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin';

const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpForm>
        <TitleContainer>
          <img
            src="https://dffoxz5he03rp.cloudfront.net/build/production/d52346d318252364c213ffb92e1aaf65af137436/66066a48489320a05330e36ba701d7e6.png"
            alt="welcome hand"
          />
          <h1>반갑습니다!</h1>
          <h3>여행의 모든 것, 아워코드트립</h3>
        </TitleContainer>
        <KakaoLogin />
        <FooterContainer>
          이미 아이디가 있으신가요? &nbsp;
          <Link to="/signin">로그인</Link>
        </FooterContainer>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
`;

const SignUpForm = styled.div`
  width: 430px;
  height: 400px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  img {
    margin: 55px 0 34px 0;
    width: 56px;
    height: 56px;
  }
  h1 {
    font-size: 28px;
    font-weight: 600;
  }
  h3 {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const FooterContainer = styled.div`
  margin-top: 50px;
  color: gray;
  opacity: 0.7;
  a {
    text-decoration: underline;
  }
`;
