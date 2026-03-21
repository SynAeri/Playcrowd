// Retro liminal space website with rotating Teto pear
// Focuses on abstraction and non-conventional design patterns

import TetoPear from './components/TetoPear'
import './styles.css'

export default function Home() {
  return (
    <main className="liminal-container">
      {/* Floating abstract shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>

      {/* Scanline overlay */}
      <div className="scanlines"></div>

      {/* Glitch text elements */}
      <div className="text-element text-top">LIMINAL</div>
      <div className="text-element text-bottom">SPACE</div>
      <div className="text-element text-left">ENTER</div>
      <div className="text-element text-right">VOID</div>

      {/* Center rotating Teto pear */}
      <div className="center-container">
        <TetoPear />
      </div>

      {/* Abstract grid background */}
      <div className="grid-overlay"></div>

      {/* Corner timestamps */}
      <div className="timestamp timestamp-tl">19:84</div>
      <div className="timestamp timestamp-tr">∞</div>
      <div className="timestamp timestamp-bl">NULL</div>
      <div className="timestamp timestamp-br">???</div>
    </main>
  )
}
