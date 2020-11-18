import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './MessageSender.css';
import Axios from 'axios'
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';




const MessageSender = ({ username, timestamp, message }) => {
	const [rb, setRb] = useState('');
	const [rbList, setRbList] = useState([])

	useEffect(() => {
		Axios.get("http://localhost:3000/Languages/English/api/get").then((response) => {
			setRbList(response.data)
		})
	})
	const postReq = () => {
		Axios.post("http://localhost:3000/Languages/English/api/insert",
			{ rb: rb }
		)
	};

	return (
		<div>
			<div className="messageSender">
				<div className="messageSender__top">
					<Avatar />
					<form>
						<input
							type="text"
							className="messageSender__input"
							name="rb"
							placeholder="what's on your mind ?"
							value={rb}
							onChange={(e) => setRb(e.target.value)}

						/>
					</form>
					<button onClick={postReq}>Post</button>
				</div>
			</div>

			{
				rbList.map((val) => {


					return <div className="post">
						<div className="post__top">
							<Avatar className="post__avatar" />
							<div className="post__topInfo">
								<h3>{username}</h3>
								<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
							</div>
						</div>
						<div key={val.rb} className="post__bottom">

							{val.rb}
							{/*image is coming later*/}
						</div>
						<div className="post__options">
							<div className="post__option">
								<ThumbUpIcon />
								<p>Like</p>
							</div>


							<div className="post__option">
								<ChatBubbleOutlineIcon />
								<p>Comment</p>
							</div>



						</div>
					</div>

				})
			}




		</div>
	);
}
export default MessageSender;
