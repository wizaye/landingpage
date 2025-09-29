import { Banner } from '@/components/utils/banner';
import HelixQueHeader from './header';
import { ArrowUpRight } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>


      {/* Fixed Header - positioned below banner */}
      <div className="fixed top-9 sm:top-11 left-0 right-0 z-50">
        <HelixQueHeader />
      </div>

      {/* Main content with proper spacing for banner + header */}
      <main className="relative z-10 min-h-screen pt-24 sm:pt-28">
        {children}
      </main>
    </>
  );
}
