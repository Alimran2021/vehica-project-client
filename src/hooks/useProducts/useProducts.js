import { useEffect, useState } from 'react';
// custom hook here
const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://guarded-savannah-01945.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return { products, setProducts }

};

export default useProducts;