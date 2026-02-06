import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareSheetProps {
  onClose: () => void;
  video: {
    creatorName: string;
  };
}

export function ShareSheet({ onClose, video }: ShareSheetProps) {
  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '💬',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: '✈️',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      color: 'from-pink-500 to-purple-600',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: '🐦',
      color: 'from-sky-500 to-sky-600',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: '👥',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'message',
      name: 'Message',
      icon: '💌',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const friends = [
    {
      id: 1,
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Mike',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emma',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'Alex',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Lisa',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://zconnect.app/product/${video.creatorName.toLowerCase().replace(/\s+/g, '-')}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="fixed inset-x-0 bottom-0 max-w-md mx-auto bg-neutral-900 rounded-t-3xl shadow-2xl border-t border-neutral-700/50 max-h-[75vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-neutral-900 z-10 px-6 py-4 border-b border-neutral-800">
          <div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-4" />
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Share</h2>
              <p className="text-sm text-neutral-400">{video.creatorName}</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Share with Friends */}
        <div className="px-6 py-5 border-b border-neutral-800">
          <h3 className="text-sm font-semibold text-white mb-4">Share with Friends</h3>
          <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {friends.map((friend) => (
              <button
                key={friend.id}
                className="flex flex-col items-center gap-2 min-w-[60px] group"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-transparent group-hover:border-cyan-400 transition-all">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-neutral-300 group-hover:text-white transition-colors">
                  {friend.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Share Options */}
        <div className="px-6 py-5 border-b border-neutral-800">
          <h3 className="text-sm font-semibold text-white mb-4">Share via</h3>
          <div className="grid grid-cols-3 gap-4">
            {shareOptions.map((option) => (
              <button
                key={option.id}
                className="flex flex-col items-center gap-3 p-3 rounded-2xl hover:bg-neutral-800 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {option.icon}
                </div>
                <span className="text-xs text-neutral-300 group-hover:text-white transition-colors">
                  {option.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Copy Link */}
        <div className="px-6 py-5">
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-750 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                {copied ? (
                  <Check size={20} className="text-white" />
                ) : (
                  <Copy size={20} className="text-white" />
                )}
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">
                  {copied ? 'Link Copied!' : 'Copy Link'}
                </p>
                <p className="text-neutral-400 text-xs">Share anywhere</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}