import React, { Component } from 'react';
import ListItem from "./ListItem.js"

const List1 = (props) => {
	console.log(props.elems)
	const intery = props.elems.map((elem)=>{
		return(
			<ListItem
			elem = {elem}
			key = { elem.id }
			/>
			)
	}) 
    return (
    	<div>
    	{intery}
    	</div>
    )
}

export default List1;