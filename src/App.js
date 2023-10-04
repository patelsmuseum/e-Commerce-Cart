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

        // products[index].Qty +=1;

        // this.setState({
        //     products: products
        // })

        const docRef = doc(this.db , products[index].id);
        updateDoc(docRef , {
          Qty: products[index].Qty +1 
        })
    }

    handleDecreaseQty = (product) =>{
        console.log('hey Decrease Qty of ' , product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].Qty === 0){
            return;
        }

        // products[index].Qty -=1;

        // this.setState({
        //     products: products
        // })

        const docRef = doc(this.db , products[index].id);
        updateDoc(docRef ,{
          Qty:products[index].Qty -1 
        })
    }   

    handleDelete =(id) =>{
        // const {products} = this.state;
        // const items = products.filter((item) => item.id !== id);
        // this.setState({
        //     products : items
        // })
        const docRef = doc(this.db , id);
        deleteDoc(docRef);
    }

    addProduct = async ()=>{
      const dataToAdd ={
          img :"https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?pid=ImgDet&rs=1s",
          price: 965 ,
          Qty : 3,
          title : 'Laptop firebase'
       }

       const docRef = await addDoc(this.db , dataToAdd);
       console.log('product added ' , docRef);
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
          {/* <h1>Cart</h1> */}
          <NavBar count={this.getCount()} />
          <div className='bnav'>
              <button onClick={this.addProduct}>Add a Product</button>
              <div style={{color:'red'}}> TOTAL:{this.getTotalPrice()}</div>
          </div>
          
          <Cart 
          products = {products}
           onIncreaseQty ={this.handleIncreaseQty}
           onDecreaseQty = {this.handleDecreaseQty}
           onDelete = {this.handleDelete}
          />
          {loading && <h1 style={{paddingLeft: 50}}>Loading Products ...</h1>}

          
        </div>
      );
   }
}

export default App;
