import { Link, NavLink, Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Python Quest home">
          <span className="brand-mark">Py</span>
          <span>Python Quest</span>
        </Link>
        <nav aria-label="Main navigation" className="topnav">
          <NavLink to="/quests">Quest Map</NavLink>
          <a href="https://docs.python.org/ko/3/" target="_blank" rel="noreferrer">
            공식 문서
          </a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
