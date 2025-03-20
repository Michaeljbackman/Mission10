import Header from './components/header';
import BowlersTable from './components/BowlersTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="center-screen">
      <div className="container">
        <Header />
        <BowlersTable />
      </div>
    </div>
  );
}

export default App;
