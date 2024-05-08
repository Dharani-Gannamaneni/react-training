import { Table } from "antd"
function Products()
{
   const products = [
        {
          id: 1,
          name: "Smartphone X",
          category: "Electronics",
          price: 799.99,
          description: "A sleek and powerful smartphone with advanced features.",
        },
        {
          id: 2,
          name: "Ultra HD Smart TV",
          category: "Electronics",
          price: 1299.99,
          description: "Experience crystal-clear picture quality with this smart TV.",
        },
        {
          id: 3,
          name: "Wireless Bluetooth Earbuds",
          category: "Electronics",
          price: 99.99,
          description: "Enjoy your favorite music with these wireless earbuds.",
        },
        {
          id: 4,
          name: "Fitness Tracker Watch",
          category: "Electronics",
          price: 49.99,
          description: "Track your daily activity and stay fit with this smartwatch.",
        },
        {
          id: 5,
          name: "Gourmet Coffee Blend",
          category: "Food & Beverage",
          price: 12.99,
          description: "Indulge in the rich flavors of this premium coffee blend.",
        },
        {
          id: 6,
          name: "Artisanal Chocolate Assortment",
          category: "Food & Beverage",
          price: 24.99,
          description: "Experience luxury with this handcrafted chocolate assortment.",
        },
        {
          id: 7,
          name: "Organic Green Tea",
          category: "Food & Beverage",
          price: 8.99,
          description: "Relax and rejuvenate with the soothing taste of organic green tea.",
        },
        {
          id: 8,
          name: "Premium Olive Oil",
          category: "Food & Beverage",
          price: 19.99,
          description: "Elevate your culinary creations with this high-quality olive oil.",
        },
        {
          id: 9,
          name: "Designer Sunglasses",
          category: "Fashion",
          price: 149.99,
          description: "Make a style statement with these chic designer sunglasses.",
        },
        {
          id: 10,
          name: "Leather Messenger Bag",
          category: "Fashion",
          price: 89.99,
          description: "Carry your essentials in style with this classic leather messenger bag.",
        },
        {
          id: 11,
          name: "Cotton Crewneck T-Shirt",
          category: "Fashion",
          price: 19.99,
          description: "Stay comfortable and casual with this soft cotton t-shirt.",
        },
        {
          id: 12,
          name: "Denim Jeans",
          category: "Fashion",
          price: 59.99,
          description: "A wardrobe staple, these denim jeans offer both style and durability.",
        },
        {
          id: 13,
          name: "Stainless Steel Water Bottle",
          category: "Home & Kitchen",
          price: 29.99,
          description: "Stay hydrated on the go with this sleek stainless steel water bottle.",
        },
        {
          id: 14,
          name: "Non-Stick Cookware Set",
          category: "Home & Kitchen",
          price: 79.99,
          description: "Upgrade your kitchen with this high-quality non-stick cookware set.",
        },
        {
          id: 15,
          name: "Memory Foam Mattress",
          category: "Home & Kitchen",
          price: 699.99,
          description: "Experience ultimate comfort and support with this memory foam mattress.",
        },
        {
          id: 16,
          name: "Aromatherapy Diffuser",
          category: "Home & Kitchen",
          price: 39.99,
          description: "Create a relaxing atmosphere with this aromatherapy diffuser.",
        },
        {
          id: 17,
          name: "Professional DSLR Camera",
          category: "Photography",
          price: 1499.99,
          description: "Capture stunning images with this professional-grade DSLR camera.",
        },
        {
          id: 18,
          name: "Compact Mirrorless Camera",
          category: "Photography",
          price: 899.99,
          description: "Take high-quality photos on the go with this compact mirrorless camera.",
        },
        {
          id: 19,
          name: "Camera Tripod",
          category: "Photography",
          price: 49.99,
          description: "Stabilize your shots and unleash your creativity with this camera tripod.",
        },
        {
          id: 20,
          name: "Photography Lighting Kit",
          category: "Photography",
          price: 199.99,
          description: "Achieve professional lighting effects with this photography lighting kit.",
        }
      ];

      const columns = [
        {
          title: 'ID',
          dataIndex: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Category',
          dataIndex: 'category'
        },
        {
          title: 'Price',
          dataIndex: 'price',
        //   render: (price) => `$${price.toFixed(2)}`
        },
        {
          title: 'Description',
          dataIndex: 'description'
        }
      ];
      return (
        <>
            <h1 style={{ textAlign: 'center' }}>List Of Products</h1> 
            <Table dataSource={products} columns={columns} />;
        </>
    )   
}
export default Products;