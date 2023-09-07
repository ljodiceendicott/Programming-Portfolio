import Image from "next/image";
import Link from "next/link";
import Header from "~/pages/components/Header";
import ContentHeader from "../../components/ContentHeader";

export default function CrowdWatch() {
  return (
    <div>
      <Header />
      <ContentHeader
        name="CrowdWatch"
        technologies="HTML/CSS, Javascript, Python"
        description="A sophisticated tool aimed at enhancing the internal infrastructure of businesses by optimizing staffing and providing customers with real-time insights into business popularity."
      />
      <div>
        <Link href="https://github.com/ljodiceendicott/CrowdWatch">
          Repository
        </Link>
        <Link href="https://docs.google.com/document/u/1/d/e/2PACX-1vRTV-NPqKuE_ZPC1UbwoRSEr2qawrUnvC-V6Zrq60OuKGlauEKXZC211aPnS4S6dEEOjoETfdSVDvTg/pub">
          Thesis Document
        </Link>
      </div>
      <div id="gallery" className="grid-flow-row space-x-3">
        <Image
          src="../crowdwatch/src/dashboard.png"
          width={50}
          height={50}
          alt=""
        />
        <Image
          src="../crowdwatch/src/analyticspage.png"
          width={50}
          height={50}
          alt=""
        />
        <Image
          src="../crowdwatch/src/device.png"
          width={50}
          height={50}
          alt=""
        />
      </div>
    </div>
  );
}
