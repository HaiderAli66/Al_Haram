
import React from "react";
import Hotels from "./Hotels/Hotels";

import Cities_Places from "../Cities_Places/Cities_Places";

const Explore_resturant = () => {
  return (
    <div className="pb-5 pt-3">
     
       <Cities_Places />
      <Hotels title="Trending Hotels" className='mt-5'/>
    </div>
  );
};

export default Explore_resturant;
