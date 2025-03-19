export default function ProjectDetail({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1>Project Details</h1>
        <p>Project ID: {params.id}</p>
      </div>
    );
  }
  