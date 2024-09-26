import PreparedCookItem from './PreparedCookItem'

export default function CartTable({ cookRecipes, handleCookingRecipes, isShow }) {
  return (
    <div className="overflow-x-auto">
      <table className="table font-semibold">
        <thead>
          <tr >
            <th className='text-lg font-bold'>No</th>
            <th className='text-lg font-bold'>Name</th>
            <th className='text-lg font-bold'>Time</th>
            <th className='text-lg font-bold'>Calories</th>
          </tr>
        </thead>
        <tbody >
          {
            cookRecipes.map((recipe, index) => <PreparedCookItem key={recipe.recipe_id} index={index + 1} recipe={recipe} handleCookingRecipes={handleCookingRecipes} isShow={isShow} />)
          }
        </tbody>
      </table>
    </div>
  )
}
