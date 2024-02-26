import React from 'react'

const HeaderSignup = () => {
  return (
    <header className='flex items-center z-50 absolute w-full'>
        <div>
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        </div>

        <div className='flex items-center absolute right-3'>
            <div className='px-2'>
            <select name="language" id="language" className='bg-transparent outline outline-1 outline-white text-white p-1'>
                <option value="English">English</option>
                <option value="Luganda">Luganda</option>
            </select>
            </div>
            <div>
                <button className='bg-[#f01621] text-base p-1 rounded-sm'>
                    Sign In
                </button>
            </div>
        </div>
    </header>
  )
}

export default HeaderSignup