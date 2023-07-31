import CardList from './components/cardList/CardList.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header/Header.jsx'
import Auth from './components/auth/Auth.jsx'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import AddProduct from './components/addProduct/AddProduct.jsx'
import FormNewProduct from './components/formNewProduct/FormNewProduct.jsx'
import api from './api'
import { Textile, TextileBody } from './interfaces/Textile'

function App() {
	const [shop, setShop] = useState<Textile[]>([])
	const [isAuthVisible, setIsAuthVisible] = useState(false)
	const [newProductOpen, setNewProductOpen] = useState(false)

	const load = async () => {
		const res = await api.getTextiles({ limit: 6 })
		setShop(res.data)
	}

	useEffect(() => {
		load()
	}, [])

	const handleDelete = async (id: number) => {
		await api.deleteTextile(id)
		await load()
	}

	const patchTextiles = async (id: number, data: TextileBody) => {
		console.log(data)
		await api.patchTextile(id, data)
		await load()
	}

	return (
		<>
			<Header
				isAuthVisible={isAuthVisible}
				setIsAuthVisible={setIsAuthVisible}
			/>
			{!newProductOpen && <AddProduct setNewProductOpen={setNewProductOpen} />}
			<div className='container'>
				<Auth
					isAuthVisible={isAuthVisible}
					setIsAuthVisible={setIsAuthVisible}
				/>
				{newProductOpen && (
					<FormNewProduct setNewProductOpen={setNewProductOpen} />
				)}
				{!isAuthVisible && !newProductOpen && (
					<CardList
						shop={shop}
						onDelete={handleDelete}
						onChange={patchTextiles}
					/>
				)}
			</div>
		</>
	)
}

export default App
