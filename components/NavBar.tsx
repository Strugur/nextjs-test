import React from 'react';
import Link from 'next/link'


 const NavBar = () => {
    return (
        <div className="navbar">
            <Link href='product'>
                ProductShow
            </Link>
            <Link href='catalog'>
                Catalog
            </Link>
            <Link href='admin'>
                Admin
            </Link>

            
           
        </div>
    );
};
export default NavBar;