import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { darken, lighten } from 'polished';

interface StyledProps {
  bgColor: string | undefined;
}

const Wrap = styled(Container)<StyledProps>`
  background-color: ${({ bgColor, theme }) =>
    bgColor
      ? `${theme.isDark ? darken(0.2, bgColor) : lighten(0.2, bgColor)}`
      : `${theme.isDark ? '#2c2c2f' : '#fff'}`};
  border-radius: 4px;
  word-break: keep-all;
  padding: 2rem;
`;

const ColWrap = styled(Col)`
  display: flex;
  align-items: center;
`;

interface Props extends StyledProps {
  icon: string;
  children: React.ReactNode;
}

const Callout = ({ icon, children, bgColor }: Props) => (
  <Wrap bgColor={bgColor}>
    <Row style={{ margin: 0 }}>
      <span role="img" aria-label="">
        {icon}
      </span>
      <ColWrap col>{children}</ColWrap>
    </Row>
  </Wrap>
);

export default Callout;
