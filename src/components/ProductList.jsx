import { useState, useEffect } from 'react';
import './UserList.css';

import { getAllProducts, searchProducts } from '../services/productService'

import Table from "./Table"

function ProductList() {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([])
    const [debounce, setDebounch] = useState("")
    const [loading, setLoading] = useState(false)
    const [searchLoading, setSearchLoading] = useState(false)
    // const Header = ["Title", "Description", "Category", "Rating"]
    console.log("go to product like")
    const Header = [
        { key: "title", lable: "Title" },
        // { key: "description", lable: "Description" },    
        { key: "category", lable: "Category" },
        { key: "rating", lable: "Rating" },
    ]


    const handleGetAllProducts = async () => {
        try {
            setLoading(true)
            const response = await getAllProducts();
            setProducts(response.data.products)
            console.log(response.data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const handleSearchProducts = async () => {
        try {
            setSearchLoading(true)
            const response = await searchProducts(search)
            setProducts(response.data.products)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setSearchLoading(false)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounch(search)
        }, 500)
        return () => clearTimeout(timer)
    }, [search])


    useEffect(() => {
        if (debounce) {
            handleSearchProducts();
        } else {
            handleGetAllProducts();
        }
    }, [debounce])
    return loading ? (<h1>Loading....</h1>) : (
        <div className="user-list-container">
            <div className="user-list-title-area">
                <h2>Product Management System</h2>
                <p>A list of all user accounts in the system including their contact details, age, and gender.</p>
            </div>

            <div className="user-list-actions">
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {
                searchLoading ? (<h1>Loading....</h1>) : <Table data={products} header={Header} />
            }
        </div>
    );
}

export default ProductList;
