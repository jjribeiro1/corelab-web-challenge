import './index.css';
import { NavBar } from './components/NavBar';

export default function App() {
  return (
    <>
      <div className="bg-[#F0F2F5] w-full min-h-screen">
        <header>
          <NavBar />
        </header>
      </div>
    </>
  );
}
