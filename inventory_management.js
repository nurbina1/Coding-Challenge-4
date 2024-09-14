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

function updateStock(product, unitsSold){
    product.quantity -= unitsSold;
    if(product.quantity <= 0){
        product.quantity = 0; // to ensure that it can't be a negative number
        console.log("${product.name} is now Out of Stock");
    }
    else if(product.quantity <= product.lowStockLevel){
        console.log("${product.name} is Low Stock with ${product.quantity} units left") 
    }
    else {
        console.log("${product.name} has ${product.quantity} units")
    }
}
// Commit message: "Create updateStock function"

function checkLowStock(inventory){
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].quantity < inventory[i].lowStockLevel){
            console.log("${inventory[i].name} is in Low Stock with only ${inventory[i].quantity} units left")
        }
    }
}

// Commit message: "Create checkLowStock function"

function calculateInventoryValue(inventory){
    let value = 0; // we initialize the value here
    for(let i = 0; i < inventory.length; i++){
        const product = inventory[i];
        value += product.price * product.quantity;
    }
    return value;
}

//Commit message: "Create calculateInventoryValue function"
