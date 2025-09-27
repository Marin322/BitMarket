import { th } from "framer-motion/client"
import { API_CONFIG } from "../../config/config"
class UserService {
    async CreateUser(userData) {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.CREATEUSER}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) throw new Error(`${response.status}`);
            return await response.json();
        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }
}

export const userService = new UserService();