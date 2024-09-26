import Counter from "@/app/components/Counter";

interface PostPageProps {
    params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
    const { id } = params;

    return (
        <>
            <p>Пост: {id}</p>
            <Counter />
        </>
    )
}
