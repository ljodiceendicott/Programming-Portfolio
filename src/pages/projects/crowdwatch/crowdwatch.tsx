import Image from "next/image";
import Link from "next/link";
import Header from "~/pages/components/Header";
import ContentHeader from "../../components/ContentHeader";

import Analytics from "./src/analyticspage.png";
import Dashboard from "./src/dashboard.png";
import Device from "./src/device.png";

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
      <div id="gallery" className="space-x-1 space-y-4 pt-10">
        <Image src={Dashboard} width={600} height={50} alt="" />
        <Image src={Analytics} width={400} height={50} alt="" />
        <Image src={Device} width={400} height={50} alt="" />
      </div>
    </div>
  );
}
