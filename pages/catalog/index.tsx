// import {PagePro} from 'next'

import ProductList  from './ProductList/ProductList';
import axios from 'axios';

export default function Catalog (props){
    let {productList} = props.pageProps;
    
    return (
        <>
            <h1>Product catalog</h1>
            <ProductList 
                productList={productList}
            />
        </>
        
    );
};

Catalog.getInitialProps = async (ctx) => {
    
    try {
        const res = await axios.get('http://localhost:3000/api/product/list');
        console.log('res.data',res.data);
        return { productList: res.data }
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
    return {productList:[]};
}