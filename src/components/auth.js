import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Input, Select, Icon, Button } from 'antd';
const Search = Input.Search;
const Option = Select.Option;

import { setAuth, newAuth } from '../actions/auth.action';

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    let { newAuth, match, history} = this.props;
    let authString = match.params.authstring;
    if (authString.includes('yc-shawn-spotify')){
      newAuth(authString);
    }
    history.replace('');
  }
  render(){
    return (
      <main style={{color: 'white'}}>authing...</main>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {newAuth})(Home);
