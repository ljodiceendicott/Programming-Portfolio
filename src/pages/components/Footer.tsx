import ContactForm from "~/pages/components/Contact-Form";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className="main-background w-screen">
      <div className="row">
        <div className="col lef py-2.5 pl-4">
          <h1 className="text-lg">Luke Jodice</h1>
          <h2 className="text-sm">Software Engineer - Software Developer</h2>
          <div>This is where My Socials will go</div>
        </div>

        <div className="col rig">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
