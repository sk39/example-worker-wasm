import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Example</h2>
        <p>WebWorker & WebAssembly</p>
      </div>
      <div className={styles.grid}>
        <HomeLink
          href="/base"
          title="Main"
          body="メインスレッドで処理する基本パターン"
        />
        <HomeLink
          href="/use-worker"
          title="Worker (1)"
          body="時間のかかる変換処理だけをWorkerで行うパターン"
        />
        <HomeLink
          href="/use-worker-fetch"
          title="Worker (2)"
          body="FetchのリクエストもWorkerから行うパターン"
        />
        <HomeLink
          href="/use-wasm-base"
          title="Wasm (Main)"
          body="WebAssemblyを使うパターン。メインスレッドで処理。"
        />
        <HomeLink
          href="/use-wasm-worker"
          title="Wasm (Worker)"
          body="WebAssemblyを使うパターン。Workerで処理。"
        />
      </div>
    </main>
  );
}

function HomeLink({
  href,
  title,
  body,
}: {
  href: string;
  title: string;
  body: string;
}) {
  return (
    <a href={href} className={styles.card}>
      <h2>
        {title}
        &nbsp;<span>-&gt;</span>
      </h2>
      <p>{body}</p>
    </a>
  );
}
