import { Link } from 'react-router-dom';
import { invoices } from '../data/invoices';

const Invoices = () => {
  return (
    <main>
      <h2>Invoices</h2>
      <div style={{ display: 'flex' }}>
        <nav style={{ padding: '1rem', borderRight: '1px solid' }}>
          {invoices.map((invoice) => (
            <Link
              to={`/invoices/${invoice.id}`}
              key={invoice.id}
              style={{ display: 'block', margin: '1rem' }}>
              {invoice.name}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
};
export default Invoices;
