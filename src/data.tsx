export interface ProductThumbnailProps {
    productName: string,
    productImage: string,
    productPrice: number
}

export interface ProductCategory{
    category : string,
    products : ProductThumbnailProps[]
}

export const Chocolates: ProductThumbnailProps[]=[
    {
        productName: 'Marks and Spencer',
        productImage: './MarksAndSpencer2.jpeg',
        productPrice: 30

    },
    {
        productName: 'Lindt',
        productImage: './lindt.jpeg',
        productPrice: 15  
    },
    {
        productName: 'Guylian',
        productImage: './Guylian.jpeg',
        productPrice: 25  
    },
    {
        productName: 'Patchi',
        productImage: './Patchi.jpg',
        productPrice: 35 
    }

]

export const Biscuits: ProductThumbnailProps[]=[
    {
        productName: "Walker's",
        productImage: "./Walker's.jpeg",
        productPrice: 14

    },
    {
        productName: 'Tim Tam',
        productImage: './timtam.webp',
        productPrice: 18  
    },
    {
        productName: 'Meiji Hello Panda',
        productImage: './meiji.jpeg',
        productPrice: 10  
    },
    {
        productName: 'Jammie Dodgers',
        productImage: './jammie.png',
        productPrice: 17 
    }

]

export const allFood : ProductCategory[]= [
    {
        category: 'Chocolates',
        products:Chocolates

    },
    {
        category: 'Biscuits',
        products:Biscuits

    },

]

