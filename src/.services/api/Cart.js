import { API_CONFIG } from "../../config/config";

class CartService {
    async GetCartItems(id) {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.CART.GETCARTITEMS}${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(response.status);
            };
            return await response.json();
        }
        catch(error) {
            throw error;
        };
    };

    async AddToCart(cartItem) {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.CART.ADDTOCART}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(cartItem)
            });

            if (!response.ok)
                throw new Error(response.status);
            return await response.json();
        }
        catch(error) {
            throw error;
        };
    }
}

export const cartService = new CartService();