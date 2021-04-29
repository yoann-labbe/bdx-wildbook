import React, { Fragment } from 'react';

const PostVideo = ({ urlVideo }) => {

    return (
        <Fragment>
            <iframe width="670" height="315" src={urlVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
        </Fragment>

    );
}

export default PostVideo;