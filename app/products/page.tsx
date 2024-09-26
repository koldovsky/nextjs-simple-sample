interface Product {
    id: number;
    title: string;
}

export default async function ProductsPage() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await res.json();

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    );
}