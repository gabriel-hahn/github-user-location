import React, { Fragment } from 'react';

import './style.scss';

const User = ({ data }) => (
  <Fragment>
    <div className="user">
      <img src={data.avatar_url} alt="User" />
      <div>
        <span className="description">{data.name}</span>
        <span className="login">{data.login}</span>
      </div>
      <i className="fa fa-times-circle" aria-hidden="true" />
    </div>
  </Fragment>
);

export default User;
