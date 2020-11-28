import React from 'react';
import Link from 'next/link'


 const NavBar = () => {
    return (
        <div className="navbar">
            <div>
            <Link href='product' >
                ProductShow
            </Link>
            </div>
            
            
            <Link href='catalog'>
                Catalog
            </Link>
            <div>
            <Link href='admin'>
                Admin
            </Link>
            </div>
            

            
           
        </div>
    );
};
export default NavBar;