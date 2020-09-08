const REACT_TEMPLATE = `
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { darken, lighten } from 'polished';

interface StyledProps {
  bgColor?: string;
}

const Wrap = styled(Container)<StyledProps>${'`'}
  background-color: ${'$'}{props =>
    props.bgColor
      ? ${'`'}${'$'}{
          props.theme.isDark
            ? darken(0.2, props.bgColor)
            : lighten(0.2, props.bgColor)
        }${'`'}
      : ${'`'}${'$'}{props.theme.isDark ? '#2c2c2f' : '#fff'}${'`'}};
  border-radius: 4px;
  word-break: keep-all;
  padding: 2rem;
${'`'};

const ColWrap = styled(Col)${'`'}
  display: flex;
  align-items: center;
${'`'};

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
Callout.defaultProps = {
  icon: '👍',
  children: 'Culpa ullamco sit officia sunt duis et minim sit laboris cupidatat sunt officia eiusmod eiusmod. Sint voluptate nisi adipisicing culpa incididunt magna. Laboris exercitation consequat labore dolore proident laborum duis eiusmod eiusmod dolore in. Eiusmod velit laborum labore laborum officia sint amet ex reprehenderit anim id deserunt reprehenderit incididunt. Excepteur irure fugiat ex proident exercitation veniam incididunt in incididunt ut anim. Laboris laboris nisi sint magna.'
}
`;
export default REACT_TEMPLATE;
