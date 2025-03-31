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

 // Task 2: Create a SalesRep Class
  class SalesRep {
    constructor(name) {
        this.name = name; // string
        this.clients = []; // array of customer objects
    }
    addClient(customer) { // adds a customer to the list
        this.clients.push(customer);
    }
    getClientTotal(clientName) { // finds client by name
        const client = this.clients.find(client => client.name === clientName);
        if (client) {
            return client.getTotalSpent(); // returns total spent
        } else {
            console.error(`Client ${clientName} not found`);
            return 0;
        }
    }
  }
  const client1 = new SalesRep("Mabel Sabel"); // client name
  client1.addClient(customer1);
  console.log(`Client: ${client1.name} - ${customer1.name}, Total Spent: $${client1.getClientTotal(`Cinnamon Queen`)}`);

// Task 3: Create a VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel; // string: 'Gold', 'Platinum'
    }
    getTotalSpent() { // override method, returns total spent with 10% loyalty bonus added
        const baseTotal = super.getTotalSpent();
        return baseTotal * 1.10;
    }
}
const vipCustomer1 = new VIPCustomer('Harper Violet', 'harperviolet@gmail.com', 'Platinum');
vipCustomer1.addPurchase(100); // purchase amount
vipCustomer1.addPurchase(200); // purchase amount
console.log(`VIP Customer: ${vipCustomer1.name},  Level: ${vipCustomer1.vipLevel} - Bonus Total: $${vipCustomer1.getTotalSpent().toFixed(2)}`);

// Task 4: Build a Client Report System
// Create regular customer
const customer2 = new Customer('Citrus Sunshine', 'citrussunshine@hotmail.com');
customer2.addPurchase(300); // purchase amount
customer2.addPurchase(400); // purchase amount
// Create VIP customer
const vipCustomer2 = new VIPCustomer('Gerald Kiwi', 'geraldkiwi@yahoo.com', 'Gold');
vipCustomer2.addPurchase(500); // purchase amount
vipCustomer2.addPurchase(600); // purchase amount
// Create a Sales Rep 
const rep2 = new SalesRep('Teddy Turtle');
rep2.addClient(customer1);
rep2.addClient(customer2);
rep2.addClient(vipCustomer1);
rep2.addClient(vipCustomer2);

const allCustomers = [customer1, customer2, vipCustomer1, vipCustomer2];
// Use .reduce() to calculate total revenue from all customers
const totalRevenue = allCustomers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);

// Use .filter() to find customers who spent over $500
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log('High-Spending Customers:', highSpenders.map(cust => cust.name));

// Use .map() to create an array of customer names and total spent
const customerSummary = allCustomers.map(customer => {
  return { name: customer.name, totalSpent: customer.getTotalSpent().toFixed(2) };
});
console.log('Customer Summary:', customerSummary);

