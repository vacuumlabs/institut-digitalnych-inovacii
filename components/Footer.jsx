const Footer = () => {
  return (
    <footer className="pt-12 pb-8">
      <div className="container mx-auto">
        <div className="border-t-gray block w-full space-y-8 border-t-2 text-center">
          <p className="pt-8">
            <b className="mb-2 inline-block">Kontakt</b>
            <br />
            SKY PARK Offices
            <br />
            Bottova 2622/2
            <br />
            811 09 Bratislava
          </p>
          <p>
            <b>Tel:</b>{" "}
            <a href="tel:+421910324516" className="hover:underline">
              +421 910 324 516
            </a>
            <br />
            <b>E-mail:</b>{" "}
            <a href="mailto:ingo@idi.sk" className="hover:underline">
              info@idi.sk
            </a>
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a href="#" target="_blank">
              <img src="/assets/facebook.svg" alt="facebook" />
            </a>
            <a href="#" target="_blank">
              <img src="/assets/linkedin.svg" alt="linkedin" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#" target="_blank" className="underline">
                legal notice
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="underline">
                privacy policy
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="underline">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
