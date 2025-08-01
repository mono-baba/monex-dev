type ArrowRoundedButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ArrowRoundedButtonLink = ({
  href,
  children,
  className
}: ArrowRoundedButtonLinkProps) => {
  return (
    <a
      className={`arrow-rounded-button-link${className ? ` ${className}` : ""}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default ArrowRoundedButtonLink;
