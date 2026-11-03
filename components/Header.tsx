import HeaderClient from './header/HeaderClient';

/**
 * Header is a thin server wrapper around HeaderClient.
 * Language, brand text, and nav must update on client-side language switches;
 * that cannot be done reliably from a layout-level Server Component that only
 * sees x-pathname on the first render.
 */
export default function Header() {
  return (
    <header
      id="main-header"
      role="banner"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <HeaderClient />
        </div>
      </div>
    </header>
  );
}
