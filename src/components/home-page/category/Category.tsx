import Title from "../../shared/title/Title";


const Category = () => {
    return (
        <div className='mt-16'>
            <Title name='Category'/>
            <div className='grid grid-cols-3 lg:grid-cols-6'>
                <div className='flex flex-col gap-4 justify-center items-center bg-primary hover:bg-secondary cursor-pointer w-fit p-4 rounded-md'>
                    <img src="/fruit.jpg" alt="" className='h-40 w-40' />
                    <p className='text-2xl font-semibold text-white'>Fruit</p>
                </div>
                <div>
                    <div className='flex flex-col gap-4 justify-center items-center bg-primary hover:bg-secondary cursor-pointer w-fit p-4 rounded-md'>
                        <img src="/flower.jpg" alt="" className='h-40 w-40' />
                        <p className='text-2xl font-semibold text-white'>Flower</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4 justify-center items-center bg-primary hover:bg-secondary cursor-pointer w-fit p-4 rounded-md'>
                        <img src="/evergreen.jpg" alt="" className='h-40 w-40' />
                        <p className='text-2xl font-semibold text-white'>Evergreen</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4 justify-center items-center bg-primary hover:bg-secondary cursor-pointer w-fit p-4 rounded-md'>
                        <img src="/ornamental.jpg" alt="" className='h-40 w-40' />
                        <p className='text-2xl font-semibold text-white'>Ornamental</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4 justify-center items-center bg-primary hover:bg-secondary cursor-pointer w-fit p-4 rounded-md'>
                        <img src="/shade.jpg" alt="" className='h-40 w-40' />
                        <p className='text-2xl font-semibold text-white'>Shade</p>
                    </div>
                </div>
                <div>
                
                <div className='flex flex-col gap-4 justify-center items-center bg-primary hover:bg-secondary cursor-pointer w-fit p-4 rounded-md'>
                        <img src="/tropical.jpg" alt="" className='h-40 w-40' />
                        <p className='text-2xl font-semibold text-white'>Tropical</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;