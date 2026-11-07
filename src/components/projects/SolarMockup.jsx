import Icon from '../common/Icons';
import './SolarMockup.css';

export default function SolarMockup({ onOpenDetails }) {
  return (
    <div className="browser-mockup" onClick={onOpenDetails} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpenDetails?.()}>
      {/* Browser Window Chrome */}
      <div className="browser-header">
        <div className="browser-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="browser-url-bar">
          <span className="url-lock"><Icon name="lock" size={12} /></span>
          <span className="url-text">solar-management-system-liard.vercel.app</span>
        </div>
        <div className="browser-badge">
          <span className="pulse-indicator"></span>
          <span className="badge-text">LIVE DEMO</span>
        </div>
      </div>

      {/* Mockup Dashboard Content */}
      <div className="mockup-body">
        {/* Dashboard Topbar */}
        <div className="mockup-topbar">
          <div className="mockup-brand">
            <span className="brand-icon"><Icon name="sun" size={16} /></span>
            <span className="brand-title">SolarOps Dashboard</span>
          </div>
          <div className="mockup-user-pill">
            <span className="status-dot"></span>
            <span>All Inverters Normal</span>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="mockup-metrics">
          <div className="metric-box">
            <span className="metric-label">Today's Generation</span>
            <span className="metric-val">48.6 <small>kWh</small></span>
            <span className="metric-trend positive">+14.2% vs avg</span>
          </div>
          <div className="metric-box">
            <span className="metric-label">Active Inverters</span>
            <span className="metric-val">12 / 12</span>
            <span className="metric-trend online">100% Online</span>
          </div>
          <div className="metric-box">
            <span className="metric-label">Current Output</span>
            <span className="metric-val">6.8 <small>kW</small></span>
            <span className="metric-trend active">Real-Time</span>
          </div>
        </div>

        {/* Telemetry Chart Graphic */}
        <div className="mockup-chart-container">
          <div className="chart-header">
            <span>24-Hour Energy Production Telemetry (kWh)</span>
            <span className="chart-tag">Live Sensor Feed</span>
          </div>
          <svg className="mockup-svg-chart" viewBox="0 0 600 130" preserveAspectRatio="none">
            <defs>
              <linearGradient id="solarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid Lines */}
            <line x1="0" y1="20" x2="600" y2="20" stroke="rgba(255,255,255,0.06)" />
            <line x1="0" y1="60" x2="600" y2="60" stroke="rgba(255,255,255,0.06)" />
            <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.06)" />
            {/* Chart Area */}
            <path
              d="M0,120 Q50,115 100,105 T200,60 T300,25 T400,35 T500,85 T600,118 L600,130 L0,130 Z"
              fill="url(#solarGrad)"
            />
            {/* Chart Line */}
            <path
              d="M0,120 Q50,115 100,105 T200,60 T300,25 T400,35 T500,85 T600,118"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            {/* High Peak Dot */}
            <circle cx="300" cy="25" r="4.5" fill="#34d399" stroke="#fff" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Quick Click Hint Overlay */}
        <div className="mockup-click-hint">
          <span>Click to Inspect Full Details</span>
        </div>
      </div>
    </div>
  );
}

