import Button from '@material-ui/core/Button'
//Types
import { ItemProps } from '../../type' 
//styles
import {Wrapper} from './Item.style';


const Item: React.FC<ItemProps> = ({
    item,
    handleAddToCart
}) => (
    <Wrapper>
        <img src= {item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>
            Add to cart
        </Button>
    </Wrapper>
)

export default Item;