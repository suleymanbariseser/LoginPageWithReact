import styled from "styled-components";

const LoginWrapper = styled.div`
  background: url(https://s3.invisionapp-cdn.com/storage.invisionapp.com/backgrounds/269251.jpg?x-amz-meta-iv=1&response-cache-control=max-age%3D2419200&x-amz-meta-ck=c8973aa2a9a8f8f185cc57604a15be1e&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1617235200&Signature=BUuogwwCf0ky7wqQgE1FZLSMhHs%3D);
`;
const LoginInnerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  .margin-both {
    margin: 2rem 0;
  }
  .centered {
    text-align: center;
  }
  .spaced {
    margin-top: 3rem;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
  }
  .soft {
    color: rgba(0, 0, 0, 0.7);
    font-size: 10px;
    line-height: 20px;
    margin-top: 2rem;
  }
  a {
    color: #286efa;
    text-decoration: none;
    font-weight: 700;
  }
  .col {
    min-height: 100vh;
    display: flex;
    align-items: center;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 992px) {
    .is-hidden-touch {
      display: none;
    }
  }
`;
export { LoginWrapper, LoginInnerWrapper };
