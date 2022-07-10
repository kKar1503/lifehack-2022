import React, { useEffect } from "react";
import { withRouter } from 'next/router'

function EventDetails({router}) {
  
  useEffect(() => {
    console.log(router.query.text);
}, [router.query]);
 
  
  return <div>{router.query.text}</div>;
}
export default withRouter(EventDetails)