import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-blue text-white shadow-glow hover:-translate-y-0.5 hover:bg-accent-blue/90",
  ghost: "bg-transparent text-text-primary hover:bg-white/5",
  outline:
    "border border-border-color bg-card text-text-primary hover:border-accent-blue hover:bg-card-hover",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary";
  const classes = `${baseClasses} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props) {
    const { href, ...anchorProps } = props;
    const resolvedAnchorProps = anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={classes} href={href} {...resolvedAnchorProps}>
        {children}
      </a>
    );
  }

  const resolvedButtonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...resolvedButtonProps}>
      {children}
    </button>
  );
}
