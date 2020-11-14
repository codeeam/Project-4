import React from 'react';
import './Feed.css';

const Feed = () => {
	return (
		<div className="Feed">
			<div className="createPost">
				<input type="text" placeholder="Write your post here ...." />
				<button>Post</button>
			</div>
			<div className="post"></div>
		</div>
	);
};

export default Feed;
