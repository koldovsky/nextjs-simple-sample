interface ProductPageProps {
    params: { id: string };
}

interface Product {
    id: number;
    title: string;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    );
}