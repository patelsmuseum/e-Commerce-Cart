import React from "react";

import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor (){
        super();
        this.state ={
            products:[
                {
                    price : 999,
                    title : 'mobile',
                    Qty : 3,
                    img: "",
                    id:1
                },
                {
                    price : 987,
                    title : 'Watch',
                    Qty : 3,
                    img: "",
                    id:2
                },
                {
                    price : 4444,
                    title : 'Laptop',
                    Qty : 5,
                    img: "",
                    id: 3
                }

            ]
        }
    }

    handleIncreaseQty = (product) =>{
        console.log('hey increase Qty of ' , product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].Qty +=1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQty = (product) =>{
        console.log('hey increase Qty of ' , product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].Qty === 0){
            return;
        }

        products[index].Qty -=1;

        this.setState({
            products: products
        })
    }   

    handleDelete =(id) =>{
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products : items
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((product)=>{
                    return <CartItem 
                                product={product} 
                                key={product.id} 
                                onIncreaseQty ={this.handleIncreaseQty}
                                onDecreaseQty = {this.handleDecreaseQty}
                                onDelete = {this.handleDelete}
                            />
                })}
            </div>
        );
    }
}



export default Cart;