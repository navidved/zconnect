import { X, Send, Heart } from 'lucide-react';
import { useState } from 'react';

export interface VideoComment {
  username: string;
  text: string;
}

interface CommentSheetProps {
  onClose: () => void;
  video: {
    comments: number;
    videoComments?: VideoComment[];
  };
}

export function CommentSheet({ onClose, video }: CommentSheetProps) {
  const [newComment, setNewComment] = useState('');

  const defaultComments = [
    {
      id: 1,
      user: {
        name: '@sarah_styles',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      text: 'These look amazing! Where did you get them?',
      likes: 24,
      time: '2h ago',
      liked: false,
    },
    {
      id: 2,
      user: {
        name: '@mike_tech',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      },
      text: 'Best purchase I made this year! 🔥',
      likes: 15,
      time: '5h ago',
      liked: true,
    },
    {
      id: 3,
      user: {
        name: '@fashion_emma',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      },
      text: 'Can you share the link please?',
      likes: 8,
      time: '1d ago',
      liked: false,
    },
  ];

  const avatarPool = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
  ];

  const initialComments = video.videoComments && video.videoComments.length > 0
    ? video.videoComments.map((vc, i) => ({
        id: i + 1,
        user: {
          name: vc.username,
          avatar: avatarPool[i % avatarPool.length],
        },
        text: vc.text,
        likes: Math.floor(Math.random() * 50) + 1,
        time: i < 3 ? `${i + 1}h ago` : `${Math.floor(i / 2)}d ago`,
        liked: false,
      }))
    : defaultComments;

  const [comments, setComments] = useState(initialComments);

  const handleLikeComment = (id: number) => {
    setComments(comments.map(comment =>
      comment.id === id
        ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 }
        : comment
    ));
  };

  const handleSendComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: comments.length + 1,
      user: {
        name: '@you',
        avatar: 'https://images.unsplash.com/photo-1618590067690-2db34a87750a?w=100&h=100&fit=crop',
      },
      text: newComment,
      likes: 0,
      time: 'Just now',
      liked: false,
    };

    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="fixed inset-x-0 bottom-0 max-w-md mx-auto bg-neutral-900 rounded-t-3xl shadow-2xl border-t border-neutral-700/50 max-h-[70vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div>
            <h2 className="text-lg font-bold text-white">Comments</h2>
            <p className="text-sm text-neutral-400">{video.comments.toLocaleString()} comments</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
          >
            <X size={20} className="text-neutral-400" />
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img
                src={comment.user.avatar}
                alt={comment.user.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-sm">{comment.user.name}</span>
                  <span className="text-neutral-500 text-xs">{comment.time}</span>
                </div>
                <p className="text-neutral-200 text-sm mb-2 font-vazir">{comment.text}</p>
                <button
                  onClick={() => handleLikeComment(comment.id)}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-pink-500 transition-colors"
                >
                  <Heart
                    size={14}
                    className={comment.liked ? 'fill-pink-500 text-pink-500' : ''}
                  />
                  <span className={comment.liked ? 'text-pink-500' : ''}>{comment.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="px-6 py-4 border-t border-neutral-800">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1618590067690-2db34a87750a?w=100&h=100&fit=crop"
              alt="Your avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
              placeholder="Add a comment..."
              className="flex-1 px-4 py-3 bg-neutral-800 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
            />
            <button
              onClick={handleSendComment}
              disabled={!newComment.trim()}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-neutral-700 disabled:to-neutral-700 disabled:cursor-not-allowed flex items-center justify-center transition-all"
            >
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
