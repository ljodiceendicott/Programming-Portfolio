import Image from "next/image";
import Link from "next/link";
import Header from "~/pages/components/Header";
import ContentHeader from "../../components/ContentHeader";

import GitMain from "./src/Gitfast.png";
import Gitlocal from "./src/gitfastlocal.png";
import Gitremote from "./src/gitfastremote.png";

export default function GitFast() {
  return (
    <div>
      <Header />
      <ContentHeader
        name="GitFast"
        technologies="Python, Bash"
        description=""
      />
      <div>
        <Link href="https://github.com/ljodiceendicott/Gitfast">
          Repository
        </Link>
      </div>
      <div id="gallery" className="grid-flow-row space-x-3">
        <Image src={GitMain} width={50} height={50} alt="" />
        <Image src={Gitlocal} width={50} height={50} alt="" />
        <Image src={Gitremote} width={50} height={50} alt="" />
      </div>
    </div>
  );
}
