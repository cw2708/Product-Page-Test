import React, { useState, useEffect } from 'react';
import classicTeeImage from '../Public/classic-tee.jpg';
import { getProduct } from '../api/product-api';

interface ProductData {
    id: number;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    sizeOptions: { id: number; label: string }[];
}

interface Props {
    addToCart: (item: { id: number; title: string; size: string; price: number }) => void;
}

export function ProductPage({ addToCart }: Props) {
    const [productData, setProductData] = useState<ProductData | null>(null);
    const [selectedSize, setSelectedSize] = useState<{ id: number; label: string } | null>(null);

    useEffect(() => {
        async function fetchProductData() {
            try {
                const product = await getProduct();
                setProductData(product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        fetchProductData();
    }, []);

    const handleSizeSelect = (size: { id: number; label: string }) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }

        if (productData) {
            addToCart({
                id: productData.id,
                title: productData.title,
                size: selectedSize.label,
                price: productData.price
            });
        }
    };

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Product-Page-Container">
            <div className="Product-Image">
                <img src={productData.imageURL} alt="Classic Tee" />
            </div>
            <div className="Product-Info">
                <h1 className='Product-Title'>{productData.title}</h1>
                <h3 className='Product-Price'>Price: ${productData.price}</h3>
                <h3 className='Product-Descripion'>{productData.description}</h3>
                <h3 className='Product-Size'>Size<span className="star-color">*</span> <span className="selected-size">{selectedSize ? selectedSize.label : "None"}</span></h3>

                <div className="Size-Button-Container">
                    {productData.sizeOptions.map(size => (
                        <button key={size.id} className="Size-Button" onClick={() => handleSizeSelect(size)}>{size.label}</button>
                    ))}
                </div>
                <button className='Add-Product' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPage;