import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const CTA = styled.div`
  padding: 80px 40px;
  margin-top: 0;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  align-items: top;
  padding: 12px 0;
  border-radius: 4px;
  background-color: #0063e5;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.05px;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.div`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
  margin-top: 12px;
`;
export default Login;
