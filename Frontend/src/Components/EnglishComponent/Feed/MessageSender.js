import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './MessageSender.css';
import Axios from 'axios'
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PostAddIcon from '@material-ui/icons/PostAdd';




const MessageSender = ({ username, timestamp }) => {
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
	const likePost = (id) => {
		Axios.post("http://localhost:3000/Languages/English/api/like",
			{
				userLikeing: localStorage.getItem("username"),
				postid: id
			}).then((response) => {
				// console.log(response)
			});
	}

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
					
					<IconButton onClick={postReq}>
						<PostAddIcon fontSize='large'
						/>
					</IconButton>
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
							<div onClick={() => {
								likePost(val.id);
							}} className="post__option">
								<ThumbUpIcon
									id="likeButton"

								/>

								<p> {val.likes} </p>
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
