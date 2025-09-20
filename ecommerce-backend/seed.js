const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  { name: "Laptop Lenovo", price: 1500, description: "Un ordinateur portable puissant pour le travail et le gaming", category: "Informatique", brand: "Lenovo", image: "https://images.lenovo.com/laptop.jpg" },
  { name: "iPhone 14", price: 3500, description: "Dernier iPhone avec de hautes performances", category: "Téléphone", brand: "Apple", image: "https://images.apple.com/iphone14.jpg" },
  { name: "Casque Bluetooth", price: 200, description: "Casque sans fil avec une qualité sonore exceptionnelle", category: "Audio", brand: "Sony", image: "https://images.sony.com/casque.jpg" },
  { name: "Montre connectée", price: 400, description: "Montre intelligente avec suivi de santé", category: "Accessoire", brand: "Samsung", image: "https://images.samsung.com/montre.jpg" },
  { name: "Chaussures de sport", price: 120, description: "Chaussures confortables pour le running", category: "Sport", brand: "Nike", image: "https://images.nike.com/chaussures.jpg" },
  { name: "Sac à dos", price: 80, description: "Sac à dos résistant pour ordinateur portable", category: "Bagagerie", brand: "Eastpak", image: "https://images.eastpak.com/sac.jpg" },
  { name: "Clavier mécanique", price: 250, description: "Clavier RGB pour gamer", category: "Informatique", brand: "Logitech", image: "https://images.logitech.com/clavier.jpg" },
  { name: "Écouteurs sans fil", price: 150, description: "Écouteurs compacts avec réduction de bruit", category: "Audio", brand: "JBL", image: "https://images.jbl.com/ecouteurs.jpg" },
  { name: "T-shirt coton", price: 40, description: "T-shirt confortable 100% coton", category: "Vêtements", brand: "Zara", image: "https://images.zara.com/tshirt.jpg" },
  { name: "Tablette Samsung", price: 1200, description: "Tablette Android pour le multimédia", category: "Tablette", brand: "Samsung", image: "https://images.samsung.com/tablette.jpg" },
  // Ajoutez autant de produits que vous voulez
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("✅ Produits insérés !");
  mongoose.connection.close();
}

seedDB();
