import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div className=''>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
              <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracking activeStep={3}/>
        </div>

        <Grid container className='space-y-5'>
            {[1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>

                <Grid item xs={6}>
                    <div className='flex items-center space-x-5'>
                        <img className='w-[5rem] h-[5rem] object-top object-cover' src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Product Title</p>
                            <p className='spaxe-x-5 opacity-50 text-xs font-semibold'><span>Color: Black  </span> <span>Size: M</span></p>
                            <p>Seller: Nike</p>
                            <p>₹1099</p>
                        </div>
                    </div>

                </Grid>

                <Grid item>
                    <Box sx={{color: deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                        <span>Rate & Review Product</span>

                    </Box>

                </Grid>

            </Grid>)}
            

        </Grid>
    
    </div>
  )
}

export default OrderDetail
