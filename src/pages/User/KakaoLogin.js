import React from 'react';
import styled from 'styled-components';

const KakaoLogin = props => {
  const KakaoLoginHandler = () => {
    window.Kakao.Auth.login({
      scope: 'account_email, gender',
      success: authObj => {
        //authObj 객체에서 카카오로부터 받은 access_token이 확인가능
        console.log(authObj);
        console.log('정상적으로 로그인 되었습니다', authObj);
        fetch('/', {
          method: 'POST',
          //Authorization 헤더는 인증 토큰을 서버로 보낼 때 사용하는 헤더
          // 카카오로부터 받은 access_token을 header로 전달한다.
          headers: {
            Authorization: authObj.access_token,
          },
        }).then(res => {
          console.log(res); // 백엔드로부터 받은 토큰 확인
          localStorage.setItem('token', res.data.access_token); // token이라는 key값으로 받은 access_token을 localStorage에 저장
          props.history.push('/');
        });
      },
      fail: err => {
        alert(JSON.stringify(err));
      },
    });
  };

  const KakaoLogoutHandler = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Api.request({
        url: '/v1/user/unlink',
        success: res => {
          console.log(res);
        },
        fail: err => {
          console.log(err);
        },
      });
    } else {
      console.log('Not logged in');
    }
  };

  return (
    <>
      <KakaoLoginButton onClick={KakaoLoginHandler}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMzODFFMUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgNEM1LjY4NiA0IDMgNi4xMjQgMyA4Ljc0M2MwIDEuNzA1IDEuMTM4IDMuMiAyLjg0NiA0LjAzNi0uMTI1LjQ2OC0uNDU0IDEuNjk3LS41MiAxLjk2LS4wODEuMzI2LjEyLjMyMi4yNTEuMjM0LjEwNC0uMDY4IDEuNjQ0LTEuMTE2IDIuMzEtMS41NjguMzYuMDUzLjczMi4wODIgMS4xMTMuMDgyIDMuMzE0IDAgNi0yLjEyNCA2LTQuNzQ0QzE1IDYuMTIzIDEyLjMxNCA0IDkgNCIvPgo8L3N2Zz4KCg=="
          alt="kakao logo"
        />
        카카오로 바로 시작
      </KakaoLoginButton>
      <KakaoLogoutButton onClick={KakaoLogoutHandler} />
    </>
  );
};

export default KakaoLogin;

const KakaoLoginButton = styled.button`
  img {
    margin-right: 7px;
    height: 18px;
    width: 18px;
  }
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
`;

const KakaoLogoutButton = styled.button``;
