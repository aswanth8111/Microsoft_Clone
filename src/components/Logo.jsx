import React from 'react'

function Logo() {
  return (
    <div  >
       <div className='d-flex justify-content-between'>
            <p  style={{paddingLeft:'5rem', paddingBottom:'2rem',fontSize:'22px'}}><span className='lo'>Follow Microsoft</span><a href="https://www.facebook.com/MicrosoftIndia/"><i class="fa-brands fa-facebook-f ps-3 text-black"></i></a> <a href="https://twitter.com/Microsoft?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa-brands fa-x-twitter ps-3 text-black"></i></a> <a href="https://www.youtube.com/MICROSOFT"><i class="fa-brands fa-youtube ps-3 text-black"></i></a></p>
            <button  className=' p-2 border border-0 ' style={{backgroundColor:'gray', paddingLeft:'51rem', height:'2.5rem'}} ><a style={{textDecoration:'none'}} className='text-white' href=""><i class="fa-solid fa-arrow-up"></i>  Back to Top</a></button>

       </div> 

       
    </div>
    
  )
}

export default Logo