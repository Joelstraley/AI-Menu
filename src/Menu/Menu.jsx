import React from 'react'
import Item from '../Item/Item'
import './Menu.scss'

export default function Menu({items}) {
	console.log('itemsinMENU', items)

	return (
		<div className="section--center">
			<>
				{items.map((menuItem) => {
					const { id, prompt, image_url } = menuItem
					return (
					 <article
					 key={id}
					 className="menu--item">
					 <img
						 src={image_url}
						 alt={prompt}
						 className="photo"
					 />
					 <div className="item--info">
						 <header>
							 <h4>{prompt}</h4>
						 </header>
						 {/* <p className="item--text">hi this is</p> */}
					 </div>
				 </article>
				 )
					{/* <Item menuItem={menuItem}/> */}
				})}
			</>
		</div>
	)
}
