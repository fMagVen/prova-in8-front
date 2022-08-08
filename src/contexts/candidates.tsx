import { createContext, useState } from "react";

interface ICandidateContext {
  newCandidate: boolean;
  setNewCandidate: (newCandidate: boolean) => void;
}

export const CandidateContext = createContext<ICandidateContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function CandidateProvider({ children }: Props) {
  const [newCandidate, setNewCandidate] = useState<boolean>(false);

  return (
    <CandidateContext.Provider value={{ newCandidate, setNewCandidate }}>
      {children}
    </CandidateContext.Provider>
  );
}
