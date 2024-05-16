import { BrandLogo } from '@/src/assets/brand/BrandLogo';
import React from 'react';
import { Container, HeaderContainer, UserProfile } from './style';
export function HomeHeader() {
  return (
    <Container>
      <HeaderContainer>
        <BrandLogo />
        <UserProfile
          source={{
            uri: "https://avatars.githubusercontent.com/u/49498964?s=400&u=d67f40426cf0b9a35d800402a9a0eef4e5214a9c&v=4",
          }}
        />
      </HeaderContainer>
    </Container>
  );
}