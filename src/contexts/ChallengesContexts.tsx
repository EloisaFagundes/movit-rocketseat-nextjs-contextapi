import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";

interface ChallengeProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  console.log(activeChallenge);

  function levelUp() {
    setLevel(level + 1);
  }

  const experienceToNextLevel = Math.pow((level + 1)* 4 ,2)

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    console.log(challenge, "challenge");

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null)
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
