import Image from "next/image";
import { Container } from "../atoms/Container";
import Link from "next/link";
import { footerColumns } from "@/constant/footer";
import Logo from "../atoms/Logo";
import { BodyMediumMedium, Heading5 } from "../atoms/Typography";

interface IFooterProps {
  variant?: "primary" | "secondary";
}

const Footer: React.FC<IFooterProps> = ({ variant = "primary" }) => {
  return (
    <footer className="w-full bg-[#F8F7F5] font-poppins">
      <Container className="w-full flex flex-col gap-10 ipad-vertical:gap-14">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left - Logo, Description, Contact */}
          <div className="flex flex-col gap-6 lg:w-1/2 ">
            {/* Logo */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Description */}
            <Heading5 className="font-instrument-serif max-w-[242px]">
              We are your digital design partner in crafting digital products to
              impact the future, today.
            </Heading5>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#ABABAB]">Contact</span>
              <a
                href="tel:+6281818837676"
                className="text-sm font-medium text-secondary hover:opacity-70 transition-opacity"
              >
                +62 818 1883 7676
              </a>
              <a
                href="mailto:info@dpopstudio.com"
                className="text-sm font-medium text-secondary hover:opacity-70 transition-opacity"
              >
                info@dpopstudio.com
              </a>
            </div>
          </div>

          {/* Right - Footer Columns */}
          <div className="w-full mt-8 lg:mt-0 lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 flex-1">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <BodyMediumMedium className="font-instrument-sans ">
                  {column.title}
                </BodyMediumMedium>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-black">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E0E0E0]" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
          <Link
            href="/terms-of-service"
            className="text-sm text-[#6B6B6B] hover:text-secondary transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <p className="text-sm font-medium text-secondary">
            ©DPOP Studio 2026
          </p>
          <Link
            href="/privacy-policy"
            className="text-sm text-[#6B6B6B] hover:text-secondary transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
