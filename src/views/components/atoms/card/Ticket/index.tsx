import './index.style.scss';
import React, { useEffect } from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { TimelineLite, Power1 } from 'gsap';
import moment from 'moment';

const Body = styled.div`
  background-color: ${({ theme }) => theme.color.bg[1]};
  ${Row} {
    margin-left: 0;
    margin-right: 0;
  }
`;
const Divider = styled.div`
  border: 1px dashed ${({ theme }) => theme.color.text[3]};
`;
const Header = styled(Row)`
  color: ${({ theme }) => theme.color.text[2]};
`;
const Detail = styled.div`
  ${Row} {
    margin-bottom: 16px;
    justify-content: space-between;
  }
`;
const Barcode = styled.div`
  background-color: ${({ theme }) => theme.color.bg[1]};
`;
const CutLine = styled.div`
  &:after {
    box-shadow: 16px 0 0 0 ${({ theme }) => theme.color.bg[1]};
  }
  &:before {
    box-shadow: -16px 0 0 0 ${({ theme }) => theme.color.bg[1]};
  }
`;

const Name = styled.div`
  color: ${({ theme }) => theme.color.primary};
  + div {
    margin-bottom: 8px;
  }
`;

const Label = styled.div`
  color: ${({ theme }) => theme.color.text[2]};
`;

const StyledFa = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
`;
const Perforation = styled.div`
  background-color: ${({ theme }) => theme.color.bg[1]};
  border-color: ${({ theme }) => theme.color.text[3]} !important;
`;
const Ticket = styled.div`
  &:hover {
    ${Perforation} {
      /* border-color: ${({ theme }) => theme.color.primary} !important; */
    }
  }
`;
const Root = styled.div``;

interface Region {
  name: string;
  region: string;
  address: string;
}
interface Detail {
  passenger: string;
  seat: string;
  date: Date;
  time: Date;
  busNumber: string;
  busstop: string;
}
interface TicketType {
  data: {
    start: Region;
    end: Region;
    detail: Detail;
  };
  onClick: () => void;
  isUsed: boolean;
}

interface className {
  name: string;
}

interface THeaderType extends className {
  start: Region;
  end: Region;
}
const THeader = ({ name, start, end }: THeaderType) => (
  <Header className={`${name}-header`}>
    <Col col>
      <Name className="name">{start.name}</Name>
      <div>{start.region}</div>
      <div>{start.address}</div>
    </Col>
    <Col className="col-center" col={1}>
      <StyledFa icon={faLongArrowAltRight} />
    </Col>
    <Col className="col-right" col>
      <Name className="name">{end.name}</Name>
      <div>{end.region}</div>
      <div>{end.address}</div>
    </Col>
  </Header>
);

interface TDetaileType extends className {
  detail: Detail;
}
const TDetail = ({ name, detail }: TDetaileType) => {
  const { passenger, seat, date, time, busNumber, busstop } = detail;
  return (
    <Detail className={`${name}-detail`}>
      <Row>
        <Col className="col-left" auto>
          <Label className="label">Passenger</Label>
          <div>{passenger}</div>
        </Col>
        <Col className="col-right" auto>
          <Label className="label">Seat</Label>
          <div>{seat}</div>
        </Col>
      </Row>
      <Row>
        <Col className="col-left" auto>
          <Label className="label">Date</Label>
          <div>{moment(date).format('DD MMM YYYY')}</div>
        </Col>
        <Col className="col-right" auto>
          <Label className="label">Time</Label>
          <div>{moment(time).format('hh:mm')}</div>
        </Col>
      </Row>
      <Row>
        <Col className="col-left" auto>
          <Label className="label">Bus number</Label>
          <div>{busNumber}</div>
        </Col>
        <Col className="col-right" auto>
          <Label className="label">Bus stop</Label>
          <div>{busstop}</div>
        </Col>
      </Row>
    </Detail>
  );
};

const TicketCard = ({ data, onClick, isUsed }: TicketType) => {
  const { start, end, detail } = data;
  const name = 'ticketCard';
  useEffect(() => {
    const tl = new TimelineLite();
    const target = `.${name} .ticket`;
    if (isUsed) {
      tl.to([target], 0.45, {
        ease: Power1.easeOut,
        transform: 'rotate(-10deg)',
      })
        .to([target], 0.45, {
          ease: Power1.easeIn,
          transform: 'translateY(100px) rotate(0deg)',
        })
        .to([target], 0.45, {
          ease: Power1.easeInOut,
          opacity: '0',
        })
        .to([target], 0.4, {
          ease: Power1.easeIn,
          height: 0,
        });
    } else {
      tl.to([target], 0.25, {
        style: null,
      });
    }
  });
  return (
    <Root className={name}>
      <div className={`${name}-wrap`}>
        <div>
          <Body className={`${name}-body`}>
            <THeader name={name} start={start} end={end} />
            <Divider className={`${name}-divider`} />
            <TDetail name={name} detail={detail} />
          </Body>
          <CutLine className={`${name}-cutline top`}>
            <Perforation className="perforation" />
          </CutLine>
        </div>
        <Ticket className={`ticket ${isUsed ? 'used' : ''}`} onClick={onClick}>
          <CutLine className={`${name}-cutline bottom`}>
            <Perforation className="perforation" />
          </CutLine>
          <Barcode className={`${name}-barcode`}>
            <img src="/barcode.png" alt="" />
          </Barcode>
        </Ticket>
      </div>
    </Root>
  );
};

export default TicketCard;
