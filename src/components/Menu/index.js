import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import User from '../User';

import './style.scss';

const Menu = ({ data }) => (
  <Fragment>
    <div className="menu">
      {data.users.map(user => (
        <User key={user.id} data={user} />
      ))}
    </div>
  </Fragment>
);

const mapStateToProps = state => ({
  data: state.users,
});

export default connect(mapStateToProps)(Menu);
