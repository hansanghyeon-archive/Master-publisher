import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ColorPreview from '@atom/wrap/ColorPreview';
import DefaultTheme from '@style/themes/4log';

const GrayscalesColorPreview = styled(ColorPreview)`
  overflow: hidden;
  display: flex;
  height: 60px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
`;
const Container = styled.section`
  margin-bottom: 3rem;
`;
const Row = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Wrap = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const Li = styled.div`
  height: 100%;
  width: 100px;
`;
const Dark1Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.dark[0]};
`;
const Dark2Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.dark[1]};
`;
const Dark3Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.dark[2]};
`;
const Dark4Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.dark[3]};
`;
const Dark5Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.dark[4]};
`;
const Dark6Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.dark[5]};
`;
const Light1Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.light[0]};
`;
const Light2Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.light[1]};
`;
const Light3Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.light[2]};
`;
const Light4Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.light[3]};
`;
const Light5Li = styled(Li)`
  background-color: ${({ theme }) => theme.color.grayscales.light[4]};
`;

const Grayscales = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Container>
      <Row>
        <Wrap>
          <GrayscalesColorPreview>
            <Dark1Li />
            <Dark2Li />
            <Dark3Li />
            <Dark4Li />
            <Dark5Li />
            <Dark6Li />
          </GrayscalesColorPreview>
        </Wrap>
      </Row>
      <Row>Dark</Row>
      <Row>
        <Wrap>
          <GrayscalesColorPreview>
            <Light1Li />
            <Light2Li />
            <Light3Li />
            <Light4Li />
            <Light5Li />
          </GrayscalesColorPreview>
        </Wrap>
      </Row>
      <Row>Light</Row>
    </Container>
  </ThemeProvider>
);

export default Grayscales;
