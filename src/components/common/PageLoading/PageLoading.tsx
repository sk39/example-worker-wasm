import styles from "./PageLoading.module.scss";

interface Props {
  loading?: boolean;
}

export function PageLoading({ loading }: Props) {
  if (!loading) return undefined;
  return (
    <div className={styles.disabled}>
      <div className={styles.wrapper}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.shadow} />
        <div className={styles.shadow} />
        <div className={styles.shadow} />
      </div>
    </div>
  );
}
