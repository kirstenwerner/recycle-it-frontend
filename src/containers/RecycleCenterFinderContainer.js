import React from "react";

import SearchContainer from "./SearchContainer";
import RecycleCentersContainer from "./RecycleCentersContainer";

const RecycleCenterFinderContainer = () => {
  return (
    <div>
      <div className='recycle-center-finder'>
        <SearchContainer />
        <br />
        <RecycleCentersContainer />
      </div>
    </div>
  );
};

export default RecycleCenterFinderContainer;
