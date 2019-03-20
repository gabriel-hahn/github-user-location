import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const Modal = () => (
  <div className="modal">
    <div className="info">
      <div className="user-name">
        <span>New user</span>
        <input placeholder="Github user" />
      </div>
      <div className="buttons">
        <button type="button" className="btn-cancel">
          Cancel
        </button>
        <button type="button" className="btn-save">
          Save
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  data: state.users,
});

export default connect(mapStateToProps)(Modal);
