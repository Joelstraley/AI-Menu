import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

export const entireMenu = {
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

async function fetchData({ prompt }) {
	const configuration = new Configuration({
		apiKey: import.meta.env.VITE_MY_API_KEY,
	})
	const openai = new OpenAIApi(configuration)

	try {
		const response = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: '256x256',
		})
		const categories = {
			image_url: response['data'][0]['url'],
			prompt: prompt,
		}
		console.log(response['data'][0]['url'])
		return categories
	} catch (e) {
		console.log(e)
	}
}

export default fetchData
/* function Data() {
	async function fetchData() {
		try {
			const res = await openai.createImage({
				prompt: 'hamburger',
				n: 1,
				size: '256×256',
			})
			console.log(res.data.data[0].url)
		} catch (e) {
			console.log(e)
		}
	}

	return <div>Data</div>
}

export default Data */
