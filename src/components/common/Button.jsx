import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-red text-white hover:bg-ink",
  dark: "bg-ink text-white hover:bg-brand-red",
  light: "bg-white text-ink hover:bg-brand-red hover:text-white",
  outline: "border border-ink/15 bg-white/70 text-ink hover:border-brand-red hover:text-brand-red"
};

export default function Button({ children, to, href, variant = "primary", className = "", ...props }) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
