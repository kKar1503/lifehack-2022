import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import axios from "axios";

function EventDetails({ router }) {
  const [event, setEvent] = useState({});

  const fetchData = async () => {
    console.log(router.query.id);
    return await axios.get(
      `http://localhost:4000/api/v1/event/${router.query.id}`
    );
  };
  useEffect(() => {
    let mounted = true;
    if (router.query.id) {
      fetchData().then((res) => {
        if (mounted)
          setEvent(res.data.data);
      });
    }

    return () => (mounted = false);
  }, []);

  return <div>{event.organiser}</div>;
}
export default withRouter(EventDetails);
