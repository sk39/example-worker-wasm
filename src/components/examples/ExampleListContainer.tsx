import styles from "./ExampleListContainer.module.scss";
import { ExampleGrid } from "./_sub/ExampleGrid";
import { Button } from "~/components/common/Button/Button";
import { PageLoading } from "~/components/common/PageLoading/PageLoading";
import type { ExampleItem } from "~/lib";

interface Props {
  items: ExampleItem[];
  pending: boolean;
  onLoad: () => void;
  onClear: () => void;
}

export function ExampleListContainer({
  items,
  pending,
  onLoad,
  onClear,
}: Props) {
  return (
    <div className={styles.container}>
      <PageLoading loading={pending} />
      <div className={styles.operation}>
        <Button width={120} disabled={pending} onClick={onLoad}>
          Load
        </Button>
        <Button width={120} disabled={pending} onClick={onClear}>
          Clear
        </Button>
      </div>
      <div className={styles.list}>
        <ExampleGrid items={items} />
      </div>
    </div>
  );
}
