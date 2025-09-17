const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    name: "Laptop Lenovo",
    price: 1500,
    description: "Un ordinateur portable puissant pour le travail et le gaming",
  },
  {
    name: "iPhone 14",
    price: 3500,
    description: "Dernier iPhone avec de hautes performances",
  },
  {
    name: "Casque Bluetooth",
    price: 200,
    description: "Casque sans fil avec une qualité sonore exceptionnelle",
  },
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("✅ Produits insérés !");
  mongoose.connection.close();
}

seedDB();
