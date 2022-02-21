import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {
const [categories, setCategories] = useState(['One Punch Man']);

// const handleAdd = () => {
//     setCategories( c => [...c, 'Attack On Titan'])
// }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>

        <ol>
            {
                categories.map( c => (
                    <GifGrid
                        key={ c } 
                        category={ c }
                    />
                ))
            }
        </ol>
    </>
  )
}
