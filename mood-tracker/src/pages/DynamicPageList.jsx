import { Link } from 'react-router-dom';

const staticData = [
  { id: '1', name: 'Item One', hobby: 'Reading' },
  { id: '2', name: 'Item Two' },
  { id: 'hello', name: 'Item Hello' },
];

export default function DynamicPageList() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Dynamic Page List</h2>
      <ul>
        {staticData.map(item => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
