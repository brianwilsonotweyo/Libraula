import React from 'react'

const HeaderSignup = () => {
  return (
    <header>
        <div>
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        </div>

        <div>
            <div>
            <select name="language" id="language">
                <option value="English">English</option>
                <option value="Luganda">Luganda</option>
            </select>
            </div>
            <div>
                <button>
                    Sign In
                </button>
            </div>
        </div>
    </header>
  )
}

export default HeaderSignup