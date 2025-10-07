export const API_CONFIG = {
    BASE_URL: 'https://localhost:7064',
    ENDPOINTS: {
        CREATEUSER: '/api/user',
        ENTERACCOUNT: '/api/user/login',
        GETALLPRODUCTS: '/api/products',
        GETPRODUCT: '/api/products/',
    },
    CART: {
        ADDTOCART: '/api/cart/add',
        GETCARTITEMS: '/api/Cart/' // id
    }
}