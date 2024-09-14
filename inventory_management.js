const inventory = [
    {
        name: 'Macbook',
        price: 1500,
        quantity: 2000,
        lowStockLevel: 5
    },
    {
        name: "Airpods",
        price: 200,
        quantity: 5000,
        lowStockLevel: 10
    },
    {
        name: "Ipad",
        price: 999,
        quantity: 2500,
        lowStockLevel: 7
    },
    {
        name: "AirTag",
        price: 69,
        quantity: 20000,
        lowStockLevel: 4
    },
    {
        name: "Iphone",
        price: 1200,
        quantity: 35000,
        lowStockLevel: 10
    }
];
// Commit message: "Initialize inventory with product object"

function displayProductDetails(product){
    let stockStatus;
    if(product.quantity <= lowStockLevel){
        stockStatus = "Low Stock";
    } else {
        stockStatus = "In Stock";
    }
    console.log("Product Name: ${product.name}");
    console.log("Price: ${product.price}");
    console.log("Quantity in Stock: ${product.quantity}");
    console.log("Stock Status: ${product.stockStatus}");
}
// Commit message: "Create displayProductDetails function"

