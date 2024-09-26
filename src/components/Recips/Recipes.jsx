import React, { useEffect, useState } from 'react'

import Recipe from './Recipe/Recipe';

export default function Recipes() {
  const [recipes, setReipes] = useState([])
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setReipes(data))
  }, [])
  return (
    <main className='mt-4 p-3 space-y-6 mx-24'>
      <section className="recipes-banar text-center space-y-4">
        <h3 className='text-3xl font-bold '>Our Recipes</h3>
        <p className='text-sm font-serif'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </section>

      <section >
        <div className="kitchen-item w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
          {
            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} />)
          }


        </div>
        <div className="kitchen-cart">

        </div>


      </section>

    </main>
  )
}
