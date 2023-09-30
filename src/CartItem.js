import React from "react";

class CartItem extends React.Component {
    constructor (){
        super();
        this.state ={
            price : 999,
            title : 'mobile',
            Qty : 3,
            img: ""
        }
    }

    increaseQunatity = ()=>{
        console.log('this' , this.state);

        // *************first way to use state ********************
        this.setState({
            Qty : this.state.Qty +1 
        });

        // *******************2nd way to use state *****************

        // this.setState((prevState)=>{
        //     return{
        //         Qty:prevState.Qty +1
        //     }
        // });
    }
    render(){
        const {price , title , Qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
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
                         onClick={this.increaseQunatity}
                         />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

const style ={
    image :{
        height : 110,
        width : 110,
        borderRadius : 4 
    }
}

export default CartItem;