import styled from 'styled-components';

export const Img = styled.img`
  max-width: 32px;
`;

export const Wrap = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.bg[1]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 1px inset;
  margin-top: 0.8rem;
  position: relative;
  width: 100%;
`;

export const Header = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ toggle }) => toggle && 'margin-bottom: 1rem'};
`;
export const Title = styled.div`
  font-weight: bold;
`;

export const Body = styled.div<{ toggle: boolean }>`
  ${({ toggle }) => toggle && 'display: none'};
`;
export const Ol = styled.ol`
  list-style-type: none;
  padding-left: 0;
  counter-reset: item 0;
`;
export const Li = styled.li`
  &:before {
    content: counter(item) '. ';
    counter-increment: item 1;
    opacity: 0.5;
    font-style: italic;
    margin-right: 0.25rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  span {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;
export const Controller = styled.div`
  display: flex;
`;
export const MoreBtn = styled.button`
  color: inherit;
  background-color: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
`;
export const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.bg[0]};
  border-radius: 999px;
  font-size: 0.6rem;
  width: 18px;
  height: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px 1px;
  margin: 0 0.25rem;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.bg[0]};
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
