
export const Nutrition = () => {
    return (
        <div className='m-7 ml-8 mr-8'>
            <h2 className='text-3xl font-youngSerif text-dark-raspberry'>Nutrition</h2>
            <p className='font-outfit my-5'>The table below shows nutritional values per serving without the additional fillings.</p>
            <table className='font-outfit table-fixed'>
                <tbody className='divide-y'>
                    <tr className=''>
                        <td className='pb-3 pl-9'>Calories</td>
                        <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry desktop:pl-60 desktop:pr-64 desktop:pt-1'>277kcal</td>
                    </tr>
                    <tr className=''>
                        <td className='pl-9 pb-3 pt-3'>Carbs</td>
                        <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry desktop:pl-60 desktop:pr-64'>0g</td>
                    </tr>
                    <tr>
                        <td className='pl-9 pb-3 pt-3'>Protein</td>
                        <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry desktop:pl-60 desktop:pr-64'>20g</td>
                    </tr>
                    <tr>
                        <td className='pl-9 pb-3 pt-3 desktop:pb-10'>Fat</td>
                        <td className='pb-3 pl-16 pr-24 font-bold text-dark-raspberry desktop:pl-60 desktop:pr-64'>22g</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
