import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../Header/header';

export class home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <p>wfwe</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(home)

