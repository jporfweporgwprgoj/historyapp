import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <header>
        <h1>Russian History: 862-1547</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Created with React, Three.js, and Vite</p>
      </footer>
    </div>
  );
};

export default Layout;
