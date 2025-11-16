interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  return (
    <main>
      <h1>Blog: {params.slug}</h1>
      <p>This is sample content for the blog.</p>
    </main>
  );
}
