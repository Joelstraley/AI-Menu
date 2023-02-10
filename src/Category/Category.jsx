import { useState } from 'react'
import './Category.scss'
/* import { getItems, entireMenu } from '../helper/Data' */

export default function Category({ categories, getItems }) {
	console.log('CAT', categories)
	return (
		<div className="category--button__container">
			{categories.map((category, index) => {
				return (
					<div>
						<button
							type="button"
							key={index}
							/* onClick={() => filterItems(category)} */
							onClick={() => getItems(category)}
							className="category--button__filter">
							{category}
						</button>
					</div>
				)
			})}
		</div>
	)
}
