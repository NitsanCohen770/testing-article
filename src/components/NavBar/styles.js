import styled from 'styled-components';
import { device } from '../../screenSizes';
export const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 60px;
  align-items: center;
  margin-top: 0;

  > div img {
    display: none;
    @media ${device.tablet} {
      display: none;
    }
  }
  @media ${device.tablet} {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5px;
    height: 70px;
    width: 100%;
  }
  @media ${device.mobileL} {
    display: inline;
    border-bottom: none;
    > li:first-of-type {
      padding-top: 45px;
    }
    > li:last-of-type {
      border-bottom: none;
    }
    li {
      line-height: 65px;
    }
    > div {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-bottom: 17px;
    }

    > div img {
      display: inline;
      float: right;
    }
  }
  div {
    font-family: Antonio;
    font-weight: 400;
    margin-right: auto;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    color: #ffffff;

    @media ${device.tablet} {
      grid-column: span 8;
      grid-row: 1;
      justify-self: center;
      margin: 0 auto;
    }
  }
`;
