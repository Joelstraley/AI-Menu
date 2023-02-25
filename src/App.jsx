import { useState, useEffect } from 'react'
import './App.scss'
import { Configuration, OpenAIApi } from 'openai'
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
		/* 		'Tea',
		'Milk',
		'Chocolate Milk',
		'Coca Cola',
		'Sprite',
		'Mountain Dew', */
	],
}

function App() {
	const [categories, setCategories] = useState(Object.keys(entireMenu))
	const [menuItems, setMenuItems] = useState([])
	const [loading, setLoading] = useState(true)

	console.log('huh', Object.keys(entireMenu), "what", categories)

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

  let aiResults = []

	const getItems = async (category) => {
		const configuration = new Configuration({
			apiKey: import.meta.env.VITE_MY_API_KEY,
		})
		const openai = new OpenAIApi(configuration)

		entireMenu[category].map(async (item, index) => {
			console.log("item", item, "entire", entireMenu[category])
			try {
				setLoading(true)
				const response = await openai.createImage({
					prompt: item,
					n: index,
					size: '256x256',
				})
				const items = {
					id: index,
					image_url: response.data.data[0]['url'],
					prompt: item,
				}
				console.log('THIS-is-ITEMS', items)
				await aiResults.push(items)
				//aiResults = [...items, items]
				console.log("aiR", aiResults)
				await setMenuItems(aiResults)
				await setLoading(false)
			} catch (e) {
				console.log(e)
			}
		})
	}


console.log("Outside-menu-items", menuItems)
	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Ye Olde AI Diner</h2>
					<div className="underline"></div>
				</div>
				<Category
					categories={categories}
					getItems={getItems}
				/>
				{loading && 
				<>LOADING</>}
				{!loading && <Menu
					items={menuItems}
				/>}
			</section>
		</main>
	)
}

export default App
