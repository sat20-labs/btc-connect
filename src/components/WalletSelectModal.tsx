import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { closeIcon, loadingIcon } from '../assets';
import { BtcConnectorId } from '../types/wallet';

export interface WalletSelectModalProps {
  visible: boolean;
  title?: string;
  className?: string;
  zIndex?: number;
  theme?: 'light' | 'dark';
  wallets: any[];
  onClick?: (id: BtcConnectorId) => void;
  onClose?: () => void;
}

// --- CSS-in-JS Styles Object ---
const styles = {
  modalRoot: (zIndex: number): React.CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex,
  }),
  overlay: (theme: 'light' | 'dark'): React.CSSProperties => ({
    backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute', // Ensure overlay covers everything
    top: 0,
    left: 0,
  }),
  modalContentBoxBase: (theme: 'light' | 'dark'): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '18rem', // w-72
    maxWidth: '90%',
    minHeight: '7.5rem', // min-h-30 (approx)
    maxHeight: '90vh', // Use 90vh instead of max-h-[full] for safety
    borderRadius: '0.75rem', // rounded-xl
    overflow: 'hidden', // Keep overflow hidden base
    backgroundColor: theme === 'dark' ? '#18181b' : '#ffffff',
    color: theme === 'dark' ? '#ecedee' : '#000000',
    display: 'flex', // Use flex to manage header/content height
    flexDirection: 'column',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Add subtle shadow
  }),
  headerBase: (theme: 'light' | 'dark'): React.CSSProperties => ({
    padding: '1rem', // p-4
    position: 'relative',
    borderBottom: `1px solid ${theme === 'dark' ? '#3f3f46' : '#e5e7eb'}`, // border-b border-gray-700/200 (adjusted dark color)
    flexShrink: 0, // Prevent header from shrinking
  }),
  title: {
    fontSize: '1.125rem', // text-lg looks better than xl
    lineHeight: '1.75rem',
    fontWeight: '600', // font-semibold looks better than bold
    textAlign: 'center', // text-center
  } as React.CSSProperties,
  closeButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '1rem', // right-4
    background: 'none',
    border: 'none',
    padding: '0.25rem', // Add padding for easier click
    cursor: 'pointer',
    borderRadius: '50%', // Make it round on hover
    display: 'flex', // Align icon inside
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',
  } as React.CSSProperties,
  closeButtonHover: (theme: 'light' | 'dark'): React.CSSProperties => ({
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
  }),
  closeIconBase: (theme: 'light' | 'dark'): React.CSSProperties => ({
    width: '1.25rem', // w-5 looks better
    height: '1.25rem', // h-5
    filter: theme === 'dark' ? 'invert(1)' : 'none',
    display: 'block', // Ensure img is block for layout
  }),
  walletListContainer: {
    padding: '0.5rem', // Reduce padding slightly
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem', // Reduce gap slightly
    flexGrow: 1, // Allow list to grow and potentially scroll
    overflowY: 'auto', // Enable scrolling for the list itself
  } as React.CSSProperties,
  walletItemBase: (theme: 'light' | 'dark', installed: boolean): React.CSSProperties => ({
    height: '3.5rem', // Increase height slightly
    cursor: installed ? 'pointer' : 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 0.75rem', // Adjust padding
    gap: '0.75rem', // Adjust gap
    borderRadius: '0.375rem', // rounded-md looks better
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent', // Add default transparent background
    // Removed background color here, apply on hover/active
    color: theme === 'dark' ? '#ecedee' : '#1f2937', // Use darker text in light mode
    opacity: installed ? 1 : 0.5, // Dim if not installed more significantly
    transition: 'background-color 0.15s ease-out', // Faster transition
  }),
  walletItemHoverActive: (theme: 'light' | 'dark'): React.CSSProperties => ({
    backgroundColor: theme === 'dark' ? '#27272a' : '#f3f4f6', // bg-zinc-800 / bg-gray-100
  }),
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly less opaque
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Ensure it's above wallet content
    borderRadius: 'inherit', // Inherit parent border radius
  } as React.CSSProperties,
  loadingIcon: (theme: 'light' | 'dark'): React.CSSProperties => ({
    width: '1.5rem', // w-6
    height: '1.5rem', // h-6
    color: theme === 'dark' ? '#a1a1aa' : '#9ca3af', // Give spinner color (gray)
  }),
  walletInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 0%', // flex-1
    minWidth: 0, // Prevent flex item overflow issues
  } as React.CSSProperties,
  walletLogo: {
    width: '2rem', // w-8
    height: '2rem', // h-8
    marginRight: '0.75rem', // mr-3
    flexShrink: 0,
  } as React.CSSProperties,
  walletName: {
    flex: '1 1 auto', // Allow name to take space but shrink if needed
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: '500', // Medium weight
  } as React.CSSProperties,
  notInstalledText: (theme: 'light' | 'dark'): React.CSSProperties => ({
    fontSize: '0.75rem', // text-xs
    lineHeight: '1rem',
    color: theme === 'dark' ? '#a16207' : '#9a3412', // dark:text-yellow-700 / text-orange-800
    backgroundColor: theme === 'dark' ? 'rgba(252, 211, 77, 0.1)' : 'rgba(255, 237, 213, 0.5)', // Subtle bg
    padding: '0.125rem 0.375rem', // py-0.5 px-1.5
    borderRadius: '0.25rem', // rounded-sm
    whiteSpace: 'nowrap',
    marginLeft: '0.5rem', // Add some space
    flexShrink: 0,
    fontWeight: '500',
  }),
};

