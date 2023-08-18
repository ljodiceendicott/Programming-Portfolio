import Header from "~/pages/components/Header";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main>
        <Header />
        <body>This is for contra</body>
      </main>
    </>
  );
}
