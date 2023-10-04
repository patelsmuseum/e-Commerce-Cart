import React from 'react';
import CartItem from './CartItem';
import NavBar from './NavBar';
import Cart from './Cart';

import { Firestore, firestore } from './index';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore';

class  App extends React.Component {
      constructor (){
        super();
        this.state ={
            products:[] ,
            loading : true
        }
        this.db = collection(firestore , 'products');
    }

    componentDidMount(){
      onSnapshot(this.db, (snapshot) =>{
        const products = snapshot.docs.map((doc) => {
          let data = doc.data();
          data['id'] = doc.id;
          return data
        });
    
        this.setState({
          products,
          loading: false
        })
      });
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
    const {products , loading} = this.state;
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
          {loading && <h1 style={{paddingLeft: 50}}>Loading Products ...</h1>}

          <div style={{color:'red'}}> TOTAL:{this.getTotalPrice()}</div>
        </div>
      );
   }
}

export default App;
