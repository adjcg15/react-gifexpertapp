import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    // const categories = ['Sex Education', 'Dark', 'Stranger Things'];

    const [categories, setCategories] = useState(['Halo spartan']);
    
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            category={ category }
                            key={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;