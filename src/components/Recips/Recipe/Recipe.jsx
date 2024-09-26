import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

import item from '../../../assets/images/item-1.png'

export default function Recipe({ recipe }) {
  const { recipe_id, recipe_name, description, ingredients, preparing_time, calories } = recipe
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={item}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {recipe_name}
        </h2>
        <p className='text-lg font-light'>{description}</p>

        <hr />
        <div className="justify-start">
          <h3 className='text-lg font-bold'>Ingredients: {ingredients?.length}</h3>
          <ul className='list-disc font-light ml-4'>
            {
              ingredients.map(ingredient => <li>{ingredient}</li>)
            }
          </ul>
          {/* <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div> */}
        </div>
        <div className='flex gap-2 font-semibold items-center'>
          <h5 className='flex items-center '><span className='mr-2 text-lg'><CiClock2 /></span> {preparing_time}</h5>
          <h5 className='flex items-center'><span className='mr-2 text-lg'><FaFire /></span>{calories}</h5>
        </div>
        <button className='btn  bg-green-500 text-white rounded-full hover:bg-purple-500'>Want to Cook</button>
      </div>
    </div>
  )
}
