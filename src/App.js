import React from 'react';
import CartItem from './CartItem';
import NavBar from './NavBar';
import Cart from './Cart';

class  App extends React.Component {
      constructor (){
        super();
        this.state ={
            products:[
                {
                    price : 999,
                    title : 'mobile',
                    Qty : 3,
                    img: 'https://media.istockphoto.com/id/1223365194/es/vector/manos-con-tel%C3%A9fonos-inteligentes.jpg?s=612x612&w=0&k=20&c=Xcn-5CVEQ4L1ef1OdsrAERKnxh4i5tY5f40ONBxRyyU=',
                    id:1
                },
                {
                    price : 987,
                    title : 'Watch',
                    Qty : 3,
                    img: 'https://media.istockphoto.com/id/577316956/es/vector/vector-de-mano-del-reloj-de-pulsera.jpg?s=612x612&w=0&k=20&c=RjJ-_xJdWJMg_R8V83sRcqvf-mNe4iZgnU-GPxKhlOc=',
                    id:2
                },
                {
                    price : 4444,
                    title : 'Laptop',
                    Qty : 5,
                    img: 'https://media.istockphoto.com/id/1266388738/es/foto/pantalla-en-blanco-ordenador-sobre-la-mesa-con-la-oficina-en-segundo-plano.jpg?s=612x612&w=0&k=20&c=7hcD6axxAXR8rEZhFkh8zPvSmP8Vnrpk2hbCeMMZfC0=',
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
        console.log('hey Decrease Qty of ' , product);
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

    getCount =()=>{
      const {products} = this.state;
      let count =0;
      products.forEach((product)=>{
        count += product.Qty;
      })
      return count;
    }

    getTotalPrice=()=>{
      const {products} = this.state;
      let price =0;
      products.forEach((product)=>{
        price += product.Qty * product.price;
      })
      return price;
    }
   render(){
    const {products} = this.state;
      return (
        <div className="App">
          <h1>Cart</h1>
          <NavBar count={this.getCount()} />
          <Cart 
          products = {products}
           onIncreaseQty ={this.handleIncreaseQty}
           onDecreaseQty = {this.handleDecreaseQty}
           onDelete = {this.handleDelete}
          />
          <div style={{color:'red'}}> TOTAL:{this.getTotalPrice()}</div>
        </div>
      );
   }
}

export default App;
