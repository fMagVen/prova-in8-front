import { createContext, useState } from "react";
import { candidateData } from "../services/api/index";

interface ICandidateContext {
  currentCandidate: candidateData;
  setCurrentCandidate: (currentCandidate: candidateData) => void;
  newCandidate: boolean;
  setNewCandidate: (newCandidate: boolean) => void;
}

export const CandidateContext = createContext<ICandidateContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function CandidateProvider({ children }: Props) {
  const [newCandidate, setNewCandidate] = useState<boolean>(false);
  const [currentCandidate, setCurrentCandidate] = useState<candidateData>({
    name: "",
    email: "",
    birth: "",
    phone: "",
  });

  return (
    <CandidateContext.Provider
      value={{
        newCandidate,
        setNewCandidate,
        currentCandidate,
        setCurrentCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}
