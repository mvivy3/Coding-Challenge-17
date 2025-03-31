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
