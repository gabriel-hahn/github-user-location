import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

Menu.propTypes = {
  data: PropTypes.shape({
    users: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  data: state.users,
});

export default connect(mapStateToProps)(Menu);
