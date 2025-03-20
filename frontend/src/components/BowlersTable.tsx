import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlersTable() {
  const [bowlers, setBowlers] = useState<Bowler[] | null>(null);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch('http://localhost:4000/Bowling/FilteredBowlers');
      const data = await response.json();
      setBowlers(data.bowlers);
    };

    fetchBowlers();
  }, []);

  if (bowlers === null) {
    return <p>Loading...</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {bowlers.map((b) => (
          <tr key={b.bowlerID}>
            <td>{`${b.bowlerFirstName} ${b.bowlerMiddleInit ?? ''} ${b.bowlerLastName}`}</td>
            <td>{b.team.teamName}</td>
            <td>{b.bowlerAddress}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BowlersTable;
