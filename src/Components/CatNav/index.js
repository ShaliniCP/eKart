import { useDispatch, useSelector } from 'react-redux'
import './_cat-nav.scss'
import categorySlice from '../../Redux/Category/categorySlice'
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';
import { Link } from 'react-router-dom';

const CatNav=()=>{
const categories=useSelector(state=>state.categoryReducer.categories);
const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getCategories())
},[])

    return(
        <>
        <div className='cat-nav-container container'>
            <ul>
            <li className='list-items'>
                    <Link to='/'>Home</Link>
                </li>
                {
                    categories.map((products)=>{
                        if(products.parent_category_id===null){
                            return(
                                <li className='list-items'><a href='#'>{products.category}</a></li>
                            )
                        }
                       
                    })
                }
                

            </ul>
        </div>
        </>
    )
}
export default CatNav;