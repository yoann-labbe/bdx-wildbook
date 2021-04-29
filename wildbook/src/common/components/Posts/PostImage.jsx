import React, { Fragment } from 'react';

const PostImage = ({ urlImage }) => {

    return (
        <Fragment>
            <img src={urlImage} />
        </Fragment>

    );
}

export default PostImage;