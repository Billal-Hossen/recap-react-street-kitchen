import React from 'react'

export default function PreparedCookItem({ recipe, index, handleCookingRecipes, isShow }) {
  const { recipe_name, preparing_time, calories } = recipe
  return (
    <tr className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-none'} hover:bg-gray-200`}>
      <th>{index}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      {
        isShow && <td> <button onClick={() => handleCookingRecipes(recipe)} className='btn  bg-green-500 text-white rounded-full hover:bg-purple-500'>Preparing</button></td>
      }
    </tr>
  )
}
