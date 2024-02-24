import omeletteImg from '../assets/images/image-omelette.jpeg'

export default function App() {
  return (
    <div className="bg-white">
      <img src={omeletteImg} alt="" />
      <div>

        <h1 className="text-4xl font-youngSerif ml-9 mt-10 text-start">
          Simple Omelette Recipe
        </h1>
        <p className='font-outfit ml-9 mr-7 mt-5'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

        <div className='bg-rose-white font-outfit m-8 p-3 rounded-lg'>
          <h3 className='font-semibold text-dark-raspberry text-xl m-3'>Preparation time</h3>
          <ul className='list-disc pl-5'>
            <li className='m-3 pl-3'><strong>Total:</strong> Approximately 10 minutes</li>
            <li className='m-3 pl-3'><strong>Preparation:</strong> 5 minutes</li>
            <li className='m-3 pl-3'><strong>Cooking:</strong> 5 minutes</li>
          </ul>
        </div>

        <div className='m-8'>
          <h2 className='text-3xl font-youngSerif text-dark-raspberry'>Ingredients</h2>
          <ul className='list-disc pl-5 font-outfit'>
            <li className='m-1 pl-4 pt-3'>2-3 large eggs</li>
            <li className='m-1 pl-4 pt-1'>Salt, to taste</li>
            <li className='m-1 pl-4 pt-1'>Pepper, to taste</li>
            <li className='m-1 pl-4 pt-1'>1 tablespoon of butter or oil</li>
            <li className='m-1 pl-4 pt-1'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <hr className='m-8'/>

        <div className='m-8 mb-3'>
          <h2 className='text-3xl font-youngSerif text-dark-raspberry'>Instructions</h2>
          <ol className='font-outfit list-decimal p-5 text-dark-raspberry font-semibold pl-6 pr-0'>
            <li className='pl-4'><p className='font-normal text-black'><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p></li>
            <li className='pl-4 pt-2'><p className='font-normal text-black'><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</p></li>
            <li className='pl-4 pt-2'><p className='font-normal text-black'><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p></li>
            <li className='pl-4 pt-2'><p className='font-normal text-black'><strong>Add filling (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p></li>    
            <li className='pl-4 pt-2'><p className='font-normal text-black'><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p></li>
            <li className='pl-4 pt-2'><p className='font-normal text-black'><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</p></li>
          </ol>
        </div>

        <hr className='m-8 mt-0 mb-6' />

        <div className='m-7 ml-8 mr-8'>
          <h2 className='text-3xl font-youngSerif text-dark-raspberry'>Nutrition</h2>
          <p className='font-outfit my-5'>The table below shows nutritional values per serving without the additional fillings.</p>
          <table className='font-outfit table-fixed'>
            <tbody className='divide-y'>
              <tr className=''>
                <td className='pb-3 pl-9'>Calories</td>
                <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry'>277kcal</td>
              </tr>
              <tr className=''>
                <td className='pl-9 pb-3 pt-3'>Carbs</td>
                <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry'>0g</td>
              </tr>
              <tr>
                <td className='pl-9 pb-3 pt-3'>Protein</td>
                <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry'>20g</td>
              </tr>
              <tr>
                <td className='pl-9 pb-3 pt-3'>Fat</td>
                <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry'>22g</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

