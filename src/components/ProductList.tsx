import Product from "./Product";

const ProductList: React.FC = () => {
  const products: Product[] = [
    {
      name: "PS 5",
      description: "Good for playing GTA V before GTA VI",
      price: "$450",
      imageUrl:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Xiaomi 13T",
      description: "Best Mid Range Product From Xiaomi.",
      price: "$428",
      imageUrl:
        "https://images.unsplash.com/photo-1695733323412-05920b3eef3d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Iphone 16",
      description: "Perfect for insecure losers who needs extra validation.",
      price: "$999999",
      imageUrl:
        "https://images.unsplash.com/photo-1727093493751-73e913a3dd82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "PS 2",
      description: "Best console from sony, Nostalgia:(",
      price: "$122",
      imageUrl:
        "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fantech leviosa MCX 01",
      description: "good quality for song cover",
      price: "$24,46",
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_995,h_665/https://fantech.ph/wp-content/uploads/2021/01/mcx01-2-min.png",
    },
    {
      name: "FL STUDIO",
      description: "MAKE MUSIC FROM FL STUDIO!!!!.",
      price: "$179",
      imageUrl:
        "https://www.image-line.com/wp-content/uploads/2020/09/GSW_YouTubeThumb-1536x864.png",
    },
  ];
  return (
    // <> == fragments
    <>
      <h1>Product List</h1>
      {products.map((product, index) => {
        // ... == spread syntax
        return <Product key={index} {...product} />;

        // gini juga bisa
        // return <Product key={index} name={product.name} price={product.price} description={product.description} imageUrl={product.imageUrl}  />
      })}
    </>
  );
};

export default ProductList;
