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
            <span>{user.first_name}</span> <span>{user.last_name}</span>
          </h2>
          <a className="user--email" href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </div>
      </HeaderCard>
      <BodyCard>
        <button
          data-testid="user-view-button"
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
