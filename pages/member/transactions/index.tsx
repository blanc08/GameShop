import Sidebar from '../../../components/organisms/Sidebar';
import TransactionsContent from '../../../components/organisms/TranscationsContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar ActiveMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
