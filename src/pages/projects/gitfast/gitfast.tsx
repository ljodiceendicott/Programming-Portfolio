import Image from "next/image";
import Link from "next/link";
import Header from "~/pages/components/Header";
import ContentHeader from "../../components/ContentHeader";

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
        <Image src="../gitfast/src/Gitfast.png" width={50} height={50} alt="" />
        <Image
          src="../gitfast/src/gitfastlocal.png"
          width={50}
          height={50}
          alt=""
        />
        <Image
          src="../gitfast/src/gitfastremote.png"
          width={50}
          height={50}
          alt=""
        />
      </div>
    </div>
  );
}
