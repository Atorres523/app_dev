import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import CommentForm from "./post/CommentForm";
import CommentItem from "./post/CommentItem";


const Posts = ({ getPosts, post: { post, loading }, match }) => {
    useEffect(() => {
        getPosts(match.params.id);
    }, [getPosts]);
    
    return loading || post === null ? <Spinner/> : <Fragment>
        <Link to = '/posts' className = 'btn'>
            Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className="comments">
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id} />
            ))} 
        </div>
    </Fragment>
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
