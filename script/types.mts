export type DLMeet = 'doha' | 'birminghamIndoor';

export type AthleticsEvent =
  | '100m Women'
  | '100m Men'
  | '100m H Women'
  | '110m H Men'
  | '200m Women'
  | '200m Men'
  | '400m Women'
  | '400m Men'
  | '400m H Women'
  | '400m H Men'
  | '800m Women'
  | '800m Men'
  | '1500m Women'
  | '1500m Men'
  | '3000m Women'
  | '3000m Men'
  | '3000m SC Women'
  | '3000m SC Men'
  | '5000m Women'
  | '5000m Men'
  | "Women's 60 m"
  | "Men's 60 m"
  | "Men's 60 m Hurdles"
  | "Men's 400 m"
  | "Women's 800 m"
  | "Women's 1000 m"
  | "Men's 1500 m"
  | "Women's 3000 m";

export type Entrant = {
  firstName: string;
  lastName: string;
  id: string;
  pb: string | null;
  sb: string | null;
  nat: string;
};

export type ResultEntrant = {
  mark: string;
  place: number;
  notes: string;
  entrant: Entrant;
};

export type Entries = {
  [k in DLMeet]?: {
    [k in AthleticsEvent]?: {
      entrants: Entrant[];
      date: string;
      results?: ResultEntrant[];
    };
  };
};

export type MeetCache = {
  [k in DLMeet]: {
    schedule?: string;
    resultsSchedule?: string;
    events: {
      [k in AthleticsEvent]?: {
        startlist?: string;
        results?: string;
      };
    };
    ids: { [name: string]: string };
  };
};
