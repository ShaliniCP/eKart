import './_product.scss'

const Products=()=>{
    const productData=[
        {
            pName:'Shirt',
            price:45,
            img:'shirt.webp'
        },
        {
            pName:'Pant',
            price:35,
            img:'pant1.webp'
        },
        {
            pName:'Sandals',
            price:15,
            img:'sandals.webp'
        },
        {
            pName:'Perfume',
            price:25,
            img:'perfume1.webp'
        },
        {
            pName:'Lipstick',
            price:10,
            img:'lipstick.webp'
        }
    ]
    return(
        <div className='product-container'>
            {productData.map((product,key)=>{
                return(
                    <div className='mx-5 p-3 product-card'>
                    <div className='product-image-container'>
                        <img src={require('../../assets/images/shop/'+product.img)}/>
                    </div>
                    <div className='product-info'>
                        <h5><a href='#'>{product.pName}</a></h5>
                        <p className='product-price'>${product.price}</p>
                        <div className='product-rating'>
                            <i className='fa fa-star'/>
                            <i className='fa fa-star'/>
                            <i className='fa fa-star'/>
                            <i className='fa fa-star'/>
                            <i className='fa fa-star'/>
                        </div>
                    </div>
               </div>
                )
            })}
           
        </div>
    )
}

export default Products