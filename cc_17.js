// Task 1: Create A Customer Class
class Customer {
    constructor(name, email) {
      this.name = name; // string
      this.email = email; // string
      this.purchaseHistory = []; // array
    }
  
  addPurchase(amount) { // Adds a purchase amount to purchase history
    this.purchaseHistory.push(amount);
  }
  getTotalSpent() { // Returns total amount spent
    return this.purchaseHistory.reduce((total, purchase) => total + purchase, 0);
  }
  }
  // Create a new customer
  const customer1 = new Customer("Cinnamon Queen", "cinnamonqueen@yahoo.com");
  customer1.addPurchase(25); // purchase amount
  customer1.addPurchase(50); // purchase amount
 console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);

   
