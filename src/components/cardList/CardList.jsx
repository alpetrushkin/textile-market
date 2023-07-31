import CardItem from '../cardItem/CardItem.tsx'
import styles from './cardList.module.css'

const CardList = ({ shop, onDelete, onChange }) => {
	return (
		<div className={styles.root}>
			{shop == null
				? 'loading'
				: shop.map(item => (
						<CardItem
							key={item.id}
							{...item}
							onRemove={() => onDelete(item.id)}
							onChange={title => onChange(item.id, title)}
						/>
				  ))}
		</div>
	)
}

export default CardList
