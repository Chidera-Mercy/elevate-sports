import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// Shopping Cart Icon component
export const ShoppingCartIcon = () => {
    return <FontAwesomeIcon 
                icon={faShoppingCart} 
                className='shopping-cart-icon' 
            />;
};
