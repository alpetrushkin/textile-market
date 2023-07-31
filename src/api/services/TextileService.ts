import { api } from '../http/common'
import {
	GetTextileArgs,
	GetTextileData,
	TextileBody
} from '../../interfaces/Textile'
const url = 'textile'

export const TextileService = {
	getTextiles(args?: GetTextileArgs): Promise<GetTextileData> {
		return api.get(url, args)
	},

	deleteTextile(id: number) {
		const endpoint = `${url}/${id}`
		return api.delete(endpoint)
	},

	patchTextile(id: number, data: TextileBody): Promise<any> {
		const endpoint = `${url}/${id}`
		return api.patch(endpoint, data)
	}

	// postTextile() {
	// 	return api.post()
	// }
}
