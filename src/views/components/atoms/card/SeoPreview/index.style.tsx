import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
// Utils
import { respondTo } from '@style/gridSystem';

export const Header = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};
  color: ${({ theme }) => theme.color.text[0]};

  display: flex;
  align-items: center;
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 0;
  border-radius: 2px;
  padding-right: 2px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.45s;
  will-change: background-color, color;
  max-width: 100%;
`;

export const LoadingHeader = styled(Header)`
  border-radius: 999px;
  padding-right: 8px;
`;

export const Favicon = styled.div`
  border-radius: 2px;
  overflow: hidden;
  line-height: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  img,
  svg {
    width: 100%;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.text[0]};

  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`;

export const Body = styled(Row)`
  background-color: ${({ theme }) => theme.color.bg[1]};
  color: ${({ theme }) => theme.color.text[2]};

  font-size: 14px;
  border-radius: 4px;
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.45s;
  will-change: box-shadow, color, border;
  box-sizing: border-box;
  border: 1px solid transparent;
  &:hover {
    box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0);
  }
`;

export const Content = styled(Col)`
  overflow: hidden;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  max-height: 120px;
  ${respondTo.md} {
    height: 120px;
  }
`;

export const Description = styled.div`
  margin-bottom: 4px;
  ${respondTo.md} {
    max-height: 3.8rem;
    overflow: hidden;
  }
`;

export const Url = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type styleProps = {
  bg?: string;
};

export const Thumnail = styled.div<styleProps>`
  background-image: ${({ bg }) => `url(${bg})`};

  display: none;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  ${respondTo.sm} {
    display: block;
  }
`;

const SeoPreview = styled.a`
  width: 100%;
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 16px 0;
  position: relative;

  ${Row} {
    margin-left: 0;
    margin-right: 0;
  }
  &:hover {
    ${Header} {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.grayscales.light[0]};
    }
    ${Body} {
      color: ${({ theme }) => theme.color.text[1]};
      border: 1px solid ${({ theme }) => theme.color.text[2]};
    }
  }
`;
export default SeoPreview;
