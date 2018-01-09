import image1 from "../parkblvde.jpg"
import image2 from "../Cherokee.jpeg"

const apartments = [
    {
        id: 1,
        name: 'Park Blvd East',
        details: {
            size: 'one-bedroom, one bath, 670 sqft',
            ammenities: 'washer/dryer in unit, dishwasher, allows pets',
            location: 'East village downtown San Diego'
        },
        images: image1
    },
    {
        id: 2,
        name: 'Cherokee Apartments',
        details: {
            size: 'two-bedroom, one bath, 750 sqft',
            ammenities: 'washer/dryer onsite, no dishwasher, allows small pets',
            location: 'close to restaurants and bars in North Park'
        },
        images: image2
    }
]

export default apartments
