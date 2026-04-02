import { useState } from 'react'

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        type="button" 
        className="searchBoxToggler icon-btn"
        onClick={() => setIsOpen(true)}
      >
        <i className="far fa-search"></i>
      </button>
      
      {isOpen && (
        <div className="popup-search-box d-lg-block">
          <button 
            className="searchClose border-theme text-theme"
            onClick={() => setIsOpen(false)}
          >
            <i className="fal fa-times"></i>
          </button>
          <form action="#">
            <input type="text" className="border-theme" placeholder="What are you looking for" />
            <button type="submit"><i className="fal fa-search"></i></button>
          </form>
        </div>
      )}
    </>
  )
}

export default SearchBox
