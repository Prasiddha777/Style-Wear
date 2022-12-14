import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Prasiddha",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Sakchham",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/model3.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: '2',
      name: "Nike Fit Shirt",
      slug: "nike-fit-shirt",
      category: "Shirts",
      image: "/images/model5.jpg",
      price: 250,
      countInStock: 0,
      brand: "Nike",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '3',
      name: "Nike Hoodie",
      slug: "nike-hoodie",
      category: "Hoodie",
      image: "/images/hoodie.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Nike Jacket",
      slug: "nike-fit-jacket",
      category: "Jacket",
      image: "/images/jacket.jpg",
      price: 65,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Nike Air pant",
      slug: "nike-pant",
      category: "Pant",
      image: "/images/pant3.jpg",
      price: 65,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Nike pant",
      slug: "nike-fit-pant",
      category: "Pants",
      image: "/images/pant.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Adidas Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/pant1.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: '4',
      name: "Puma Pant",
      slug: "puma-fit-pant",
      category: "Pants",
      image: "/images/pant2.jpg",
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
