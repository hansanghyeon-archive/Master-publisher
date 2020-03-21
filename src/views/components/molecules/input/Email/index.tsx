import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { TimelineLite } from 'gsap';
import _ from 'lodash';
// components
import EmailIcon from '@atom/icon/Email';
import ErrorRefrashBtn from '@atom/btn/ErrorRefrash';

interface Result {
  result?: boolean;
}
interface EndResult {
  endResult?: boolean;
}
interface LabelResult extends Result, EndResult {
  active?: boolean;
}

const Wrap = styled.div`
  background-color: #fff;
  font-size: 16px;
  border-radius: 10px;
  overflow: hidden;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  transform: perspective(999px);
  transform-style: preserve-3d;
  border: 1px solid #d1d6ee;
  box-shadow: 0 22px 24px -28px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  will-change: border;
  &:hover {
    border: 1px solid #a6accd;
  }
`;
const activeLabel = css`
  transform: translateY(calc(-225%));
  opacity: 1;
  font-size: 0.4em;
`;
const successLabel = css`
  transform: translateY(calc(-50% - 2.5em));
  opacity: 0;
`;
const Label = styled.label<LabelResult>`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
  transition: transform 0.3s;
  transition-delay: color 0.6s;
  will-change: transform color font-size;
  opacity: 0.3;
  color: ${({ endResult }) => (endResult ? 'inherit' : '#fe2946')};
  ${({ active }) => active && activeLabel};
  ${({ result }) => result && successLabel};
`;
const Input = styled.input<Result>`
  width: 300px;
  height: 32px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 50px;
  border: none;
  outline: none;
  position: relative;
  z-index: 2;
  background-color: transparent;
  font-size: 20px;
  transition: transform 0.3s;
  will-change: transform;
  transform: ${({ result }) =>
    result ? 'translateY(0)' : 'translateY(0.2em)'};
`;
const IconWrap = styled.div<Result>`
  position: absolute;
  right: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    fill: ${({ result }) => (result ? '#16BF78' : '#646B8C')};
    transition: fill 0.3s;
    will-change: fill;
  }
`;
const Alert = styled.div<EndResult>`
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  background: #fe2946;
  background-size: 20px;
  border-radius: 8px;
  transition: all 0.6s ease-in-out;
  transition-delay: 0.3s;
  transform-origin: right center 0px;
  transform: ${({ endResult }) =>
    endResult ? 'translateX(64px)' : 'translateX(0)'};
  cursor: pointer;
  z-index: 3;
`;

const EmailInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [result, setResult] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const elInput = useRef<HTMLInputElement>(null);
  const elWrap = useRef<HTMLDivElement>(null);
  const emailRule = new RegExp(
    '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|' +
      '(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])' +
      '|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
  );
  const _sendQuery = (query: string) => setResult(emailRule.test(query));
  const _delayFunction = (query: string) => {
    setWaiting(false);
    if (!emailRule.test(query)) {
      const tl = new TimelineLite();
      tl.to([elWrap.current], 0.1, {
        translateX: -16,
        border: '1px solid #fe2946',
        boxShadow: '0 1px 6px -1px rgba(254, 41, 70, 0.32)',
      })
        .to([elWrap.current], 0.1, { translateX: 16 })
        .to([elWrap.current], 0.1, { translateX: -16 })
        .to([elWrap.current], 0.1, { translateX: 16 })
        .to([elWrap.current], 0.1, { translateX: -16 })
        .to([elWrap.current], 0.1, { translateX: 0 });
    }
  };
  const _delayedQuery = useRef(
    _.debounce((q: string) => {
      _sendQuery(q);
      _delayFunction(q);
    }, 1000),
  ).current;
  const _handleChange = () => {
    setInputValue(elInput.current.value);
  };
  const _onFocus = () => {
    setFocus(true);
    setWaiting(true);
    const tl = new TimelineLite();
    tl.to([elWrap.current], 0.1, {
      borderColor: '#275efe',
      boxShadow: '0 1px 6px -1px rgba(39, 94, 254, 0.32)',
    });
  };
  const _onBlur = () => {
    setFocus(false);
    const tl = new TimelineLite();
    tl.to([elWrap.current], 0.1, {
      borderColor: null,
      boxShadow: null,
    });
    if (inputValue) _delayedQuery(elInput.current.value);
    else setResult(false);
  };
  const _resetInput = () => {
    setInputValue('');
    setWaiting(true);
    elInput.current.focus();
  };
  return (
    <Wrap ref={elWrap}>
      <Input
        ref={elInput}
        value={inputValue}
        id="email"
        onChange={_handleChange}
        onFocus={_onFocus}
        onBlur={_onBlur}
        result={result}
      />
      <Label
        active={focus || Boolean(inputValue)}
        result={result}
        endResult={waiting || result}
      >
        {waiting || result ? 'Email' : 'Email format invalid'}
      </Label>
      <IconWrap result={result}>
        <EmailIcon />
      </IconWrap>
      <Alert endResult={waiting || result} onClick={_resetInput}>
        <ErrorRefrashBtn />
      </Alert>
    </Wrap>
  );
};

export default EmailInput;
