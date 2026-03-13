import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function Heading1({ children, className = "" }: TypographyProps) {
  return (
    <h1
      className={` text-[32px] ipad-vertical:text-[92.68px] font-normal leading-[92%] ${className}`}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className = "" }: TypographyProps) {
  return (
    <h2
      className={`font-light text-[32px] ipad-vertical:text-[64px] leading-[92%] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className = "" }: TypographyProps) {
  return (
    <h3
      className={`text-3xl ipad-vertical:text-[32px] font-light leading-[140%] ${className}`}
    >
      {children}
    </h3>
  );
}

export function Heading4({ children, className = "" }: TypographyProps) {
  return (
    <h4 className={`text-[28px]  leading-[150%] ${className}`}>{children}</h4>
  );
}

export function Heading5({ children, className = "" }: TypographyProps) {
  return (
    <h5 className={`text-[20px]  leading-[92%] ${className}`}>{children}</h5>
  );
}

export function Heading6({ children, className = "" }: TypographyProps) {
  return (
    <h5 className={`text-lg font-light leading-[140%] ${className}`}>
      {children}
    </h5>
  );
}

export function BodySmallRegular({
  children,
  className = "",
}: TypographyProps) {
  return <p className={`text-sm leading-[155%]  ${className}`}>{children}</p>;
}

export function BodyXSmallRegular({
  children,
  className = "",
}: TypographyProps) {
  return <p className={`text-xs leading-[155%]  ${className}`}>{children}</p>;
}

export function BodyXSmallMedium({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-xs font-medium leading-[155%]  ${className}`}>
      {children}
    </p>
  );
}

export function BodySmallMedium({ children, className = "" }: TypographyProps) {
  return (
    <p
      className={`text-sm leading-[155%] font-medium tracking-[2px]  ${className}`}
    >
      {children}
    </p>
  );
}
export function BodySmallSemibold({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-sm leading-[155%] font-semibold  ${className}`}>
      {children}
    </p>
  );
}

export function BodyMediumRegular({
  children,
  className = "",
}: TypographyProps) {
  return <p className={`text-base leading-[144%]  ${className}`}>{children}</p>;
}
export function BodyMediumSemibold({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-base leading-[160%] font-semibold  ${className}`}>
      {children}
    </p>
  );
}

export function BodyMediumMedium({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-base font-medium leading-[140%]  ${className}`}>
      {children}
    </p>
  );
}

export function BodyLargeMedium({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-lg  leading-[155%] font-medium ${className}`}>
      {children}
    </p>
  );
}
export function BodyLargeMedium2({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p
      className={`ipad-vertical:text-lg tracking-[2px] font-medium ${className}`}
    >
      {children}
    </p>
  );
}

export function BodyLargeRegular({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`text-lg font-normal leading-[155%] ${className}`}>
      {children}
    </p>
  );
}
