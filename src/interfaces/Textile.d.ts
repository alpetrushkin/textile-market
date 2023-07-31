export interface Textile {
	id: number
	name: string
	description: string
	price: number
	image: string
}

export interface GetTextileArgs {
	id?: number | number[]
	limit?: number | 'all'
	offset?: number
}

export interface GetTextileData {
	total?: number
	data: Textile[]
}

export interface TextileBody {
	name?: string
	description?: string
	price?: number
	image?: string
}
