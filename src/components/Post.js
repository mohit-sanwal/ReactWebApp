import React from 'react';
import {
  Link
} from "react-router-dom";
import './styles.css';
export default class Post extends React.Component {

  componentDidMount () {
      this.props.getList()
  }

  render() {
    return (
        <React.Fragment>
         <img src="src/assets/images/pan-details-img.png"  width="200" />
         <img src="src/assets/svg/account-selected.svg"  width="100" />
         <Link to="/fullPost"><h1 className="text"> only Post </h1></Link>
         {
           this.props.list.list.map((post) => <h1 key={post.id}> {post.title} </h1>)
         }
        </React.Fragment>
    )
  }

}
