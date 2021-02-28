import styles from "../../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/EloisaFagundes.png"
        alt="minha foto do github"
      />
      <div>
        <strong>Eloisa Fagundes</strong>
        <p>
          <img src="icons/level.svg" alt="ícone seta verde para cima" />
          Level 1
        </p>
      </div>
    </div>
  );
}
