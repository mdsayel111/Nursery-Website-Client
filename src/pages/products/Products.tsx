import { ReactNode, useState } from 'react';

import Loader from '../../components/shared/loader/Loader';
import BasicPagination from '../../components/shared/pagination/Pagination';
import ProductCard from '../../components/shared/product-card/ProductCard';
import Searchbar from '../../components/shared/searchbar/Searchbar';
import SelectBox from '../../components/shared/select-box/SelectBox';
import Title from '../../components/shared/title/Title';
import { category } from '../../constants/filter-arr';
import { useGetAllproductsQuery } from '../../lib/redux/apis/products-api';
import { TCart } from '../../types';

const Products = () => {
    // create filterObj for filter data
    const [filterObj, setFilterObj] = useState({
        search: "",
        filter: "",
        sort: ""
    })

    // fetching data
    const { data, isLoading } = useGetAllproductsQuery(undefined)

    // create children variable for dainamically render loader or products
    let children: ReactNode;

    // if isLoading === true, then return loader
    if (isLoading) {
        children = <div className='w-fit mx-auto'>
            <Loader />
        </div>
    }
    // else children = products
    else {
        children = data.data.map((data: TCart) => <ProductCard {...data} />)
    }

    // handle search
    const handleSearch = (search: string) => {
        setFilterObj(prev => ({ ...prev, search }))
    }

    // handle filter
    const handleFilter = (filter: string) => {
        setFilterObj(prev => ({ ...prev, filter }))
    }

    // handle filter
    const handleSort = (sort: string) => {
        setFilterObj(prev => ({ ...prev, sort }))
    }

    console.log(filterObj)

    return (
        <div className='mt-16'>
            <Title name='All Products' />
            <div className='flex md:justify-between justify-center items-center gap-4 flex-col md:flex-row'>
                <div>
                    <Searchbar setSearch={handleSearch} />
                </div>
                <div className='flex gap-4'>
                    <SelectBox title='Filter' data={category} setSelectValue={handleFilter} />
                    <SelectBox title='Sort' data={category} setSelectValue={handleFilter} />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {children}
            </div>
            <div className='mt-16 w-fit mx-auto'>
                <BasicPagination />
            </div>
        </div>
    );
};

export default Products;