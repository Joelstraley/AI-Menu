import React from 'react'
import './Menu.scss'

export default function Menu({ items, loading }) {
	console.log('itemsinMENU', items)

	return (
		<div className="section--center">
			<>
				{/* const { id, prompt, image_url } = menuItem */}
				<article
					key={items.id}
					className="menu--item">
					<img
						src={items.image_url}
						alt={items.title}
						className="photo"
					/>
					<div className="item--info">
						<header>
							<h4>this is the {items.prompt}</h4>
						</header>
						<p className="item--text">hi this is</p>
					</div>
				</article>
			</>
		</div>
	)
}
