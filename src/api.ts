import axios from 'axios';
import { Product } from '@/types/product';

const url = 'https://file.notion.so/f/s/38d3f633-2c6d-4652-abf0-79a782786475/products.json?id=ba896742-ed51-4c24-8e53-db630c74a208&table=block&spaceId=7974307b-04a3-44a1-9d3b-367405cb7e16&expirationTimestamp=1692777600000&signature=mFByK8lijOw_065HS7rLFHPl7v4Z8H_czwtFtTsrW-E&downloadName=products.json'

// Would normally not use type any.
const transformProductDto = (data: any): Product => {
	return {
		code: data.code,
		name: data.name,
		supplier: data.supplier,
		dosageForm: data.dosageForm,
		packagingSize: data.packagingSize,
		basePrice: data.basePrice,
		available: data.available,
		stock: data.stock,
		prices: data.prices,
		// only saving image variant that is to be used.
		imageData: {
			url: data.images[0].variants[300].formats.jpg.resolutions['1x'].url,
			alt: `Image of the product ${data.name} from ${data.supplier},`
		}
	}
}

export const fetchProducts = async (): Promise<Product[]> => {
	const response = await axios.get(url)
	//fixes json
	const rawData = `[${response.data}]`;
	try {
		const data = JSON.parse(rawData);
		return data.map(transformProductDto);
	} catch (err) {
		console.log(err)
	}
}