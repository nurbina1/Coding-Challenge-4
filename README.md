# Coding-Challenge-4
a system that tracks products in the inventory, updates stock levels after sales, and alerts when stock levels are low. Additionally, the system should calculate the total value of the remaining stock for each product type.

// Test displayProductDetails
displayProductDetails(inventory[0]);

// Test updateStock
updateStock(inventory[0], 1995);

// Test checkLowStock
checkLowStock(inventory);

// Test calculateInventoryValue
const totalValue = calculateInventoryValue(inventory);
console.log(`Total inventory value: $${totalValue}`);

// Test processSale
processSale(inventory, 'Macbook', 5);
processSale(inventory, 'NonExistentProduct', 5);
