import styles from "../../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img
              src="icons/body.svg"
              alt="Mão segurando um peso de exercício para cima"
            />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 2 minutos</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxContainer}>
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Seta para cima verde" />
              Avance de nível completado os desafios
            </p>
          </div>
        </div>
      )}
    </>
  );
}
