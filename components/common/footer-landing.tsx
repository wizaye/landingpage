// import Link from "next/link";



// import Container from "../global/container";
// import Icons from "../global/icons";
// import { PulsatingIndicator } from "@/components/utils/pulsating-indicator";
// import CenterUnderline from "../fancy/text/underline-center";

// const StickyFooter = () => {
//     return (
//         <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
//             <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
//                 <Container>
//                     <div className="flex flex-col items-start justify-start md:max-w-[200px]">
//                         <div className="flex items-center gap-2">
//                             <Icons.icon className="w-auto h-5" />
//                             <span className="text-base md:text-lg font-medium text-foreground">
//                                 HelixQue
//                             </span>
//                         </div>
//                         <p className="text-muted-foreground mt-4 text-sm text-start">
//                             Building the future with innovative solutions and cutting-edge technology.
//                         </p>
                        
//                         {/* All Systems Operational Status */}
//                         <div className="mt-4">
//                             <Link 
//                                 href="/status"
//                                 className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-sm font-medium px-3 py-2 border border-green-200 dark:border-green-800 rounded-lg hover:border-green-300 dark:hover:border-green-700"
//                             >
//                                 <PulsatingIndicator 
//                                     variant="success" 
//                                     size="sm" 
//                                     animate={true}
//                                     duration={2000}
//                                 />
//                                 <span>All Systems Operational</span>
//                             </Link>
//                         </div>

//                         {/* Social Links */}
//                         <div className="flex items-center space-x-4 mt-4">
//                             <Link
//                                 href="https://discord.gg/your-server"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-[#5865F2] transition-colors duration-200"
//                                 aria-label="Join our Discord"
//                             >
//                                 <Icons.discord className="h-5 w-5" />
//                             </Link>
//                             <Link
//                                 href="https://github.com/your-org"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-foreground transition-colors duration-200"
//                                 aria-label="Follow us on GitHub"
//                             >
//                                 <Icons.github className="h-5 w-5" />
//                             </Link>
//                             <Link
//                                 href="https://hacktoberfest.com"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-muted-foreground hover:text-[#FF6B35] transition-colors duration-200"
//                                 aria-label="Hacktoberfest"
//                             >
//                                 <Icons.hacktoberfest className="h-5 w-5" />
//                             </Link>
//                         </div>
//                     </div>
//                 </Container>

//                 <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
//                     <div className="md:grid md:grid-cols-2 md:gap-8">
//                         <Container delay={0.1} className="h-auto">
//                             <h3 className="text-base font-medium text-foreground">
//                                 Product
//                             </h3>
//                             <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Features</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Pricing</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Documentation</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Integrations</CenterUnderline>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </Container>
//                         <Container delay={0.2} className="h-auto">
//                             <div className="mt-10 md:mt-0 flex flex-col">
//                                 <h3 className="text-base font-medium text-foreground">
//                                     Solutions
//                                 </h3>
//                                 <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                     <li>
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Developers</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Businesses</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Startups</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Enterprise</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </Container>
//                     </div>
//                     <div className="md:grid md:grid-cols-2 md:gap-8">
//                         <Container delay={0.3} className="h-auto">
//                             <h3 className="text-base font-medium text-foreground">
//                                 Resources
//                             </h3>
//                             <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                 <li className="mt-2">
//                                     <Link href="/blog" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Blog</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="/changelog" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Changelog</CenterUnderline>
//                                     </Link>
//                                 </li>
//                                 <li className="mt-2">
//                                     <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                         <CenterUnderline>Support</CenterUnderline>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </Container>
//                         <Container delay={0.4} className="h-auto">
//                             <div className="mt-10 md:mt-0 flex flex-col">
//                                 <h3 className="text-base font-medium text-foreground">
//                                     Company
//                                 </h3>
//                                 <ul className="mt-4 text-sm text-muted-foreground space-y-4">
//                                     <li>
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>About Us</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Privacy Policy</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                     <li className="mt-2">
//                                         <Link href="#" className="link hover:text-foreground transition-all duration-300">
//                                             <CenterUnderline>Terms & Conditions</CenterUnderline>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </Container>
//                     </div>
//                 </div>
//             </div>

//             <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
//                 <div className="mt-8 md:flex md:items-center justify-center footer w-full">
//                     <p className="text-sm text-muted-foreground mt-8 md:mt-0">
//                         &copy; {new Date().getFullYear()} HelixQue. All rights reserved.
//                     </p>
//                 </div>
//             </Container>
//         </footer>
//     )
// };

// export default StickyFooter;



