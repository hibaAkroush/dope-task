import React, { Component } from 'react';
import "./ListItem.css"
import loc from "./web/location_icon-3x.png"



const ListItem = (props) => {
	console.log(props.elem)
	const backgroundImg = props.elem.background
	const playerOneName =props.elem.playerOneName
	const playerOneImg=props.elem.playerOneImg
	const playerTwoName=props.elem.playerTwoName
	const playerTwoImg=props.elem.playerOneImg
	const vs=props.elem.vs
	const title=props.elem.title
	const titleLogo=props.elem.titleLogo
	const coming=props.elem.coming
	const date=props.elem.date
	const time=props.elem.time
	const place=props.elem.place
	const event=props.elem.event
	const seatsRemaining=props.elem.seatsRemaining
	const seatsTotal =props.elem.seatsTotal
	return (
		<div>
		<img src = {backgroundImg} id="backgroundImg"/>
		<div id = "box"></div>
		<img src = {playerOneImg} id="playerOneImg"/>
		<img src = {playerTwoImg} id="playerTwoImg"/>
		<img src = {titleLogo} id="titleLogo"/>
		<img src = {coming} id="coming"/>
		<p id="playerOneName">{playerOneName}</p>
		<p id="playerTwoName">{playerTwoName}</p>
		<p id="vs">{vs}</p>
		<p id="title">{title}</p>
		<p id="date">{date}</p>
		<p id="time">{time}</p>
		<div id="place"><img id="loc" src={loc}/><p>{place}</p></div>
		<p id="event">{event}</p>
		<p id="seats">{seatsRemaining} Remaining of {seatsTotal} Seats</p>

		</div>
		)
}

export default ListItem;