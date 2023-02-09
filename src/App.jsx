import { useState, useEffect } from 'react'
import './App.scss'
import Category from './Category/'
import Menu from './Menu'

/* const allCategories = ['all', ...new Set(items.map((item) => item.category))] */

const entireMenu = {
	Breakfast: [
		'Two Eggs, Any Style',
		'Eggs Benedict',
		'Cereal - Raisin Bran, Corn Flakes, Special K, Wheaties',
		"Chef's Omelette",
		'French Toast',
	],
	Lunch: [
		'Soup Du Jour',
		'Taco Salad',
		'Greek Salad',
		'Buffalo Wings',
		'Hamburger with fries',
		'Homemade Chilli',
	],
	Dinner: [
		'Broiled T-Bone Steak',
		'Eggplant Parmesan',
		'Two Broiled Lobster Tails',
		'Stuffed Jumbo Shrimp',
		'Fettuccine Alfredo',
		'Lasagna',
	],
	Desert: [
		'Ice Cream - Chocolate, Vanilla or Strawberry',
		'Banana Royal',
		'Strawberry Cheesecake',
		'Jello',
	],
	Drinks: [
		'Coffee',
		'Tea',
		'Milk',
		'Chocolate Milk',
		'Coca Cola',
		'Sprite',
		'Mountain Dew',
	],
}

function App() {
	const [categories, setCategories] = useState(Object.keys(entireMenu))
	const [menuItems, setMenuItems] = useState(items)

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
				<Category categories={categories} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default App
