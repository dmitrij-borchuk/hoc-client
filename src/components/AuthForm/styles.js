import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding: 50px 0;
  width: 300px;
`;

export const Header = styled.div`
  padding: 20px;
  background-color: #19aa8d;
  color: #fff;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const ContentContainer = styled.div`
  position: relative;
`;

export const SubmitBtn = styled.div`
  margin-top: 15px;
`;

export const BottomLink = styled.div`
  margin-top: 10px;
  text-align: right;
`;

export const GoogleBtn = styled.div`
  text-align: center;
  background: rgb(209, 72, 54);
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 2px;
  border: 1px solid transparent;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
`;

const SEPARATOR_HEIGHT = 2;
export const HorizontalSeparator = styled.div`
  background: #999;
  height: ${SEPARATOR_HEIGHT}px;
  margin: 15px 10px;
  text-align: center;
  line-height: 0px;
`;

export const SeparatorText = styled.div`
  display: inline-block;
  background: #fff;
  height: ${SEPARATOR_HEIGHT}px;
  padding: 0 5px;
`;
