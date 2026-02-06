import { ReactNode } from 'react';
import { TopNav } from './TopNav';
import { BottomAIBar } from './BottomAIBar';

interface MainLayoutProps {
  children: ReactNode;
  onSearch?: () => void;
  onAssistant?: () => void;
  onCreate?: () => void;
  fullscreen?: boolean; // For Reels page that needs fullscreen
}

export function MainLayout({ children, onSearch, onAssistant, onCreate, fullscreen = false }: MainLayoutProps) {
  if (fullscreen) {
    // Fullscreen layout for Reels
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <TopNav />
        <div className="flex-1 overflow-hidden mt-[72px] mb-[74px]">
          {children}
        </div>
        <BottomAIBar
          onSearch={onSearch || (() => {})}
          onAssistant={onAssistant || (() => {})}
          onCreate={onCreate || (() => {})}
        />
      </div>
    );
  }

  // Standard layout for other pages
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopNav />
      <div className="flex-1 overflow-y-auto mt-[72px] mb-[74px] bg-neutral-50 px-[20px] py-[0px] pt-[20px] pr-[20px] pb-[0px] pl-[20px]">
        {children}
      </div>
      <BottomAIBar
        onSearch={onSearch || (() => {})}
        onAssistant={onAssistant || (() => {})}
        onCreate={onCreate || (() => {})}
      />
    </div>
  );
}