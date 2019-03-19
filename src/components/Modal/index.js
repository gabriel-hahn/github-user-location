import React from 'react';
import { connect } from 'react-redux';

const Modal = () => (
  <div>
    <span>Teste</span>
    <input placeholder="Teste" />
  </div>
);

const mapStateToProps = state => ({
  data: state.users,
});

export default connect(mapStateToProps)(Modal);
