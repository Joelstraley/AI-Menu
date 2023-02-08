import React from 'react'
import './Category.scss'
import { fetchData, entireMenu } from '../helper/Data'

export default function Category({ categories }) {
	const [categories, setCategories] = useState(Object.keys(entireMenu))

	return (
		<div className="category--button__container">
			{categories.map((category, index) => {
				return (
					<div>
						<button
							type="button"
							key={index}
							/* onClick={() => filterItems(category)} */
							onClick={() => fetchData(category)}
							className="category--button__filter">
							{category}
						</button>
					</div>
				)
			})}
		</div>
	)
}
