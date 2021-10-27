import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin';

const SignIn = () => {
  return (
    <SignInWrapper>
      <SignInForm>
        <TitleContainer>
          <img
            src="https://dffoxz5he03rp.cloudfront.net/build/production/d52346d318252364c213ffb92e1aaf65af137436/66066a48489320a05330e36ba701d7e6.png"
            alt="welcome hand"
          />
          <h1>Welcome!</h1>
          <h3>여행의 모든 것, 아워코드트립</h3>
        </TitleContainer>
        <KakaoLogin />
        <FooterContainer>
          아직 회원이 아니신가요? &nbsp;
          <Link to="/signup">회원가입</Link>
        </FooterContainer>
      </SignInForm>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
`;

const SignInForm = styled.div`
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
