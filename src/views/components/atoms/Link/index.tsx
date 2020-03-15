import React from 'react';

interface props {
  children: React.ReactNode;
}
const Link = ({ children }: props) => <div>{children}</div>;

export default Link;
