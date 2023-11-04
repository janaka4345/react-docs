const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function Page() {
  const list = products.map((product) => (
    <li
      className={`${
        product.isFruit ? "text-red-500" : "text-green-500"
      } bg-gray-200`}
      key={product.id}
    >
      {product.title}
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
}
