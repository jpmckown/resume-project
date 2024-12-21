type Experience = {
  company: string;
  location: string;
  type: "contract" | "full-time";
  industry: string;
  date: {
    from: string;
    to: string;
  };
  title: string;
  skills: string[];
  synopsis?: string;
  accomplishments?: string[];
  projects?: Experience[];
};
