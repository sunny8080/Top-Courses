const Filter = ({ filterData, curCategory, setCurCategory }) => {
    function categoryHandler(title) {
        setCurCategory(title);
    }

    return (
        <div className="w-11/12 flex justify-center mx-auto flex-wrap max-w-max space-x-4 gap-y-4 py-4">
            {
                filterData.map((category) => (
                    <button

                        className={` text-lg py-1 px-2 font-medium bg-black text-white border-2 rounded-md hover:bg-opacity-50 transition-all duration-200
                        ${category.title === curCategory ?
                                "bg-opacity-60 border-white" :
                                "bg-opacity-40 border-transparent"
                            }
                        `}

                        key={category.id}
                        onClick={() => categoryHandler(category.title)}
                    >{category.title}</button>
                ))
            }
        </div>
    )
}

export default Filter;