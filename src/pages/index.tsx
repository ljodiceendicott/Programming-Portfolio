import Header from "~/pages/components/Header";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div>
        <Header />
        <h2>Hello</h2>
        <h4>
          my name is Luke Jodice. I am a 22 year old recent graduate, Looking to
          find opportinities in the field of Software Engineering.
          <br />
          <br />
          This is my portfolio, which contains my previous projects,
          experiences, as well as other things related to my development of
          software engineering skils.
        </h4>
        </div>
        <div>
      <h2>Experience</h2>
      
      </div>

    </>
  );
}
