export interface ProblemStatement {
  id: string;
  title: string;
  description: string;
}

export interface Theme {
  id: string;
  name: string;
  icon: string;
  problems: ProblemStatement[];
}

export interface Venue {
  city: string;
  dates: string;
  address: string;
  themes: Theme[];
  connectivity: {
    type: string;
    detail: string;
  }[];
}

export interface TimelineItem {
  activity: string;
  date: string;
  status: 'past' | 'current' | 'upcoming';
}
