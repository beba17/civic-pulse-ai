import React, { useState } from 'react';
import {
  Palette,
  Type,
  Layout,
  Layers,
  Sparkles,
  Compass,
  Tag,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  RotateCcw,
  Sliders,
  Eye,
  Code2,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  TrendingUp,
  MapPin,
  Building2,
  ChevronRight,
  Info,
  Menu,
  X,
  FileCode
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'spec' | 'prototype' | 'css-generator'>('spec');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [animTriggerKey, setAnimTriggerKey] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('Overview');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const restartAnimations = () => {
    setAnimTriggerKey((prev) => prev + 1);
  };

  // Color tokens
  const colorPalette = [
    {
      role: 'Primary / Brand Navy',
      hex: '#0B2545',
      name: 'Deep Navy',
      usage: 'Hero backgrounds, primary headers, active states, top institutional trust elements',
      textColor: '#FFFFFF',
      border: false,
    },
    {
      role: 'Primary Variant / Deep Slate Blue',
      hex: '#134074',
      name: 'Midnight Azure',
      usage: 'Secondary brand hero gradient, prominent card headers, charts primary series',
      textColor: '#FFFFFF',
      border: false,
    },
    {
      role: 'Accent / Saffron Pulse',
      hex: '#D9531E',
      name: 'Warm Saffron',
      usage: 'Primary CTAs, critical alert signals, active navigation indicators, key telemetry markers (sparingly used)',
      textColor: '#FFFFFF',
      border: false,
    },
    {
      role: 'Accent Hover / Saffron Dark',
      hex: '#C2410C',
      name: 'Burnt Ochre',
      usage: 'Hover and active pressed state for primary saffron buttons and critical alerts',
      textColor: '#FFFFFF',
      border: false,
    },
    {
      role: 'Canvas Background',
      hex: '#F8FAFC',
      name: 'Slate Canvas',
      usage: 'Global page body background, outer dashboard padding, clean institutional contrast',
      textColor: '#0F172A',
      border: true,
    },
    {
      role: 'Surface / Card Background',
      hex: '#FFFFFF',
      name: 'Pure White',
      usage: 'Metric cards, data tables, filter containers, modal sheets',
      textColor: '#0F172A',
      border: true,
    },
    {
      role: 'Card Border & Dividers',
      hex: '#E2E8F0',
      name: 'Slate Border',
      usage: '1px card borders, table row dividers, separator lines (replaces heavy borders)',
      textColor: '#0F172A',
      border: true,
    },
    {
      role: 'Text Primary / Ink',
      hex: '#0F172A',
      name: 'Deep Ink (Slate 900)',
      usage: 'H1–H3 headings, high-importance numbers, main data values',
      textColor: '#FFFFFF',
      border: false,
    },
    {
      role: 'Text Secondary / Body',
      hex: '#334155',
      name: 'Muted Slate (Slate 700)',
      usage: 'Descriptive paragraphs, metric labels, form labels, card body text',
      textColor: '#FFFFFF',
      border: false,
    },
    {
      role: 'Text Tertiary / Metadata',
      hex: '#64748B',
      name: 'Steel Gray (Slate 500)',
      usage: 'Timestamps, unit labels, disabled states, breadcrumbs, district codes',
      textColor: '#FFFFFF',
      border: false,
    },
  ];

  const statusChips = [
    {
      label: 'High Priority',
      badgeBg: '#FFF1EC',
      textColor: '#C2410C',
      borderColor: '#FDBA74',
      desc: 'Severe citizen impact (e.g. main pipeline bursts, structural road collapse)',
      icon: AlertTriangle,
    },
    {
      label: 'Under Review',
      badgeBg: '#FEF3C7',
      textColor: '#92400E',
      borderColor: '#FDE68A',
      desc: 'Signal detected by algorithmic sensor telemetry, waiting for ward engineer audit',
      icon: Clock,
    },
    {
      label: 'Verified Signal',
      badgeBg: '#ECFDF5',
      textColor: '#065F46',
      borderColor: '#A7F3D0',
      desc: 'Corroborated by ≥3 citizen geo-signals or verified municipal telemetry',
      icon: ShieldCheck,
    },
    {
      label: 'Dispatched / Actioned',
      badgeBg: '#EFF6FF',
      textColor: '#1E40AF',
      borderColor: '#BFDBFE',
      desc: 'Work order generated and assigned to local urban local body (ULB)',
      icon: Activity,
    },
    {
      label: 'Resolved',
      badgeBg: '#F1F5F9',
      textColor: '#334155',
      borderColor: '#CBD5E1',
      desc: 'Issue verified as fixed with updated citizen sensor confirmation',
      icon: Check,
    },
  ];

  const streamlitCssCode = `/* =========================================================================
   CIVIC PULSE DESIGN SYSTEM - CUSTOM STREAMLIT CSS
   Paste into your Streamlit app using:
   st.markdown("""<style>...</style>""", unsafe_allow_html=True)
   ========================================================================= */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --color-primary-navy: #0B2545;
  --color-secondary-azure: #134074;
  --color-accent-saffron: #D9531E;
  --color-accent-hover: #C2410C;
  --color-canvas-bg: #F8FAFC;
  --color-card-bg: #FFFFFF;
  --color-border-slate: #E2E8F0;
  --color-text-ink: #0F172A;
  --color-text-slate: #334155;
  --color-text-muted: #64748B;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
}

/* 1. Global App Canvas */
.stApp {
  background-color: var(--color-canvas-bg) !important;
  font-family: var(--font-body) !important;
  color: var(--color-text-ink) !important;
}

/* 2. Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading) !important;
  color: var(--color-text-ink) !important;
  letter-spacing: -0.02em;
}

/* 3. Hero Banner Styling */
.civic-hero {
  background: linear-gradient(135deg, #0B2545 0%, #134074 65%, #1D4E89 100%);
  position: relative;
  border-radius: 14px;
  padding: 36px 32px;
  color: #FFFFFF;
  margin-bottom: 28px;
  box-shadow: 0 4px 20px -2px rgba(11, 37, 69, 0.15);
  overflow: hidden;
  animation: civicFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.civic-hero::after {
  content: '';
  position: absolute;
  top: -20%;
  right: -5%;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(217, 83, 30, 0.22) 0%, rgba(217, 83, 30, 0) 70%);
  pointer-events: none;
}

/* 4. Card Styling & Hover Lift */
.civic-card, div[data-testid="stMetric"] {
  background: var(--color-card-bg) !important;
  border: 1px solid var(--color-border-slate) !important;
  border-radius: 12px !important;
  padding: 20px 24px !important;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05) !important;
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease !important;
}

.civic-card:hover, div[data-testid="stMetric"]:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 10px 22px -4px rgba(11, 37, 69, 0.08), 0 4px 6px -4px rgba(11, 37, 69, 0.04) !important;
  border-color: #CBD5E1 !important;
}

/* 5. Buttons Styling */
button[kind="primary"], .civic-btn-primary {
  background-color: var(--color-accent-saffron) !important;
  color: #FFFFFF !important;
  border: none !important;
  border-radius: 8px !important;
  font-family: var(--font-heading) !important;
  font-weight: 600 !important;
  padding: 10px 20px !important;
  transition: all 0.18s ease-out !important;
  box-shadow: 0 2px 4px rgba(217, 83, 30, 0.2) !important;
}

button[kind="primary"]:hover, .civic-btn-primary:hover {
  background-color: var(--color-accent-hover) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 10px rgba(217, 83, 30, 0.3) !important;
}

button[kind="secondary"], .civic-btn-secondary {
  background-color: transparent !important;
  color: var(--color-primary-navy) !important;
  border: 1.5px solid var(--color-border-slate) !important;
  border-radius: 8px !important;
  font-family: var(--font-heading) !important;
  font-weight: 600 !important;
  padding: 10px 20px !important;
  transition: all 0.18s ease-out !important;
}

button[kind="secondary"]:hover, .civic-btn-secondary:hover {
  border-color: var(--color-primary-navy) !important;
  background-color: #F1F5F9 !important;
}

/* 6. Pure CSS Animations */
@keyframes civicFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes civicSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.civic-spinner {
  width: 20px;
  height: 20px;
  border: 2.5px solid #E2E8F0;
  border-top-color: var(--color-primary-navy);
  border-radius: 50%;
  animation: civicSpin 0.75s linear infinite;
  display: inline-block;
}

/* 7. Status Chips / Badges */
.civic-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 3px 10px;
  border-radius: 6px;
  text-transform: uppercase;
}

.chip-high-priority {
  background-color: #FFF1EC;
  color: #C2410C;
  border: 1px solid #FDBA74;
}

.chip-under-review {
  background-color: #FEF3C7;
  color: #92400E;
  border: 1px solid #FDE68A;
}

.chip-verified {
  background-color: #ECFDF5;
  color: #065F46;
  border: 1px solid #A7F3D0;
}
`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B2545] text-white px-4 py-2.5 rounded-lg shadow-xl text-sm font-medium flex items-center gap-2 border border-slate-700 anim-fade-slide-up">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Copied {copiedText} to clipboard!</span>
        </div>
      )}

      {/* Top Header & Tool Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0B2545] flex items-center justify-center text-white shadow-xs">
              <Activity className="w-5 h-5 text-[#D9531E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-[#0B2545] text-lg tracking-tight">
                  CIVIC PULSE
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFF1EC] text-[#D9531E] border border-[#FDBA74] tracking-wider uppercase">
                  Design Spec
                </span>
              </div>
              <p className="text-xs text-[#64748B] hidden sm:block">
                Citizen Infrastructure Signal & Recommendation Platform (Streamlit CSS Spec)
              </p>
            </div>
          </div>

          {/* Center Tabs */}
          <div className="flex items-center bg-[#F1F5F9] p-1 rounded-lg border border-[#E2E8F0]">
            <button
              onClick={() => setActiveTab('spec')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'spec'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Full Design Specification
            </button>
            <button
              onClick={() => setActiveTab('prototype')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'prototype'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Live Interactive Prototype
            </button>
            <button
              onClick={() => setActiveTab('css-generator')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'css-generator'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-[#D9531E]" />
              Streamlit CSS Code
            </button>
          </div>

          {/* Action button */}
          <button
            onClick={() => copyToClipboard(streamlitCssCode, 'Streamlit CSS block')}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#0B2545] text-white hover:bg-[#134074] transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-[#D9531E]" />
            Copy Streamlit CSS
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB 1: FULL DESIGN SPECIFICATION */}
        {activeTab === 'spec' && (
          <div className="space-y-12">
            {/* Spec Intro Banner */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9531E]">
                    Hand-off Architectural Spec
                  </span>
                  <span className="text-xs text-[#94A3B8]">•</span>
                  <span className="text-xs text-[#64748B]">Targeted for Python Streamlit + Custom CSS</span>
                </div>
                <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
                  Civic Pulse Design System & Visual Specification
                </h1>
                <p className="text-sm text-[#475569] mt-1 max-w-3xl leading-relaxed">
                  Engineered specifically for institutional trustworthiness, high density civic readability,
                  and 100% pure CSS achievability without relying on React runtime hooks, canvas rendering, or complex JS widgets.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={restartAnimations}
                  className="px-3.5 py-2 text-xs font-semibold text-[#0B2545] bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg hover:bg-[#E2E8F0] transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Re-test CSS Animations
                </button>
              </div>
            </div>

            {/* SECTION 1: COLOR PALETTE */}
            <section id="section-colors" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">Color Palette</h2>
                    <p className="text-xs text-[#64748B]">
                      Deep institutional Navy for authority + warm Indian Saffron accent for critical infrastructure alerts.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B] font-mono">10 Design Tokens</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {colorPalette.map((col, idx) => (
                  <div
                    key={idx}
                    onClick={() => copyToClipboard(col.hex, `${col.name} (${col.hex})`)}
                    className="group bg-white rounded-xl border border-[#E2E8F0] p-3.5 civic-card cursor-pointer relative"
                  >
                    <div
                      className={`h-20 rounded-lg w-full mb-3 flex items-end p-2.5 justify-between shadow-xs ${
                        col.border ? 'border border-[#CBD5E1]' : ''
                      }`}
                      style={{ backgroundColor: col.hex }}
                    >
                      <span
                        className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-xs"
                        style={{
                          color: col.textColor,
                          backgroundColor: col.border ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.25)',
                        }}
                      >
                        {col.hex}
                      </span>
                      <Copy
                        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: col.textColor }}
                      />
                    </div>
                    <div className="text-xs font-bold text-[#0F172A]">{col.name}</div>
                    <div className="text-[11px] font-medium text-[#64748B] mt-0.5">{col.role}</div>
                    <p className="text-[11px] text-[#475569] mt-2 line-clamp-2 leading-snug">
                      {col.usage}
                    </p>
                  </div>
                ))}
              </div>

              {/* Palette Rationale Note */}
              <div className="bg-[#F0F4F8] border border-[#CBD5E1] rounded-lg p-4 text-xs text-[#334155] leading-relaxed flex items-start gap-3">
                <Info className="w-4 h-4 text-[#134074] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B2545] font-semibold">Civic Tech Rationale: </strong>
                  The primary <code className="text-[#0B2545] font-mono font-bold">#0B2545</code> evokes the credibility
                  of constitutional ministries and municipal command centers. The saffron accent{' '}
                  <code className="text-[#D9531E] font-mono font-bold">#D9531E</code> is deployed with strict discipline:
                  only for critical action buttons, active navigational states, and high-urgency signals. Backgrounds stay in
                  cool slate (<code className="font-mono">#F8FAFC</code>) to minimize eye fatigue during extended municipal shifts.
                </div>
              </div>
            </section>

            {/* SECTION 2: TYPOGRAPHY */}
            <section id="section-typography" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">Typography System</h2>
                    <p className="text-xs text-[#64748B]">
                      Google Fonts pairing: <strong className="text-[#0B2545]">Plus Jakarta Sans</strong> (Headings) +{' '}
                      <strong className="text-[#0B2545]">Inter</strong> (Body & Dense Telemetry).
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B]">Google Fonts Only</span>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-semibold">
                      <tr>
                        <th className="py-3 px-4">Level</th>
                        <th className="py-3 px-4">Font Family</th>
                        <th className="py-3 px-4">Weight</th>
                        <th className="py-3 px-4">Size (Rem / Px)</th>
                        <th className="py-3 px-4">Line Height & Spacing</th>
                        <th className="py-3 px-4">Live Preview</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B2545]">Hero H1</td>
                        <td className="py-3 px-4 font-mono text-[11px]">Plus Jakarta Sans</td>
                        <td className="py-3 px-4">800 (ExtraBold)</td>
                        <td className="py-3 px-4 font-mono">2.25rem - 2.5rem (36-40px)</td>
                        <td className="py-3 px-4">1.15 / -0.02em</td>
                        <td className="py-3 px-4">
                          <span className="font-heading text-xl font-extrabold text-[#0B2545]">
                            National Infrastructure Signal
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B2545]">Section H2</td>
                        <td className="py-3 px-4 font-mono text-[11px]">Plus Jakarta Sans</td>
                        <td className="py-3 px-4">700 (Bold)</td>
                        <td className="py-3 px-4 font-mono">1.5rem (24px)</td>
                        <td className="py-3 px-4">1.25 / -0.015em</td>
                        <td className="py-3 px-4">
                          <span className="font-heading text-base font-bold text-[#0B2545]">
                            District Water Anomaly Heatmap
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B2545]">Card Title H3</td>
                        <td className="py-3 px-4 font-mono text-[11px]">Plus Jakarta Sans</td>
                        <td className="py-3 px-4">600 (SemiBold)</td>
                        <td className="py-3 px-4 font-mono">1.125rem (18px)</td>
                        <td className="py-3 px-4">1.35 / -0.01em</td>
                        <td className="py-3 px-4">
                          <span className="font-heading text-sm font-semibold text-[#0B2545]">
                            Bengaluru Urban Ward 14 Pipeline Breach
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B2545]">Body Standard</td>
                        <td className="py-3 px-4 font-mono text-[11px]">Inter</td>
                        <td className="py-3 px-4">400 (Regular) / 500 (Med)</td>
                        <td className="py-3 px-4 font-mono">0.9375rem (15px)</td>
                        <td className="py-3 px-4">1.60 / normal</td>
                        <td className="py-3 px-4 text-xs text-[#334155]">
                          Citizen reports aggregated over 6 hours confirm pressure dip below 1.2 bar.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B2545]">Metric Big Number</td>
                        <td className="py-3 px-4 font-mono text-[11px]">Plus Jakarta Sans</td>
                        <td className="py-3 px-4">700 (Bold)</td>
                        <td className="py-3 px-4 font-mono">2.25rem (36px)</td>
                        <td className="py-3 px-4">1.0 / tabular-nums</td>
                        <td className="py-3 px-4">
                          <span className="font-heading text-2xl font-bold text-[#0B2545]">
                            1,482 <span className="text-xs font-normal text-[#64748B]">signals</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-[#0B2545]">Caption / Meta</td>
                        <td className="py-3 px-4 font-mono text-[11px]">Inter</td>
                        <td className="py-3 px-4">500 (Medium)</td>
                        <td className="py-3 px-4 font-mono">0.8125rem (13px)</td>
                        <td className="py-3 px-4">1.40 / +0.01em</td>
                        <td className="py-3 px-4 text-[11px] text-[#64748B]">
                          Updated 4 mins ago • Source: Jal Shakti GIS Telemetry
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: HERO SECTION DESIGN */}
            <section id="section-hero" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">Hero Section Specification</h2>
                    <p className="text-xs text-[#64748B]">
                      Gradient parameters, radial glow coordinates, institutional headline, and dual CTA styling.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B] font-mono">Pure CSS Gradient</span>
              </div>

              {/* Live Rendered Hero */}
              <div
                key={`hero-${animTriggerKey}`}
                className="civic-hero relative rounded-2xl p-7 sm:p-10 text-white overflow-hidden shadow-lg anim-fade-slide-up"
                style={{
                  background: 'linear-gradient(135deg, #0B2545 0%, #134074 65%, #1D4E89 100%)',
                }}
              >
                {/* Radial subtle Saffron Pulse blob */}
                <div
                  className="absolute -top-12 -right-12 w-96 h-96 rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(217, 83, 30, 0.22) 0%, rgba(217, 83, 30, 0) 70%)',
                  }}
                />

                <div className="relative z-10 max-w-3xl space-y-4">
                  {/* Top Live Indicator Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-100">
                    <span className="w-2 h-2 rounded-full bg-[#D9531E] anim-pulse-glow" />
                    <span>ALL-INDIA TELEMETRY FEED • 28 STATES &amp; 8 UTS</span>
                  </div>

                  <h1 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                    Real-time Citizen Infrastructure Signals &amp; Policy Recommendations
                  </h1>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                    Aggregating grassroots civic incident signals, water &amp; road anomaly telemetries,
                    and automated municipal dispatch recommendations across Indian urban local bodies.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      className="px-5 py-2.5 rounded-lg text-sm font-heading font-semibold text-white transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      style={{ backgroundColor: '#D9531E' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C2410C')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D9531E')}
                    >
                      <span>Explore District Heatmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button className="px-5 py-2.5 rounded-lg text-sm font-heading font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer">
                      Download Policy Brief (PDF)
                    </button>
                  </div>
                </div>
              </div>

              {/* Exact CSS parameters table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 space-y-2">
                  <h4 className="font-heading font-bold text-[#0B2545] text-sm">CSS Gradient Parameters</h4>
                  <div className="space-y-1.5 text-[#334155]">
                    <div>
                      <strong className="text-[#0B2545]">Linear Direction:</strong>{' '}
                      <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                        135deg (Top-Left to Bottom-Right)
                      </code>
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">Color Stops:</strong>{' '}
                      <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                        #0B2545 (0%) → #134074 (65%) → #1D4E89 (100%)
                      </code>
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">Accent Radial Glow:</strong>{' '}
                      <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                        radial-gradient(circle at 85% 15%, rgba(217, 83, 30, 0.22) 0%, transparent 70%)
                      </code>
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">Border Radius:</strong>{' '}
                      <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                        14px to 16px (0.875rem - 1rem)
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 space-y-2">
                  <h4 className="font-heading font-bold text-[#0B2545] text-sm">CTA Button Styling</h4>
                  <div className="space-y-1.5 text-[#334155]">
                    <div>
                      <strong className="text-[#0B2545]">Primary CTA:</strong> Background{' '}
                      <code className="font-mono text-[11px] bg-[#FFF1EC] text-[#D9531E] px-1 py-0.5 rounded font-bold">
                        #D9531E
                      </code>{' '}
                      (Hover: <code className="font-mono text-[11px]">#C2410C</code>), radius 8px, font-weight 600.
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">Secondary CTA:</strong> Background{' '}
                      <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                        rgba(255, 255, 255, 0.12)
                      </code>
                      , border 1.5px solid <code className="font-mono text-[11px]">rgba(255, 255, 255, 0.25)</code>.
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">Shadow:</strong>{' '}
                      <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">
                        0 2px 4px rgba(217, 83, 30, 0.22)
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: CARD STYLING */}
            <section id="section-cards" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">Card Architecture &amp; Hover State</h2>
                    <p className="text-xs text-[#64748B]">
                      Border radius, shadow token, padding, and subtle lift transformation.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B]">Hover over cards to test lift</span>
              </div>

              {/* Live Metric & Incident Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Metric Card 1 */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 civic-card shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Active Citizen Signals
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 anim-live-dot" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-extrabold text-[#0B2545]">3,842</span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +12.4% vs last week
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                    <span>Across 112 Municipalities</span>
                    <span className="font-medium text-[#0B2545]">74% automated match</span>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 civic-card shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      High Urgency Bottlenecks
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFF1EC] text-[#D9531E] border border-[#FDBA74]">
                      Action Needed
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-extrabold text-[#D9531E]">47</span>
                    <span className="text-xs text-[#64748B]">critical infrastructure flags</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                    <span>Avg dispatch time: 4.2h</span>
                    <span className="font-medium text-[#D9531E] font-semibold">Priority 1</span>
                  </div>
                </div>

                {/* Metric Card 3 */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 civic-card shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Resolution Rate
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-extrabold text-[#0B2545]">81.6%</span>
                    <span className="text-xs text-emerald-600 font-medium">Within SLA</span>
                  </div>
                  {/* Progress bar demonstration */}
                  <div className="mt-3 w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0B2545] h-full rounded-full transition-all duration-1000"
                      style={{ width: '81.6%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Detailed Card Spec Breakdown */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs">
                <h4 className="font-heading font-bold text-sm text-[#0B2545] mb-3">
                  Card Design Spec Variables (Streamlit Implementation)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <div className="text-[#64748B] font-medium">Border Radius</div>
                    <div className="font-heading font-bold text-[#0B2545] text-sm mt-1">12px (0.75rem)</div>
                    <div className="text-[11px] text-[#475569] mt-0.5">Clean, modern civic boundary</div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <div className="text-[#64748B] font-medium">Default Shadow</div>
                    <div className="font-mono text-[#0B2545] text-[11px] mt-1">0 1px 3px rgba(15,23,42,0.05)</div>
                    <div className="text-[11px] text-[#475569] mt-0.5">Subtle separation from canvas</div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <div className="text-[#64748B] font-medium">Padding</div>
                    <div className="font-heading font-bold text-[#0B2545] text-sm mt-1">20px to 24px</div>
                    <div className="text-[11px] text-[#475569] mt-0.5">Generous breathing room</div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <div className="text-[#64748B] font-medium">Hover Lift Transition</div>
                    <div className="font-mono text-[#0B2545] text-[11px] mt-1">translateY(-3px)</div>
                    <div className="text-[11px] text-[#475569] mt-0.5">0.22s cubic-bezier(0.16, 1, 0.3, 1)</div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: PURE CSS ANIMATIONS */}
            <section id="section-animations" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    5
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">
                      Simple, Lightweight Pure CSS Animations
                    </h2>
                    <p className="text-xs text-[#64748B]">
                      Zero JavaScript dependencies. Fully compatible with Streamlit HTML/CSS injections.
                    </p>
                  </div>
                </div>
                <button
                  onClick={restartAnimations}
                  className="text-xs text-[#0B2545] font-semibold flex items-center gap-1 hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Replay animations
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Animation 1: Page/Section Slide-up */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#0B2545] text-sm">
                      1. Page / Section Entrance Slide-Up
                    </h4>
                    <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      0.45s cubic-bezier(0.16, 1, 0.3, 1)
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    <strong>Trigger:</strong> Page load / container mount.<br />
                    <strong>Effect:</strong> Opacity moves from 0 to 1 while shifting vertically by{' '}
                    <code className="font-mono">translateY(14px)</code> to <code className="font-mono">translateY(0)</code>.
                    Prevents jarring layout pop in Streamlit.
                  </p>
                  <div
                    key={`demo-slide-${animTriggerKey}`}
                    className="p-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg anim-fade-slide-up text-xs text-[#0B2545] font-semibold flex items-center gap-2"
                  >
                    <Activity className="w-4 h-4 text-[#D9531E]" />
                    <span>Live container smoothly settled into viewport.</span>
                  </div>
                </div>

                {/* Animation 2: Button Hover & Press */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#0B2545] text-sm">
                      2. Button Hover &amp; Active Transition
                    </h4>
                    <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      0.18s ease-out
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    <strong>Trigger:</strong> <code className="font-mono">:hover</code> and{' '}
                    <code className="font-mono">:active</code>.<br />
                    <strong>Effect:</strong> Subtle -1px lift with shadow diffusion, smoothly darkening the saffron hue to Burnt Ochre (#C2410C).
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <button className="px-4 py-2 bg-[#D9531E] hover:bg-[#C2410C] hover:-translate-y-0.5 active:translate-y-0 text-white rounded-lg text-xs font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer">
                      Test Hover State
                    </button>
                    <button className="px-4 py-2 border border-[#CBD5E1] text-[#0B2545] hover:bg-slate-100 rounded-lg text-xs font-semibold transition-all cursor-pointer">
                      Secondary Hover
                    </button>
                  </div>
                </div>

                {/* Animation 3: Subtle Civic Loading Arc Spinner */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#0B2545] text-sm">
                      3. Civic Dual-Ring Arc Spinner
                    </h4>
                    <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      0.75s linear infinite
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    <strong>Trigger:</strong> Streamlit data fetching or model calculation state.<br />
                    <strong>Effect:</strong> 2.5px light slate circle with a crisp Deep Navy (#0B2545) top arc rotating smoothly.
                  </p>
                  <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#CBD5E1] border-t-[#0B2545] anim-spin" />
                    <span className="text-xs text-[#334155] font-medium">
                      Simulating telemetry ingestion from Pune Ward 8...
                    </span>
                  </div>
                </div>

                {/* Animation 4: Progress Bar Fill & Telemetry Pulse */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#0B2545] text-sm">
                      4. Metric Progress Bar Fill &amp; Pulse Dot
                    </h4>
                    <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      0.85s cubic-bezier(0.22, 1, 0.36, 1)
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    <strong>Trigger:</strong> Component render.<br />
                    <strong>Effect:</strong> Width property animates from 0% to calculated metric value. The pulse dot continuously pulses with a soft orange halo.
                  </p>
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#D9531E] anim-pulse-glow" />
                        <span className="font-medium text-[#0B2545]">National Grievance Resolution SLA</span>
                      </div>
                      <span className="font-bold text-[#0B2545]">78.4%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                      <div
                        key={`bar-${animTriggerKey}`}
                        className="bg-[#0B2545] h-full rounded-full transition-all"
                        style={{
                          width: '78.4%',
                          animation: 'civicProgressFill 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: NAVIGATION BAR STYLE */}
            <section id="section-nav" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    6
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">Navigation Bar System</h2>
                    <p className="text-xs text-[#64748B]">
                      Layout structure, active saffron bottom indicator, and mobile drawer behavior.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B]">Desktop + Mobile Specs</span>
              </div>

              {/* Live Interactive Navigation Bar Demo */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-xs">
                <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-4 py-2 text-[11px] font-mono text-[#64748B] flex items-center justify-between">
                  <span>LIVE DEMO COMPONENT: CIVIC PULSE NAV BAR</span>
                  <span>Height: 64px • Sticky Top</span>
                </div>

                <div className="px-5 h-16 flex items-center justify-between bg-white border-b border-[#E2E8F0]">
                  {/* Brand */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0B2545] text-white flex items-center justify-center font-bold">
                      <Activity className="w-4 h-4 text-[#D9531E]" />
                    </div>
                    <div>
                      <span className="font-heading font-extrabold text-[#0B2545] tracking-tight text-base">
                        CIVIC PULSE
                      </span>
                      <span className="hidden sm:inline-block ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-[#0B2545]">
                        INDIA
                      </span>
                    </div>
                  </div>

                  {/* Nav Links (Desktop) */}
                  <div className="hidden md:flex items-center gap-6 h-full">
                    {['Overview', 'District Heatmap', 'Signal Feed', 'Recommendations', 'Reports'].map(
                      (item) => {
                        const isActive = activeNavTab === item;
                        return (
                          <button
                            key={item}
                            onClick={() => setActiveNavTab(item)}
                            className={`h-full flex items-center text-xs font-semibold relative transition-colors cursor-pointer ${
                              isActive ? 'text-[#0B2545] font-bold' : 'text-[#64748B] hover:text-[#0B2545]'
                            }`}
                          >
                            <span>{item}</span>
                            {/* Active bottom saffron accent indicator bar */}
                            {isActive && (
                              <span
                                className="absolute bottom-0 left-0 right-0 h-0.75 bg-[#D9531E] rounded-t-sm"
                              />
                            )}
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* Right District Switcher */}
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] text-xs font-medium text-[#0F172A]">
                      <MapPin className="w-3.5 h-3.5 text-[#D9531E]" />
                      <span>Maharashtra • Pune Municipal</span>
                    </div>
                  </div>

                  {/* Mobile Hamburger toggle */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-1.5 rounded-md text-[#0B2545] hover:bg-slate-100"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>

                {/* Mobile Collapsed Drawer View */}
                {mobileMenuOpen && (
                  <div className="md:hidden p-4 bg-[#F8FAFC] border-b border-[#E2E8F0] space-y-2">
                    {['Overview', 'District Heatmap', 'Signal Feed', 'Recommendations', 'Reports'].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setActiveNavTab(item);
                            setMobileMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                            activeNavTab === item
                              ? 'bg-[#0B2545] text-white'
                              : 'text-[#334155] hover:bg-slate-200'
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Navigation Architectural Notes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                  <strong className="text-[#0B2545] block mb-1">Active State Indicator:</strong>
                  A solid 3px height saffron bar (<code className="font-mono text-[#D9531E]">#D9531E</code>) pinned
                  to the exact bottom border of the navbar, accompanied by bold Navy text.
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                  <strong className="text-[#0B2545] block mb-1">Layout &amp; Spacing:</strong>
                  64px fixed height with 24px horizontal padding. White background with a crisp 1px{' '}
                  <code className="font-mono">#E2E8F0</code> divider prevents visual heaviness.
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                  <strong className="text-[#0B2545] block mb-1">Streamlit Adaptation:</strong>
                  In Streamlit, can be rendered at the top of the main container via HTML markup or mapped to{' '}
                  <code className="font-mono">st.sidebar</code> with matching active item styling.
                </div>
              </div>
            </section>

            {/* SECTION 7: BADGE & STATUS CHIP STYLING */}
            <section id="section-chips" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    7
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">
                      Badge &amp; Status Chip Styling
                    </h2>
                    <p className="text-xs text-[#64748B]">
                      Calibrated contrast ratios, semantic status colors, and zero-pill discipline (rounded 6px rects).
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B]">5 Standardized States</span>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {statusChips.map((chip, idx) => {
                    const IconComponent = chip.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between"
                      >
                        <div>
                          <div className="mb-2">
                            <span
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase font-body"
                              style={{
                                backgroundColor: chip.badgeBg,
                                color: chip.textColor,
                                border: `1px solid ${chip.borderColor}`,
                              }}
                            >
                              <IconComponent className="w-3.5 h-3.5" />
                              <span>{chip.label}</span>
                            </span>
                          </div>
                          <p className="text-[11px] text-[#475569] leading-snug">{chip.desc}</p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#E2E8F0] text-[10px] font-mono text-[#64748B] space-y-0.5">
                          <div>bg: {chip.badgeBg}</div>
                          <div>color: {chip.textColor}</div>
                          <div>border: {chip.borderColor}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-xs text-[#475569] bg-[#FFF7ED] p-3 rounded-lg border border-[#FED7AA]">
                  <strong className="text-[#9A3412]">Anti-Slop Design Rule: </strong>
                  Avoid generic pill blobs with massive border radius. Standardize on{' '}
                  <code className="font-mono text-[#9A3412] font-semibold">border-radius: 6px</code>, uppercase text,
                  and an explicit 1px tinted border that keeps the status readable on both pure white and light slate tables.
                </div>
              </div>
            </section>

            {/* SECTION 8: MOBILE RESPONSIVE BEHAVIOR */}
            <section id="section-responsive" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    8
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#0B2545]">
                      Mobile Responsive Behavior Spec
                    </h2>
                    <p className="text-xs text-[#64748B]">
                      Adaptive layouts for field municipal engineers inspecting reports on smartphones.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#64748B]">Breakpoints: 640px / 768px / 1024px</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#0B2545] font-heading font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-[#D9531E]" />
                    <span>Hero Section on Mobile (&lt; 640px)</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-[#334155] leading-relaxed">
                    <li>
                      <strong>Heading font size:</strong> Scales down from 36px to 24px (1.5rem) to avoid taking more than 3 text wraps.
                    </li>
                    <li>
                      <strong>Padding:</strong> Tightens from 36px to 20px vertical and 16px horizontal to conserve limited vertical screen estate.
                    </li>
                    <li>
                      <strong>CTA Buttons:</strong> Switch to <code className="font-mono">flex-direction: column</code> with{' '}
                      <code className="font-mono">width: 100%</code>, ensuring comfortable 48px touch targets for thumbs.
                    </li>
                    <li>
                      <strong>Glow Blob:</strong> Radial glow reduces to 180px diameter and moves to 95% opacity blur.
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#0B2545] font-heading font-bold text-sm">
                    <Layers className="w-4 h-4 text-[#D9531E]" />
                    <span>Cards &amp; Metric Grids</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-[#334155] leading-relaxed">
                    <li>
                      <strong>Grid Behavior:</strong> Desktop 3-4 columns collapse to 2 columns on tablet (&lt; 1024px) and single column (100% width) on mobile (&lt; 640px).
                    </li>
                    <li>
                      <strong>Touch Feedback:</strong> On touch devices, replace hover lift with active state tap highlight (subtle border color change to Navy).
                    </li>
                    <li>
                      <strong>Card Padding:</strong> Compacts from 24px to 16px to prevent cards consuming full vertical viewport.
                    </li>
                    <li>
                      <strong>Typography:</strong> Metric numbers scale down from 36px to 28px.
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#0B2545] font-heading font-bold text-sm">
                    <Code2 className="w-4 h-4 text-[#D9531E]" />
                    <span>Streamlit Specific Directives</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-[#334155] leading-relaxed">
                    <li>
                      Use Streamlit's native <code className="font-mono">st.columns</code> with responsive fallback via{' '}
                      <code className="font-mono">@media (max-width: 640px)</code> overriding flex direction.
                    </li>
                    <li>
                      Streamlit tables (<code className="font-mono">st.dataframe</code>) should use container width{' '}
                      <code className="font-mono">use_container_width=True</code> with horizontal touch scrolling.
                    </li>
                    <li>
                      Keep all custom CSS scoped inside a single top-level style block to prevent re-injection flickering during Streamlit script reruns.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: LIVE INTERACTIVE PROTOTYPE */}
        {activeTab === 'prototype' && (
          <div className="space-y-6">
            {/* Viewport bar */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-3 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#0B2545]">Simulated Viewport:</span>
                <div className="flex items-center bg-[#F1F5F9] p-0.5 rounded-lg border border-[#E2E8F0]">
                  <button
                    onClick={() => setViewportMode('desktop')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      viewportMode === 'desktop' ? 'bg-white text-[#0B2545] shadow-xs' : 'text-[#64748B]'
                    }`}
                  >
                    Desktop (100%)
                  </button>
                  <button
                    onClick={() => setViewportMode('tablet')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      viewportMode === 'tablet' ? 'bg-white text-[#0B2545] shadow-xs' : 'text-[#64748B]'
                    }`}
                  >
                    Tablet (768px)
                  </button>
                  <button
                    onClick={() => setViewportMode('mobile')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      viewportMode === 'mobile' ? 'bg-white text-[#0B2545] shadow-xs' : 'text-[#64748B]'
                    }`}
                  >
                    Mobile (390px)
                  </button>
                </div>
              </div>

              <div className="text-xs text-[#64748B] hidden sm:block">
                Interactive preview demonstrating the complete Civic Pulse dashboard layout.
              </div>
            </div>

            {/* Simulated Frame */}
            <div
              className={`mx-auto transition-all duration-300 ${
                viewportMode === 'desktop'
                  ? 'w-full'
                  : viewportMode === 'tablet'
                  ? 'max-w-[768px] border-x border-[#CBD5E1] shadow-md'
                  : 'max-w-[390px] border-x border-[#CBD5E1] shadow-xl'
              }`}
            >
              {/* App Shell */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 space-y-6">
                {/* Hero Section in Prototype */}
                <div
                  className="civic-hero relative rounded-2xl p-6 sm:p-8 text-white overflow-hidden shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #0B2545 0%, #134074 65%, #1D4E89 100%)',
                  }}
                >
                  <div
                    className="absolute -top-10 -right-10 w-72 h-72 rounded-full pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(217, 83, 30, 0.25) 0%, rgba(217, 83, 30, 0) 70%)',
                    }}
                  />
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-wide border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-[#D9531E] anim-pulse-glow" />
                      <span>INDIA LIVE TELEMETRY</span>
                    </div>

                    <h1
                      className={`font-heading font-extrabold tracking-tight leading-tight ${
                        viewportMode === 'mobile' ? 'text-xl' : 'text-3xl'
                      }`}
                    >
                      Civic Pulse: Citizen Infrastructure Signal Hub
                    </h1>

                    <p
                      className={`text-slate-200 leading-relaxed ${
                        viewportMode === 'mobile' ? 'text-xs' : 'text-sm'
                      }`}
                    >
                      AI-assisted civic grievance clustering, water pipeline anomaly tracking, and municipal resource dispatch.
                    </p>

                    <div
                      className={`pt-2 flex gap-3 ${
                        viewportMode === 'mobile' ? 'flex-col w-full' : 'flex-row'
                      }`}
                    >
                      <button
                        className="px-4 py-2.5 rounded-lg text-xs font-heading font-semibold text-white transition-all shadow-xs flex items-center justify-center gap-1.5"
                        style={{ backgroundColor: '#D9531E' }}
                      >
                        <span>Dispatch Municipal Team</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button className="px-4 py-2.5 rounded-lg text-xs font-heading font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 flex items-center justify-center">
                        Filter By Ward
                      </button>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div
                  className={`grid gap-4 ${
                    viewportMode === 'mobile'
                      ? 'grid-cols-1'
                      : viewportMode === 'tablet'
                      ? 'grid-cols-2'
                      : 'grid-cols-4'
                  }`}
                >
                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 civic-card shadow-xs">
                    <div className="text-xs font-semibold text-[#64748B]">Active Signals</div>
                    <div className="font-heading text-2xl font-bold text-[#0B2545] mt-1">4,289</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">↑ 8% from yesterday</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 civic-card shadow-xs">
                    <div className="text-xs font-semibold text-[#64748B]">Critical Flags</div>
                    <div className="font-heading text-2xl font-bold text-[#D9531E] mt-1">29</div>
                    <div className="text-[11px] text-[#D9531E] font-medium mt-1">SLA &lt; 2 hrs</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 civic-card shadow-xs">
                    <div className="text-xs font-semibold text-[#64748B]">Avg Response Time</div>
                    <div className="font-heading text-2xl font-bold text-[#0B2545] mt-1">3.4 hrs</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">Municipal benchmark</div>
                  </div>

                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 civic-card shadow-xs">
                    <div className="text-xs font-semibold text-[#64748B]">Verified Resolution</div>
                    <div className="font-heading text-2xl font-bold text-emerald-700 mt-1">89.2%</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">Citizen corroborated</div>
                  </div>
                </div>

                {/* Live Incident Signals Table */}
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#0B2545]">
                        Incoming Citizen Signals &amp; Machine Telemetry
                      </h3>
                      <p className="text-xs text-[#64748B]">Real-time stream from Ward 1 through Ward 48</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 anim-live-dot" />
                      <span className="text-xs font-medium text-[#0B2545]">Live Stream</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        title: 'Koramangala 4th Block: Main 600mm Waterline Pressure Collapse',
                        ward: 'Ward 151, Bengaluru',
                        time: '8 mins ago',
                        status: 'High Priority',
                        statusColor: '#C2410C',
                        statusBg: '#FFF1EC',
                        statusBorder: '#FDBA74',
                        signals: '42 Citizen Reports',
                      },
                      {
                        title: 'Shivajinagar Junction: Stormwater Drain Silt Congestion Alert',
                        ward: 'Ward 24, Pune',
                        time: '24 mins ago',
                        status: 'Under Review',
                        statusColor: '#92400E',
                        statusBg: '#FEF3C7',
                        statusBorder: '#FDE68A',
                        signals: '18 Sensor Signals',
                      },
                      {
                        title: 'Rohini Sector 11: Underground Electrical Conduit Thermal Anomaly',
                        ward: 'Ward 32, Delhi NCT',
                        time: '1 hour ago',
                        status: 'Verified Signal',
                        statusColor: '#065F46',
                        statusBg: '#ECFDF5',
                        statusBorder: '#A7F3D0',
                        signals: 'Sensor + 3 Field Audits',
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] bg-white civic-card flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase font-body"
                              style={{
                                backgroundColor: item.statusBg,
                                color: item.statusColor,
                                border: `1px solid ${item.statusBorder}`,
                              }}
                            >
                              {item.status}
                            </span>
                            <span className="text-xs font-bold text-[#0B2545]">{item.title}</span>
                          </div>
                          <div className="text-xs text-[#64748B] flex items-center gap-3">
                            <span>{item.ward}</span>
                            <span>•</span>
                            <span>{item.time}</span>
                            <span>•</span>
                            <span className="text-[#0B2545] font-medium">{item.signals}</span>
                          </div>
                        </div>

                        <button className="self-start sm:self-center px-3 py-1.5 rounded-md bg-[#F1F5F9] hover:bg-[#E2E8F0] text-xs font-semibold text-[#0B2545] shrink-0 transition-colors">
                          View Signal
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: STREAMLIT CSS CODE GENERATOR */}
        {activeTab === 'css-generator' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9531E]">
                  <FileCode className="w-4 h-4" />
                  <span>Python Streamlit Implementation Guide</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#0B2545] mt-1">
                  Ready-to-Paste Streamlit CSS Block
                </h2>
                <p className="text-xs text-[#475569] mt-1">
                  Copy this complete block into your <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">app.py</code>.
                  It styles Streamlit's native metrics, buttons, markdown cards, and injects Google Fonts automatically.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(streamlitCssCode, 'Complete Streamlit CSS Code')}
                className="px-4 py-2.5 rounded-lg text-xs font-heading font-semibold text-white bg-[#0B2545] hover:bg-[#134074] transition flex items-center gap-2 shrink-0 shadow-sm"
              >
                <Copy className="w-4 h-4 text-[#D9531E]" />
                <span>Copy Entire CSS Code</span>
              </button>
            </div>

            {/* Code Block Display */}
            <div className="bg-[#0F172A] rounded-xl border border-slate-800 text-slate-200 overflow-hidden shadow-xl">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>app.py snippet for Streamlit</span>
                <span className="text-[11px] text-emerald-400">Pure CSS • Zero JS Framework Dependencies</span>
              </div>
              <pre className="p-5 text-xs font-mono overflow-x-auto leading-relaxed text-slate-300">
                {streamlitCssCode}
              </pre>
            </div>

            {/* Quick Streamlit Integration snippet */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs space-y-3">
              <h3 className="font-heading font-bold text-sm text-[#0B2545]">
                How to use in your Streamlit Python Code:
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-mono text-slate-800">
                <span className="text-purple-600 font-bold">import</span> streamlit <span className="text-purple-600 font-bold">as</span> st
                <br /><br />
                <span className="text-slate-500"># 1. Inject the custom CSS</span><br />
                st.markdown(CIVIC_PULSE_CSS, unsafe_allow_html=<span className="text-amber-600 font-bold">True</span>)
                <br /><br />
                <span className="text-slate-500"># 2. Render Hero using standard HTML div in st.markdown</span><br />
                st.markdown(<span className="text-emerald-700">"""
&lt;div class="civic-hero"&gt;
  &lt;h1&gt;Civic Pulse: Citizen Infrastructure Signal Hub&lt;/h1&gt;
  &lt;p&gt;Real-time civic alerts and municipal recommendations.&lt;/p&gt;
&lt;/div&gt;
"""</span>, unsafe_allow_html=<span className="text-amber-600 font-bold">True</span>)
                <br /><br />
                <span className="text-slate-500"># 3. Streamlit native metrics will automatically inherit the card hover lift & typography</span><br />
                col1, col2, col3 = st.columns(3)<br />
                col1.metric(<span className="text-emerald-700">"Active Signals"</span>, <span className="text-emerald-700">"3,842"</span>, <span className="text-emerald-700">"+12%"</span>)<br />
                col2.metric(<span className="text-emerald-700">"Urgent Flags"</span>, <span className="text-emerald-700">"47"</span>, <span className="text-emerald-700">"-5"</span>)<br />
                col3.metric(<span className="text-emerald-700">"SLA Resolution"</span>, <span className="text-emerald-700">"81.6%"</span>)
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] py-6 mt-12 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-[#0B2545]">CIVIC PULSE</span>
            <span>•</span>
            <span>India Civic-Tech Hackathon Design System &amp; Streamlit Spec</span>
          </div>
          <div>
            <span>Crafted for high trust, rapid citizen telemetry, and pure CSS deployment</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
