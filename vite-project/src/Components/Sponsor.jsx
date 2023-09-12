import React from 'react'
const style = {
  logo : "md:w-[600px]  w-[250px] mt-[70px]"
}
const Sponsor = () => {
  return (
    <>
      <div className='text-center pt-[5%] '>
        <h1 className='text-[#EA4335] font-bold  text-[30px]  md:text-[60px]'>Sponsors</h1>
        <div className='flex  justify-center  items-center'>
        <img className={style.logo} src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg"  alt="Google Developer Student Clubs logo"/>
        </div>
      </div>
    </>
  )
}

export default Sponsor