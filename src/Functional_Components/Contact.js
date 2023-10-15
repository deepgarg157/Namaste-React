import { useEffect } from "react"

const Contact=()=>{

    useEffect(()=>{
        fetchRandomData()
    })

    const fetchRandomData = async ()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      
        const data = await response.json();
        console.log(data)
      }
    return(
        <div>
            <h1>This is a Contact us Page</h1>
        </div>
    )
}

export default Contact;