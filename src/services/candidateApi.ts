import { instance, candidateData } from "./api";

export async function signupCandidate(data: candidateData) {
  const response = await instance.post("/candidates/create", data);
  return response.data;
}

export async function getCandidates() {
  const response = await instance.get("/candidates/get");
  return response.data;
}
