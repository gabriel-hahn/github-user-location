import React, { Component, Fragment } from 'react';

import User from '../User';

import './style.scss';

export default class Menu extends Component {
  state = {
    users: [
      {
        login: 'gabriel-hahn',
        id: 19672684,
        avatar_url: 'https://avatars2.githubusercontent.com/u/19672684?v=4',
        name: 'Gabriel Hahn Schaeffer',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <div className="menu">
          {this.state.users.map(user => (
            <User key={user.id} data={user} />
          ))}
        </div>
      </Fragment>
    );
  }
}
