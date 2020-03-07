import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { darken, lighten } from 'polished';

interface StyledProps {
  bgColor?: string;
}

// NOTE
// "Callout은 MDX에서 사용하기때문에 렌더링할때 props에서 theme 값을 가져올 수 없다."
const Wrap = styled(Container)<StyledProps>`
  background-color: ${props =>
    props.bgColor
      ? `${
          props.theme.isDark
            ? darken(0.2, props.bgColor)
            : lighten(0.2, props.bgColor)
        }`
      : `${props.theme.isDark ? '#2c2c2f' : '#fff'}`};
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
