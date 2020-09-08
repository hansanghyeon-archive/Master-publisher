/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LottieWrap = styled.div`
  width: 100%;
  height: 100%;
  svg.cpu-chip path[stroke='rgb(0,0,0)'] {
    stroke: ${({ theme }) => (theme ? theme.color.text[1] : '#333')};
  }
  svg.cpu-chip path[stroke='rgb(241,241,241)'] {
    stroke: ${({ theme }) => (theme ? theme.color.bg[1] : '#333')};
  }
  svg.cpu-chip path[fill='rgb(0,0,0)'] {
    fill: ${({ theme }) => (theme ? theme.color.text[1] : '#333')};
  }
  svg.cpu-chip path[fill='rgb(241,241,241)'] {
    fill: ${({ theme }) => (theme ? theme.color.bg[1] : '#333')};
  }
`;
