import { homepageData } from "../data/homepage";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8">
      <div className="container mx-auto">
        <div className="border-t-gray block w-full space-y-8 border-t-2 text-center lg:flex lg:items-start lg:justify-between lg:space-y-0 lg:pt-8 lg:text-left">
          <p className="pt-8 lg:pt-0">
            <b className="mb-2 inline-block">
              {homepageData.footer.contactDetails.title}
            </b>
            <br />
            <span className="whitespace-pre-line">
              {homepageData.footer.contactDetails.address}
            </span>
          </p>
          <p>
            <b>Tel:</b>{" "}
            <a
              href={`tel:${homepageData.footer.phone.raw}`}
              className="hover:underline"
            >
              {homepageData.footer.phone.pretty}
            </a>
            <br />
            <b>E-mail:</b>{" "}
            <a
              href={`mailto:${homepageData.footer.email}`}
              className="hover:underline"
            >
              {homepageData.footer.email}
            </a>
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a href={homepageData.footer.facebookUrl} target="_blank">
              <img src="/assets/facebook.svg" alt="facebook" />
            </a>
            <a href={homepageData.footer.linkedInUrl} target="_blank">
              <img src="/assets/linkedin.svg" alt="linkedin" />
            </a>
          </div>
          <ul>
            {homepageData.footer.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target={link.openInNewTab ? "_blank" : "_self"}
                  className="underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
