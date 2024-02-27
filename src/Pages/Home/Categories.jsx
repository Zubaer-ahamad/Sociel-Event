import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data.categories));
    }, [])
    return (
        <div className="pt-16 pb-10 container mx-auto">
            <h1 className="text-4xl font-semibold text-center mb-7">Event Services List</h1>
            <div className="grid md:grid-cols-2 p-4 lg:grid-cols-3 gap-5 mt-10">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;