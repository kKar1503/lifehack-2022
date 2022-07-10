import React, { useEffect } from "react";
import { withRouter } from 'next/router'

function EventDetails({router}) {
  
  useEffect(() => {
    console.log(router.query.id);
}, [router.query]);
 
  
  return <div>{router.query.id}</div>;
}
export default withRouter(EventDetails)