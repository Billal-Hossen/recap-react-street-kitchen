import React, { useEffect, useState } from 'react'

import Recipe from './Recipe/Recipe';
import CartTable from '../Cart/CartTable';

export default function Recipes() {
  const [recipes, setReipes] = useState([])
  const [cookRecipes, setCookReipes] = useState([])
  const [cookingRecipes, setCookingReipes] = useState([])
  const [totatlTime, setTotalTime] = useState(0)
  const [totatlCalories, setTotalCalories] = useState(0)

  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setReipes(data))
  }, [])

  const handleCookRecipes = (recipe) => {
    if (cookRecipes.find(rcp => rcp.recipe_id === recipe.recipe_id)) return
    setCookReipes([...cookRecipes, recipe])
  }

  const handleCookingRecipes = (recipe) => {
    const matchRecipe = cookRecipes.find(rcp => rcp.recipe_id === recipe.recipe_id)
    if (matchRecipe) {
      const updateCookRecipes = cookRecipes.filter(rcp => rcp.recipe_id != recipe.recipe_id)
      setCookReipes(updateCookRecipes)
      setCookingReipes([...cookingRecipes, matchRecipe])
      const time = matchRecipe.preparing_time.split(' ')
      const calories = matchRecipe.calories.split(' ')
      setTotalTime(totatlTime + parseInt(time[0]))
      setTotalCalories(totatlCalories + parseInt(calories[0]))
    }
  }

  return (
    <main className='mt-4 p-3 space-y-6 '>
      <section className="recipes-banar text-center space-y-4">
        <h3 className='text-3xl font-bold '>Our Recipes</h3>
        <p className='text-sm font-serif'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </section>

      <section className='md:flex md:space-x-12'>
        <div className="kitchen-item w-full md:w-3/5 grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-2 gap-12">
          {
            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleCookRecipes={handleCookRecipes} />)
          }


        </div>
        <div className="kitchen-cart w-full md:w-2/5  border border-purple-600 card bg-base-100 shadow-xl p-6 mt-4 md:mt-0">
          <div className='text-center p-2 space-y-2'>
            <h2 className='text-3xl font-semibold '>Want to cook: {cookRecipes.length}</h2>
            <hr className='mx-14' />
          </div>
          <CartTable cookRecipes={cookRecipes} handleCookingRecipes={handleCookingRecipes} isShow={true} />
          <div className='text-center p-2 space-y-2 mt-8'>
            <h2 className='text-3xl font-semibold '>Currently cooking:  {cookingRecipes.length}</h2>
            <hr className='mx-14' />

          </div>
          <CartTable cookRecipes={cookingRecipes} handleCookingRecipes isShow={false} />

          <div className='flex gap-4 p-4 justify-end text-lg font-semibold'>
            <div>
              <h1>Total Time =</h1>
              <h1>{totatlTime} minutes</h1>
            </div>
            <div>
              <h1>Total Calories =</h1>
              <h1>{totatlCalories} Calories</h1>
            </div>
          </div>

        </div>


      </section>

    </main>
  )
}