// Define keyframes and animation class using a style tag content
const spinAnimation = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-modal { /* Use a specific class name */
    animation: spin 1s linear infinite;
  }
`;
// --- End Styles ---


export const WalletSelectModal = ({
  visible,
  title = 'Select Wallet',
  theme = 'light',
  wallets = [],
  zIndex = 100,
  className, // User-provided class for the main content box
  onClick,
  onClose,
}: WalletSelectModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [loading, setLoading] = useState<BtcConnectorId | null>(null); // Store loading wallet ID
  const [hoveredWallet, setHoveredWallet] = useState<string | null>(null);
  const [hoveredClose, setHoveredClose] = useState(false);


  const clickHandler = async (id: BtcConnectorId, installed: boolean) => {
    if (loading || !installed) return;
    setLoading(id); // Set loading state for this specific wallet
    try {
      await onClick?.(id);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      // Potentially show an error message to the user here
    } finally {
      setLoading(null); // Clear loading state regardless of success/error
    }
  };
  useEffect(() => {
    setIsBrowser(true);
    // Add style tag for animation when component mounts in browser
    const styleTag = document.createElement('style');
    styleTag.id = 'spin-animation-style'; // Add an ID to prevent duplicates
    styleTag.innerHTML = spinAnimation;
    if (!document.getElementById(styleTag.id)) {
      document.head.appendChild(styleTag);
    }
    // Cleanup style tag on unmount
    return () => {
      const existingStyleTag = document.getElementById(styleTag.id);
      if (existingStyleTag) {
        // Check if parentNode exists before removing
        if (existingStyleTag.parentNode) {
          existingStyleTag.parentNode.removeChild(existingStyleTag);
        }
      }
    };
  }, []);

  const modalContent = visible ? (
    <div style={styles.modalRoot(zIndex)}>
      {/* Overlay */}
      <div style={styles.overlay(theme)} onClick={() => !loading && onClose?.()}></div>

      {/* Content Box */}
      <div
        style={styles.modalContentBoxBase(theme)}
        className={className} // Apply user's className here
      >
        {/* Header */}
        <div style={styles.headerBase(theme)}>
          <h2 style={styles.title}>{title}</h2>
          <button
            onClick={() => !loading && onClose?.()}
            style={{
              ...styles.closeButton,
              ...(hoveredClose ? styles.closeButtonHover(theme) : {})
            }}
            onMouseEnter={() => setHoveredClose(true)}
            onMouseLeave={() => setHoveredClose(false)}
            disabled={!!loading}
            aria-label="Close Wallet Select Modal"
          >
            <img
              src={closeIcon}
              alt='close'
              style={styles.closeIconBase(theme)}
            />
          </button>
        </div>

        {/* Wallet List */}
        <div style={styles.walletListContainer}>
          {wallets.map((wallet: any) => {
            const isLoadingThis = loading === wallet.id;
            const isHovered = hoveredWallet === wallet.id;
            const itemStyle = {
              ...styles.walletItemBase(theme, wallet.installed),
              ...((isHovered || isLoadingThis) && wallet.installed ? styles.walletItemHoverActive(theme) : {}), // Apply hover/active style
            };

            return (
              <div
                key={wallet.id}
                onClick={() => clickHandler?.(wallet.id, wallet.installed)}
                style={itemStyle}
                onMouseEnter={() => wallet.installed && setHoveredWallet(wallet.id)}
                onMouseLeave={() => setHoveredWallet(null)}
                aria-disabled={!wallet.installed || !!loading}
                role="button"
                tabIndex={wallet.installed && !loading ? 0 : -1} // Make clickable items focusable
              >
                {/* Loading Overlay (only if loading this wallet) */}
                {isLoadingThis && (
                  <div style={styles.loadingOverlay}>
                    {/* Use SVG for loading icon for color control */}
                    <svg
                      style={styles.loadingIcon(theme)}
                      className="animate-spin-modal"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}

                {/* Wallet Info */}
                <div style={styles.walletInfoContainer}>
                  <img
                    src={wallet.logo}
                    alt={`${wallet.name} logo`}
                    style={styles.walletLogo}
                  />
                  <span style={styles.walletName}>{wallet.name}</span>
                </div>

                {/* Not Installed Text */}
                {!wallet.installed && (wallet.downloadUrl ? (
                  <a href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer" >
                    Download
                  </a>
                ) : (
                  <div style={styles.notInstalledText(theme)}>
                    Not Installed
                  </div>)
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    // Ensure the portal target exists
    let portalContainer = document.getElementById('wallet-modal-portal');
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = 'wallet-modal-portal';
      document.body.appendChild(portalContainer);
    }
    return ReactDOM.createPortal(modalContent, portalContainer);
  } else {
    return null;
  }
};
