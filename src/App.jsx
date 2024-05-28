import React, { createContext, useState } from 'react'
import Card from './Components/Card';
import iphone6_image1 from './assets/iphone6_image1.jpg';
import iphone6_image2 from './assets/iphone6_image2.webp';
import iphone6_image3 from './assets/iphone6_image3.webp';
import iphoneX_image1 from './assets/iphoneX_image1.jpg';
import iphoneX_image2 from './assets/iphoneX_image2.jpg';
import iphoneX_image3 from './assets/iphoneX_image3.jpg';
import samsung1 from './assets/samsung1.webp';
import samsung2 from './assets/samsung2.jpg';
import samsung3 from './assets/samsung3.jpg';
import oppo1 from './assets/oppo1.jpg';
import oppo2 from './assets/oppo2.jpg';
import oppo3 from './assets/oppo3.webp';
import huawei1 from './assets/huawei1.webp';
import huawei2 from './assets/huawei2.avif';
import huawei3 from './assets/huawei3.png';


export const mycontext = createContext('');
function App() {
  
  let products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            iphone6_image1,
            iphone6_image2,
            iphone6_image3
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            iphoneX_image1,
            iphoneX_image2,
            iphoneX_image3
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            samsung1,
            samsung2,
            samsung3
        ]
    },
    {
        "id": 4,
        "title": "OPPO F19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            oppo1,
            oppo2,
            oppo3
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            huawei1,
            huawei2,
            huawei3
        ]
    }
]
const [data,setData]=useState(products);

  return (
    <div>
      <mycontext.Provider value={[data,setData]}>
        <Card />
      </mycontext.Provider>
    </div>
  )
}

export default App
