import React from 'react'
import { useRouteError } from "react-router-dom";

const Nopage = () => {

    const error = useRouteError();
    console.error(error);
  return (
    <div className='error-page center flex flex-center full-height flex-middle'>
        <div>
        <h1>Ooops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  )
}

export default Nopage