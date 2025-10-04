import { API_CONFIG } from "../../config/config"
class ProductService {
    async GetAllProducts() {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.GETALLPRODUCTS}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                },
            });

            if(!response.ok) {
                throw new Error(response.status);
            };
            return await response.json();
        }
        catch(error) {
            console.error(error);
            throw error;
        };
    };
}

export const productService = new ProductService();