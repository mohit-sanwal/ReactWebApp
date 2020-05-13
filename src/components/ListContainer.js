import React from 'react'
import { getListing } from '../redux/action/action.js'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Post from './Post.js'


const mapStateToProps = state => {
   console.log("state-->", state)
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getList: () => dispatch(getListing())
    }
}

const ListContainer = withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
    )(Post)
);

export default ListContainer;
