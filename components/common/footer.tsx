"use client";

import Link from "next/link";
import { Icons } from "../utils/icons";
import { Badge } from "../ui/badge";
import { ThemeSwitcher } from "../theme";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";

// ===== INTERFACES =====
interface SocialLink {
  href: string;
  icon: keyof typeof Icons;
  ariaLabel: string;
  hoverColor?: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  ariaLabel: string;
  links: FooterLink[];
}

interface BrandInfo {
  name: string;
  logo: string;
  description: string;
  homepageUrl: string;
  badge?: string;
}

interface FooterData {
  brand: BrandInfo;
  socialLinks: SocialLink[];
  statusMessage: string;
  sections: FooterSection[];
  copyright: {
    companyName: string;
    rightsText: string;
  };
  schema: {
    organizationName: string;
    organizationLogo: string;
    organizationUrl: string;
  };
}

// ===== STATIC DATA =====
const footerData: FooterData = {
  brand: {
    name: "HelixQue",
    logo: "/logo.svg",
    description: "Match instantly by skills, industry, and language. Learn, mentor, and collaborate through text or video on our professional networking platform.",
    homepageUrl: "/",
    badge: "Beta",
  },
  socialLinks: [
    {
      href: "https://github.com/HXQLabs",
      icon: "github",
      ariaLabel: "Visit our GitHub profile",
      hoverColor: "hover:text-foreground",
    },
    {
      href: "https://discord.com/invite/XC4YsUBg2",
      icon: "discord",
      ariaLabel: "Join our Discord",
      hoverColor: "hover:text-[#5865F2]",
    },
    {
      href: "https://hacktoberfest.com",
      icon: "hacktoberfest",
      ariaLabel: "Hacktoberfest",
      hoverColor: "hover:text-[#5A5AB5]",
    },
  ],
  statusMessage: "All Systems Operational",
  sections: [
    {
      title: "Social",
      ariaLabel: "Social Links",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/HXQLabs",
          external: true,
        },
        {
          label: "Discord",
          href: "https://discord.com/invite/XC4YsUBg2",
          external: true,
        },
        {
          label: "Hacktoberfest",
          href: "https://hacktoberfest.com",
          external: true,
        },
      ],
    },
    {
      title: "Resources",
      ariaLabel: "Resources",
      links: [
        {
          label: "Home",
          href: "#hero",
        },
        {
          label: "Features",
          href: "#features",
        },
        {
          label: "About",
          href: "#about",
        },
      ],
    },
    {
      title: "Legal",
      ariaLabel: "Legal Links",
      links: [
        {
          label: "Privacy Policy",
          href: "/legal/privacy-policy",
        },
        {
          label: "Terms & Conditions",
          href: "/legal/terms-condition",
        },
      ],
    },
    // {
    //   title: "Support",
    //   ariaLabel: "Support",
    //   links: [
    //     {
    //       label: "Buy Me a Coffee",
    //       href: "https://buymeacoffee.com",
    //       external: true,
    //     },
    //   ],
    // },
  ],
  copyright: {
    companyName: "HelixQue",
    rightsText: "All rights reserved.",
  },
  schema: {
    organizationName: "HelixQue",
    organizationLogo: "/logo.svg",
    organizationUrl: "https://helixque.com",
  },
};

// ===== COMPONENTS =====
// Brand logo block
const HelixQueLogo = ({ brand }: { brand: BrandInfo }) => (
  <div className="flex items-center gap-2">
    <img 
      src={brand.logo} 
      width={22} 
      height={22} 
      className="h-6 w-auto" 
      alt={`${brand.name} Logo`} 
    />
    <span className="font-heading text-2xl ">{brand.name}</span>
    {brand.badge && (
      <Badge variant="secondary" className="text-[8px] px-1 py-0">
        {brand.badge}
      </Badge>
    )}
  </div>
);

const StickyFooter = () => {
  const { brand, socialLinks, statusMessage, sections, copyright, schema } = footerData;

  return (
    <footer
      className="w-full border-t"
      aria-label="Footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div
        className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8"
        itemScope
        itemType="https://schema.org/Organization"
        itemID="#organization"
      >
        <meta itemProp="name" content={schema.organizationName} />
        <meta itemProp="logo" content={schema.organizationLogo} />
        <link itemProp="url" href={schema.organizationUrl} />

        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:gap-20">

          {/* LEFT COLUMN — Logo + Description + Social + Status */}
          <div className="flex flex-col space-y-4 md:max-w-xs">

            {/* Logo */}
            <Link href={brand.homepageUrl} className="flex items-center gap-2" aria-label="Homepage">
              <HelixQueLogo brand={brand} />
            </Link>

            {/* Description */}
            <p className="text-muted-foreground md:text-sm" itemProp="description">
              {brand.description}
            </p>

            {/* Social Icons Row */}
            {/* <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = Icons[social.icon];
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.hoverColor || "hover:text-foreground"}`}
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div> */}

            {/* Status Pill */}
            <Pill>
              <PillIndicator pulse variant="success" />
              {statusMessage}
            </Pill>
          </div>

          {/* ===== RIGHT COLUMN — Grid Navigation ===== */}
          <div className="grid w-full grid-cols-2 gap-8 md:w-auto md:gap-12 lg:grid-cols-3 lg:gap-10">
            {sections.map((section) => (
              <nav 
                key={section.title}
                aria-label={section.ariaLabel} 
                itemScope 
                itemType="https://schema.org/SiteNavigationElement"
              >
                <div className="flex flex-col md:text-sm">
                  <h3 className="text-foreground mb-4 font-semibold text-sm" itemProp="name">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 lg:space-y-4 text-[13.5px] text-muted-foreground">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="hover:text-foreground transition-colors"
                          {...(link.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            ))}
          </div>
        </div>

        {/* ===== BOTTOM COPYRIGHT & THEME TOGGLE ===== */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
          <p
            className="text-xs text-muted-foreground"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <meta itemProp="copyrightYear" content={new Date().getFullYear().toString()} />
            <span itemProp="copyrightHolder">
              © {new Date().getFullYear()} {copyright.companyName}.
            </span>{" "}
            {copyright.rightsText}
          </p>

          {/* Theme Switcher */}
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;
