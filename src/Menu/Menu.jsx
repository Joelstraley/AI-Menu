import React from 'react'
import './Menu.scss'

export default function Menu({ items, loading }) {
	console.log('itemsinMENU', items)

	return (
		<div className="section--center">
			{loading ? (
				<>
					<div>HELLO</div>
				</>
			) : (
				<>
					{items.map((menuItem) => {
						const { id, prompt, image_url } = menuItem
						return (
							<article
								key={id}
								className="menu--item">
								<img
									src={image_url}
									alt={title}
									className="photo"
								/>
								<div className="item--info">
									<header>
										<h4>{prompt}</h4>
									</header>
									{/* <p className="item--text">{desc}</p> */}
								</div>
							</article>
						)
					})}
				</>
			)}
		</div>
	)
}
