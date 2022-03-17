import { api } from './api'

const get = async () => {
    const products = await api.get('/products')
    return products
}

export default { get }