import React,{useState,useEffect} from 'react';

export default function ProductList ({productList}){
    console.log('productList',productList);

    return(
        <div className="productList">
            {/* {
                productList.map((product,i)=>{
                    return (
                        <div key={i}>
                           { product.name}
                        </div>
                    );
                })
            } */}
            
        </div>
    );
};