import Icons from "../global/icons";
import { PulsatingIndicator } from "@/components/utils/pulsating-indicator";
// Inline BadtzLogo from badtz-header
const BadtzLogo = () => (
  <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 190 190" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M102.256 188.162C97.6186 190.613 92.0647 190.613 87.4273 188.162L11.3881 147.988C6.20803 145.251 2.96875 139.885 2.96875 134.04L2.96875 55.9596C2.96875 50.115 6.20804 44.7487 11.3881 42.0119L87.4273 1.83758C92.0647 -0.612537 97.6186 -0.612537 102.256 1.83758L178.295 42.0119C183.475 44.7487 186.715 50.115 186.715 55.9596L186.715 134.04C186.715 139.885 183.475 145.251 178.295 147.988L102.256 188.162ZM17.2566 130.86C17.2566 133.8 18.9004 136.499 21.5152 137.859L86.6791 171.709C89.3137 173.075 92.4666 171.171 92.4666 168.21L92.4666 100.577C92.4666 97.6363 90.8224 94.9374 88.208 93.5771L23.0442 59.727C20.4089 58.3581 17.2566 60.2643 17.2566 63.2268L17.2566 130.86Z" 
        fill="currentColor"
      />
    </svg>
    <span className="font-heading text-lg leading-none font-semibold">Badtz</span>
  </div>
);


const StickyFooter = () => {
  return (
    <footer className="border-border bg-background mt-4 w-full border-t" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row md:items-start md:justify-between md:gap-20">
          <div className="flex w-full flex-col items-start gap-2 md:max-w-64">
            <a href="#home" className="flex items-center gap-2" aria-label="Navigate to homepage">
              <BadtzLogo />
            </a>
            <div>
              <h3 className="mt-4 font-semibold">Get Badtz Now!</h3>
            </div>
            <div>
              <p className="text-muted-foreground w-full text-balance md:text-sm">Built with modern technologies for better developer experience</p>
            </div>
            <div className="flex flex-col w-full gap-2 md:flex-row md:items-center md:gap-3 mt-2.5 mb-8">
              <div className="flex items-center gap-5 px-2 pt-2 md:pt-0 md:pl-0" role="list" aria-label="Social media links">
                <a href="https://github.com/your-org" className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="Visit our GitHub profile" role="listitem" tabIndex={0}>
                  <Icons.github className="h-5 w-5" />
                </a>
                <a href="https://discord.gg/your-server" className="text-muted-foreground hover:text-[#5865F2] transition-colors duration-300" aria-label="Join our Discord" role="listitem" tabIndex={0}>
                  <Icons.discord className="h-5 w-5" />
                </a>
                <a href="https://hacktoberfest.com" className="text-muted-foreground hover:text-[#FF6B35] transition-colors duration-300" aria-label="Hacktoberfest" role="listitem" tabIndex={0}>
                  <Icons.hacktoberfest className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 md:w-auto lg:grid-cols-3 md:gap-12">
            <nav aria-label="Product">
              <div className="flex flex-col md:text-sm">
                <h3 className="text-foreground mb-6 font-medium">Product</h3>
                <ul className="text-muted-foreground space-y-2 md:space-y-3">
                  <li><a href="#features" className="hover:text-foreground transition-colors duration-200">Features</a></li>
                  <li><a href="#pricing" className="hover:text-foreground transition-colors duration-200">Pricing</a></li>
                  <li><a href="/blog" className="hover:text-foreground transition-colors duration-200">Blog</a></li>
                </ul>
              </div>
            </nav>
            <nav aria-label="Company">
              <div className="flex flex-col md:text-sm">
                <h3 className="text-foreground mb-6 font-medium">Company</h3>
                <ul className="text-muted-foreground space-y-2 md:space-y-3">
                  <li><a href="#about" className="hover:text-foreground transition-colors duration-200">About Us</a></li>
                  <li><a href="#privacy" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-foreground transition-colors duration-200">Terms & Conditions</a></li>
                </ul>
              </div>
            </nav>
            <nav aria-label="Support">
              <div className="flex flex-col md:text-sm">
                <h3 className="text-foreground mb-6 font-medium">Support</h3>
                <ul className="text-muted-foreground space-y-2 md:space-y-3">
                  <li><a href="#help" className="hover:text-foreground transition-colors duration-200">Help Center</a></li>
                  <li><a href="#contact" className="hover:text-foreground transition-colors duration-200">Contact Us</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* All Systems Operational and Copyright Row */}
        <div className="mt-16 w-full flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center md:mt-0 md:gap-0">
          <div className="flex flex-col items-center w-full md:flex-row md:items-center md:justify-between md:w-full">
            <span className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-xs font-medium px-3 py-2 border border-green-200 dark:border-green-800 rounded-lg hover:border-green-300 dark:hover:border-green-700 md:mb-0">
              <PulsatingIndicator variant="success" size="sm" animate={true} duration={2000} />
              <span>All Systems Operational</span>
            </span>
            <p className="text-muted-foreground text-xs text-center md:text-right md:ml-4 md:mb-0">&copy; {new Date().getFullYear()} HXQLabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;

