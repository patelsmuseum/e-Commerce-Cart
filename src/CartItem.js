import React from "react";

const CartItem = (props) => {
        const {price , title , Qty} = props.product;
        const{product,onIncreaseQty,onDecreaseQty,onDelete}=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty :{Qty} </div>
                    <div className="cart-item-actions">
                        {/* Butons */}
                        <img alt="increase" 
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                         onClick={()=> onIncreaseQty(product)}
                         />
                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                        onClick={()=> onDecreaseQty(product)}
                        />
                        <img alt="delete" 
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
                         onClick={()=> onDelete(product.id)}
                         />
                    </div>
                </div>
            </div>
        );
    
}

const style ={
    image :{
        height : 110,
        width : 110,
        borderRadius : 4 ,
        background :'#ccc'
    }
}

export default CartItem;