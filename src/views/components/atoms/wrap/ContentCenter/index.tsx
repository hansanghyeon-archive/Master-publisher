import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import CenterWrap from '@atom/wrap/Center';

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

interface props {
  children: React.ReactNode;
}

const ContentCenterWrap = ({ children }: props) => {
  return (
    <CenterWrap>
      <StyledContainer>
        <Row>
          <Col col>{children}</Col>
        </Row>
      </StyledContainer>
    </CenterWrap>
  );
};

export default ContentCenterWrap;
