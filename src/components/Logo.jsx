import React from 'react'

function Logo() {
  return (
    <div  >
       <div className='d-flex justify-content-between'>
            <p  style={{paddingLeft:'5rem', paddingBottom:'2rem',fontSize:'22px'}}><span className='lo'>Follow Microsoft</span><a href=""><i class="fa-brands fa-facebook-f ps-3 text-black"></i></a> <a href=""><i class="fa-brands fa-x-twitter ps-3 text-black"></i></a> <a href=""><i class="fa-brands fa-youtube ps-3 text-black"></i></a></p>
            <button  className=' p-2 border border-0 ' style={{backgroundColor:'gray', paddingLeft:'51rem', height:'2.5rem'}} ><a style={{textDecoration:'none'}} className='text-white' href=""><i class="fa-solid fa-arrow-up"></i>  Back to Top</a></button>

       </div> 

       
    </div>
    
  )
}

export default Logo