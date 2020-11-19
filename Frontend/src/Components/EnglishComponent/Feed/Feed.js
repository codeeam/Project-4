import React from 'react';
// import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
	return (
		<div className="feed">
			{/* <MessageSender /> */}
			<Post
				message="Hello Wolrd"
				timestamp="1601493943737"
				imgName="imgName"
				username="Mohammed"
			/>

			{/*{postsData.map((entry) => (
				<Post
					profilePic={entry.avatar}
					message={entry.text}
					timestamp={entry.timestamp}
					imgName={entry.imgName}
					userName={entry.user}
				/>
            ))}*/}
		</div>
	);
};

export default Feed;
