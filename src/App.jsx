import omeletteImg from '../assets/images/image-omelette.jpeg'

export default function App() {
  return (
    <div className="bg-white">
      <img src={omeletteImg} alt="" />
      <div>

        <h1 className="text-4xl font-youngSerif m-8 text-start">
          Simple Omelette Recipe
        </h1>
        <p className='font-outfit m-8'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

        <div className='bg-eggshell font-outfit m-8 p-3 rounded-lg'>
          <h3 className='font-semibold text-dark-raspberry text-xl m-3'>Preparation time</h3>
          <ul className='list-disc'>
            <li className='m-3 pl-3'><strong>Total:</strong> Approximately 10 <br /> minutes</li>
            <li className='m-3 pl-3'><strong>Preparation:</strong> 5 minutes</li>
            <li className='m-3 pl-3'><strong>Cooking:</strong> 5 minutes</li>
          </ul>
        </div>

        <div className='m-8'>
          <h2 className='text-2xl font-youngSerif'>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <hr className='m-8'/>

        <div className='m-8'>
          <h2 className='text-2xl font-youngSerif'>Instructions</h2>
          <ol>
            <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li>Add filling (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>

        <hr className='m-8' />

        <div className='m-8'>
          <h2 className='text-2xl font-youngSerif'>Nutrition</h2>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>227kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

