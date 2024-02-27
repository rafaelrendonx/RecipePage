
export const Container = ({ children }) => {
    return (
        <div>
            <h1 className="text-3xl font-youngSerif ml-9 mt-10 text-start desktop:text-[41px] desktop:mt-5">
                Simple Omelette Recipe
            </h1>
            <p className='font-outfit ml-9 mr-7 mt-5'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

            {children}

        </div>
    )
}
