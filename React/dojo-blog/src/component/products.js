export default function Product() {
  const service = [
    { id: 1, name: "laptop", price: 300 },
    { id: 2, name: "Desktop", price: 500 },
  ];
  const fruit = ["apple", "banana", "orange"];
  const serviceList = service.map((product) => (
    <h1 key={product.id}>
      {product.name}: ${product.price}
    </h1>
  ));
  const fruitList = fruit.map((fruits, index) => <h2 key={index}>{fruits}</h2>);
  return (
    <div>
      Products: {serviceList}
      <div>
        <h1>My Fruits:</h1> {fruitList}{" "}
      </div>
    </div>
  );
}
