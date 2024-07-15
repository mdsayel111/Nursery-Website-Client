import { ReactNode, useEffect, useState } from 'react';

import queryString from 'query-string';
import Loader from '../../components/shared/loader/Loader';
import BasicPagination from '../../components/shared/pagination/Pagination';
import ProductCard from '../../components/shared/product-card/ProductCard';
import Searchbar from '../../components/shared/searchbar/Searchbar';
import SelectBox from '../../components/shared/select-box/SelectBox';
import Title from '../../components/shared/title/Title';
import { category, sort } from '../../constants/filter-arr';
import { useGetSearchProductsQuery } from '../../lib/redux/apis/products-api';
import { useAppDispatch, useAppSelector } from '../../lib/redux/hooks';
import { selectProducts, setProduct } from '../../lib/redux/slices/products-slice';
import { TProduct } from '../../types';

const Products = () => {
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()

    // create filterObj for filter data
    const [filterObj, setFilterObj] = useState({
        search: "",
        filter: "",
        sort: "",
        page: 0
    })

    const queryStr = queryString.stringify(filterObj)

    // fetching data
    const { data, isLoading } = useGetSearchProductsQuery(queryStr)

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
        children = products.map((data: TProduct) => <ProductCard {...data} />)
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

    useEffect(() => {
        if (data) {
            dispatch(setProduct(data.data.data))
        }
    }, [data])

    return (
        <div className='mt-16'>
            <Title name='All Products' />
            <div className='flex md:justify-between justify-center items-center gap-4 flex-col md:flex-row mb-16'>
                <div>
                    <Searchbar setSearch={handleSearch} />
                </div>
                <div className='flex gap-4'>
                    <SelectBox title='Filter' data={category} setSelectValue={handleFilter} />
                    <SelectBox title='Sort' data={sort} setSelectValue={handleSort} />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {children}
            </div>
            <div className='mt-16 w-fit mx-auto'>
                <BasicPagination totalData={data?.data?.totalDocument} />
            </div>
        </div>
    );
};

export default Products;