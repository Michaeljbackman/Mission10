export type Team = {
    teamID: number;
    teamName: string;
  };
  
  export type Bowler = {
    bowlerID: number;
    bowlerFirstName: string;
    bowlerMiddleInit?: string;
    bowlerLastName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    team: Team;
  };
  