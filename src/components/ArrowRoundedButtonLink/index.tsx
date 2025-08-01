type ArrowRoundedButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ArrowRoundedButtonLink = ({ href, children }:ArrowRoundedButtonLinkProps) => {
  return (
    <a className="arrow-rounded-button-link" href={href}>
      {children}
    </a>
  );
};

export default ArrowRoundedButtonLink;
