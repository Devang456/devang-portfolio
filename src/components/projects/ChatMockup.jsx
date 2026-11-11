import './ChatMockup.css';

export default function ChatMockup({ onOpenDetails }) {
  return (
    <div
      className="chat-mockup"
      onClick={onOpenDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpenDetails?.()}
    >
      <div className="chat-mockup-header">
        <div className="chat-header-user">
          <div className="avatar-wrapper">
            <span className="chat-avatar">IT</span>
            <span className="chat-online-indicator"></span>
          </div>
          <div className="chat-meta">
            <span className="chat-room-title">InstantTalk Direct Channel</span>
            <span className="chat-room-status">Socket.io & WebRTC • Live</span>
          </div>
        </div>
        <div className="chat-badge">
          <span>LIVE WEBRTC</span>
        </div>
      </div>

      <div className="chat-mockup-body">
        <div className="chat-message received">
          <p className="message-text">
            Hey Devang! How are the WebRTC and Socket.io pipelines structured?
          </p>
          <span className="message-time">10:42 AM</span>
        </div>

        <div className="chat-message sent">
          <p className="message-text">
            Socket.io powers instant messaging and presence, while WebRTC handles P2P video/audio calls and live screen broadcasting with JWT security!
          </p>
          <div className="message-status">
            <span className="message-time">10:43 AM</span>
            <span className="read-receipt">✓✓</span>
          </div>
        </div>

        <div className="chat-typing-row">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="typing-text">Alex is typing...</span>
        </div>
      </div>

      <div className="chat-mockup-footer">
        <div className="mockup-input-box">
          <span className="input-placeholder">Type an encrypted message...</span>
          <button type="button" className="mockup-send-btn" aria-label="Send">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

