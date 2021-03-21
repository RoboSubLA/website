import React from 'react'
import Banner from 'react-banner' 
import './Banner.css'

function Navigation(props) {
    return(
      <Banner
        logo="Ricardo Medina"
        url={ props.location.pathname }
        searchBar={false}
        items={[
            { "content": "Home", "url": "/" },
            { "content": "Projects", "url": "/projects" },
            { "content": "Ducks", "url": "/ducks" },
            { "content": "Link w/ Children", "url": "/children", "children": [
                { "content": "John", "url": "/children/john" },
                { "content": "Jill", "url": "/children/jill" },
                { "content": "Jack", "url": "/children/jack" }
            ]}
      ]} />
    )
  }
  
  export default Navigation;