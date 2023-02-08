import { useState, useEffect } from 'react'
import './App.scss'
import Category from './Category/'
import Menu from './Menu'

/* const allCategories = ['all', ...new Set(items.map((item) => item.category))] */

function App() {
	/* const [menuItems, setMenuItems] = useState({})
		const [categories, setCategories] = useState(allCategories)

	useEffect(() => {
		const renderCat = fetchData()
		return () => {
			setMenuItems(renderCat)
		}
	}, [])

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items)
			return
		}

		const newItems = items.filter((item) => item.category === category)
		setMenuItems(newItems)
	} */

	//
	/* 
  When Category is set 
  forEach - call fetchData 
  fetchData setsItems State 
   */

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Mama's AI Diner</h2>
					<div className="underline"></div>
				</div>
				<Category />
				{/* <Menu items={menuItems} /> */}
			</section>
		</main>
	)
}

export default App
