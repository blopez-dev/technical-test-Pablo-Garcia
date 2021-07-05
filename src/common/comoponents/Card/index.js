import React from 'react';
import { CardWrapper, HeaderCard, BodyCard } from './styles';

const Card = ({ user, onView }) => (
  <>
    <CardWrapper>
      <HeaderCard>
        <div className="user--image">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="user--data">
          <h2 className="user--name">
            {user.first_name} {user.last_name}
          </h2>
          <a className="user--email" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </div>
      </HeaderCard>
      <BodyCard>
        <button
          type="button"
          className="user--button"
          onClick={() => onView(user)}
        >
          View User
        </button>
      </BodyCard>
    </CardWrapper>
  </>
);

export default Card;
