import { useContext } from "react";
import { CandidateContext } from "../contexts/candidates";

export default function useNewCandidate() {
  const candidateContext = useContext(CandidateContext);
  if (!candidateContext) {
    throw new Error(
      "useCandidate must be used inside a ReloadContext Provider"
    );
  }

  return candidateContext;
}
