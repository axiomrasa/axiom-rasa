export const Crosshair = ({ mousePos }: { mousePos: { x: number, y: number } }) => (
  <div 
    className="fixed pointer-events-none z-50 text-cyan-400 text-3xl font-light opacity-80"
    style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }}
  >
    +
  </div>
);