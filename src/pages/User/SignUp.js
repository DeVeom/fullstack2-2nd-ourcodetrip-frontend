import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/userHook';

const SignUp = () => {
  const history = useHistory();
  const { login } = useUser();

  const KakaoLoginHandler = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname,profile_image,account_email',
      success: authObj => {
        const bearer = 'Bearer' + ' ' + authObj.access_token;
        fetch('http://localhost:8001/users/auth/kakao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: bearer,
          },
        })
          .then(res => {
            return res.json();
          })
          .then(info => {
            if (info.message === 'success') {
              login({ userinfo: info.data.name });
              alert(`${info.data.name}님 환영합니다.`);
            } else {
              alert('다시 시도해주세요');
            }
          });
      },
      fail: err => {
        alert(JSON.stringify(err));
      },
    });
  };
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
        <KakaoLogin
          onClick={() => {
            KakaoLoginHandler();
            history.push('/');
          }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMzODFFMUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgNEM1LjY4NiA0IDMgNi4xMjQgMyA4Ljc0M2MwIDEuNzA1IDEuMTM4IDMuMiAyLjg0NiA0LjAzNi0uMTI1LjQ2OC0uNDU0IDEuNjk3LS41MiAxLjk2LS4wODEuMzI2LjEyLjMyMi4yNTEuMjM0LjEwNC0uMDY4IDEuNjQ0LTEuMTE2IDIuMzEtMS41NjguMzYuMDUzLjczMi4wODIgMS4xMTMuMDgyIDMuMzE0IDAgNi0yLjEyNCA2LTQuNzQ0QzE1IDYuMTIzIDEyLjMxNCA0IDkgNCIvPgo8L3N2Zz4KCg=="
            alt="kakao logo"
          />
          카카오로 바로 시작
        </KakaoLogin>
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

const KakaoLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0 0 55px;
  height: 48px;
  width: 332px;
  background-color: #fee500;
  font-weight: 600;
  font-size: 16px;
  border: none;

  img {
    margin-right: 7px;
    height: 18px;
    width: 18px;
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
