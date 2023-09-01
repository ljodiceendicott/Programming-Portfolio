import Header from "~/pages/components/Header";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header />
      <body className="align-center text-center">
        <h2 className="py-6 pt-20 text-3xl">Hello</h2>
        <h4 className="text-xl">
          my name is Luke Jodice. I am a 22 year old recent graduate, Looking to
          find opportinities in the field of Software Engineering.
          <br />
          This is my portfolio, which contains my previous projects,
          experiences, as well as other things related to my development of
          software engineering skils.
        </h4>

        <h2 className="text-3xl">Projects</h2>
      </body>
    </>
  );
}
