import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  faInfoCircle,
  faExclamationTriangle,
  faThumbsUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

//
import Tada from '@animation/fontawesome/Tada';
import Pulse from '@animation/fontawesome/Pulse';
import Flash from '@animation/fontawesome/Flash';
import Wrench from '@animation/fontawesome/Wrench';
import Bounce from '@animation/fontawesome/Bounce';
import Blink from '@animation/Blink';

interface ReactType {
  children?: React.ReactNode;
}

const AlertBox = styled.div`
  position: relative;
  padding: 0.75em 1.25em;
  padding-right: 4em;
  border-radius: 0.25em;
  border: 1px solid;
  display: flex;
  align-items: center;
  color: #fff;
  line-height: 1;
  &:after {
    content: '';
    position: absolute;
    height: 1em;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    border-left: 1px solid;
    border-right: 2px solid;
    border-color: inherit;
    border-radius: 0 3px 3px 0;
  }
`;
const Title = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;
const AlertSucess = styled(AlertBox)`
  border-color: #0ad406;
  color: #0ad406;
`;
const AlertInfo = styled(AlertBox)`
  border-color: #0396ff;
  color: #0396ff;
`;
const AlertWarning = styled(AlertBox)`
  border-color: #ffb103;
  color: #ffb103;
`;
const AlertDanger = styled(AlertBox)`
  border-color: #ff0303;
  color: #ff0303;
`;
const AlertPrimary = styled(AlertBox)`
  border-color: #03d0ff;
  color: #03d0ff;
`;

const InnerWrap = styled.div`
  display: flex;
  align-items: center;
`;
const IconWrap = styled.div`
  margin-right: 8px;
`;
const TimesWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  color: inherit;
`;

export const Sucess = ({ children }: ReactType) => (
  <AlertSucess>
    <IconWrap>
      <Tada>
        <FontAwesomeIcon icon={faCheckCircle} />
      </Tada>
    </IconWrap>
    <InnerWrap>
      <Title>Well done!</Title>
      {children}
    </InnerWrap>
    <TimesWrap>
      <Blink>
        <FontAwesomeIcon icon={faTimes} />
      </Blink>
    </TimesWrap>
  </AlertSucess>
);

export const Info = ({ children }: ReactType) => (
  <AlertInfo>
    <IconWrap>
      <Wrench>
        <FontAwesomeIcon icon={faInfoCircle} />
      </Wrench>
    </IconWrap>
    <InnerWrap>
      <Title>Heads up!</Title>
      {children}
    </InnerWrap>
    <TimesWrap>
      <Blink>
        <FontAwesomeIcon icon={faTimes} />
      </Blink>
    </TimesWrap>
  </AlertInfo>
);

export const Warning = ({ children }: ReactType) => (
  <AlertWarning>
    <IconWrap>
      <Flash>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </Flash>
    </IconWrap>
    <InnerWrap>
      <Title>Warning!</Title>
      {children}
    </InnerWrap>
    <TimesWrap>
      <Blink>
        <FontAwesomeIcon icon={faTimes} />
      </Blink>
    </TimesWrap>
  </AlertWarning>
);

export const Danger = ({ children }: ReactType) => (
  <AlertDanger>
    <IconWrap>
      <Pulse>
        <FontAwesomeIcon icon={faTimesCircle} />
      </Pulse>
    </IconWrap>
    <InnerWrap>
      <Title>Oh snap!</Title>
      {children}
    </InnerWrap>
    <TimesWrap>
      <Blink>
        <FontAwesomeIcon icon={faTimes} />
      </Blink>
    </TimesWrap>
  </AlertDanger>
);

const Alert = ({ children }: ReactType) => (
  <AlertPrimary>
    <IconWrap>
      <Bounce>
        <FontAwesomeIcon icon={faThumbsUp} />
      </Bounce>
    </IconWrap>
    <InnerWrap>
      <Title>Well done!</Title>
      {children}
    </InnerWrap>
    <TimesWrap>
      <Blink>
        <FontAwesomeIcon icon={faTimes} />
      </Blink>
    </TimesWrap>
  </AlertPrimary>
);

export default Alert;
