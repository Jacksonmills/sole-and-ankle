import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

const Sidebar = () => {
  return (
    <Wrapper>
      <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <ActiveLink href="/running">Running</ActiveLink>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  line-height: 3;
  max-width: max-content;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 1px;
    background-color: transparent;
    height: 2px;
    transform: translateY(0px);
    transition-property: background-color, height, transform;
    transition-duration: 200ms;
    transition-timing-function: ease;
  }

  &:hover {
    &:after {
      background-color: ${COLORS.primary};
      height: 4px;
      transform: translateY(-8px);
    }
  }
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.primary};
`;

export default Sidebar;
