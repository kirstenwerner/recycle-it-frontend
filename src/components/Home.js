import React from 'react';
import { Container } from 'semantic-ui-react'

const Home = () => {

  return (
    <Container>
    <br />
    <br />
      <div>
        <h2>Welcome to <strong>Recycle It!</strong></h2>
        <p>Recycle It! is designed to help you find where you can dispose of your material waste, somewhere besides the landfills.</p>
        <p>Simply click on the <strong>Recycle It!</strong> button above, enter your zip code and select the material you'd like to dispose of
          from the dropdown search bar, and all of the locations in your area that accept your selected material will show up on the map!
        </p>
        <p>To find out more information about a recycle center, such as address, contact information, or hours of operation, click on the recycle center marker
          on the map.
        </p>
        <h4>Happy Recycling!</h4>
      </div>
    </Container>
  )
}

export default Home;
