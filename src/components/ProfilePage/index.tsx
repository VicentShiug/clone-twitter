import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Guilherme CS</h1>
          <h2>@taldovicente</h2>

          <p>
            Developed at <a href='https://github/vicentShiug'> @Github</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Brasília, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 30 de janeiro de 2002
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>100</strong>
            </span>
            <span>
              <strong>672 </strong> seguidores
            </span>
          </Followage>
      </ProfileData>
      <Feed />
    </Container>

    );
}

export default ProfilePage;