import React from 'react'
import './Item.scss'

export default function Item(menuItem) {
    console.log("menu", menuItem)
    const { id, prompt, image_url } = menuItem

	return (
        <>
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
		</>
	)
}
