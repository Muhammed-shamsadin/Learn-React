import { useParams } from 'react-router-dom';


export default function DynamicPage() {
  const { id } = useParams();
  return (
    <div style={{ padding: 24 }}>
      <h2>Dynamic Page</h2>
      <p>This is a dynamic page for ID: <b>{id}</b></p>
    </div>
  );
}
