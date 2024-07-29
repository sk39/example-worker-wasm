import styles from "./ExampleCard.module.scss";
import type { ExampleItem } from "~/lib";

interface Props {
  item: ExampleItem;
}

export function ExampleCard({ item }: Props) {
  return (
    <div className={styles.card}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span>FibValue: {item.fibValue}</span>
      <span>CreatedAt: {item.createdAt}</span>
      <span>UpdatedAt: {item.updatedAt}</span>
    </div>
  );
}
