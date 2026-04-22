"use client";
import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Dir = { dx: number; dy: number };
type Phase = "idle" | "playing" | "dead" | "won" | "over";

interface Ghost {
  x: number;
  y: number;
  color: string;
  dir: Dir;
  frightened: boolean;
}

interface Pac {
  x: number;
  y: number;
  dir: Dir;
  next: Dir;
}

interface GameState {
  map: number[][];
  pac: Pac;
  ghosts: Ghost[];
  score: number;
  lives: number;
  frightTicks: number;
  phase: Phase;
  mouth: number;
  mouthDir: number;
}

interface RenderSnapshot {
  map: number[][];
  pac: Pac;
  ghosts: Ghost[];
  score: number;
  lives: number;
  frightTicks: number;
  phase: Phase;
  mouth: number;
}

// ─── MAP  (1=wall, 0=empty, 2=dot, 3=power pellet) ──────────────────────────
const RAW_MAP: number[][] = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
  [1,3,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,3,1],
  [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,2,1],
  [1,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1],
  [1,1,1,1,2,1,1,1,0,0,0,1,1,1,2,1,1,1,1],
  [1,1,1,1,2,1,0,0,0,1,0,0,0,1,2,1,1,1,1],
  [0,0,0,0,2,0,0,1,0,0,0,1,0,0,2,0,0,0,0],
  [1,1,1,1,2,1,0,0,0,1,0,0,0,1,2,1,1,1,1],
  [1,1,1,1,2,1,1,1,0,0,0,1,1,1,2,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
  [1,3,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,3,1],
  [1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1],
  [1,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1],
  [1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const ROWS = RAW_MAP.length;
const COLS = RAW_MAP[0].length;
const CELL = 24;

const DIRS: Record<string, Dir> = {
  ArrowUp:    { dx:  0, dy: -1 },
  ArrowDown:  { dx:  0, dy:  1 },
  ArrowLeft:  { dx: -1, dy:  0 },
  ArrowRight: { dx:  1, dy:  0 },
};
const ZERO_DIR: Dir = { dx: 0, dy: 0 };

const GHOST_COLORS = ["#FF0000", "#FFB8FF", "#00FFFF", "#FFB852"];
const GHOST_HOME: Array<{ x: number; y: number }> = [
  { x: 8, y: 9 }, { x: 9, y: 9 }, { x: 10, y: 9 }, { x: 9, y: 10 },
];
const PAC_START = { x: 9, y: 15 };

function freshMap(): number[][] { return RAW_MAP.map(r => [...r]); }
function isWall(map: number[][], x: number, y: number): boolean {
  if (y < 0 || y >= ROWS) return true;
  const wx = (x + COLS) % COLS;
  return map[y][wx] === 1;
}
function countDots(map: number[][]): number { return map.flat().filter(c => c === 2 || c === 3).length; }

function initState(): GameState {
  return {
    map: freshMap(),
    pac: { ...PAC_START, dir: { ...ZERO_DIR }, next: { ...ZERO_DIR } },
    ghosts: GHOST_HOME.map((g, i) => ({
      ...g, color: GHOST_COLORS[i], dir: { dx: 1, dy: 0 }, frightened: false,
    })),
    score: 0,
    lives: 3,
    frightTicks: 0,
    phase: "idle",
    mouth: 35,
    mouthDir: -1,
  };
}

export default function PacmanGame() {
  // All mutable game state lives here — no stale closure issues
  const G = useRef<GameState>(initState());
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickCount = useRef<number>(0);

  // React render state (snapshot of G)
  const [render, setRender] = useState<RenderSnapshot>(() => snap());

  function snap(): RenderSnapshot {
    const s = G.current;
    return {
      map:         s.map.map(r => [...r]),
      pac:         { ...s.pac, dir: { ...s.pac.dir } },
      ghosts:      s.ghosts.map(g => ({ ...g, dir: { ...g.dir } })),
      score:       s.score,
      lives:       s.lives,
      frightTicks: s.frightTicks,
      phase:       s.phase,
      mouth:       s.mouth,
    };
  }

  const flush = () => setRender(snap());

  // ── Reset ──────────────────────────────────────────────────────────────────
  function resetGame(full: boolean) {
    const s = G.current;
    s.map = freshMap();
    s.pac = { ...PAC_START, dir: { ...ZERO_DIR }, next: { ...ZERO_DIR } };
    s.ghosts = GHOST_HOME.map((g, i) => ({
      ...g, color: GHOST_COLORS[i], dir: { dx: 1, dy: 0 }, frightened: false,
    }));
    s.frightTicks = 0;
    s.mouth = 35;
    s.mouthDir = -1;
    if (full) { s.score = 0; s.lives = 3; s.phase = "idle"; stopLoop(); }
    else       { s.phase = "playing"; }
    flush();
  }

  // ── Loop control ───────────────────────────────────────────────────────────
  function startLoop() {
    if (loopRef.current) return;
    tickCount.current = 0;
    loopRef.current = setInterval(gameTick, 140);
  }
  function stopLoop() {
    if (loopRef.current !== null) {
      clearInterval(loopRef.current);
      loopRef.current = null;
    }
  }

  // ── Ghost AI ───────────────────────────────────────────────────────────────
  function stepGhost(g: Ghost, map: number[][], pacX: number, pacY: number): Ghost {
    const candidates = Object.values(DIRS).filter((d: Dir) => {
      // No immediate U-turn
      if (d.dx === -g.dir.dx && d.dy === -g.dir.dy) return false;
      const nx = (g.x + d.dx + COLS) % COLS;
      return !isWall(map, nx, g.y + d.dy);
    });

    if (candidates.length === 0) {
      return { ...g, dir: { dx: -g.dir.dx, dy: -g.dir.dy } };
    }

    let chosen: Dir;
    if (g.frightened || Math.random() < 0.3) {
      chosen = candidates[Math.floor(Math.random() * candidates.length)];
    } else {
      chosen = candidates.reduce((best: Dir, d: Dir) => {
        const nx  = (g.x +      d.dx + COLS) % COLS, ny  = g.y + d.dy;
        const bx  = (g.x + best.dx   + COLS) % COLS, by  = g.y + best.dy;
        return ((nx - pacX) ** 2 + (ny - pacY) ** 2) <
               ((bx - pacX) ** 2 + (by - pacY) ** 2) ? d : best;
      });
    }
    return { ...g, x: (g.x + chosen.dx + COLS) % COLS, y: g.y + chosen.dy, dir: chosen };
  }

  // ── Main tick (runs inside setInterval — reads/writes G.current only) ─────
  function gameTick() {
    const s = G.current;
    if (s.phase !== "playing") return;
    tickCount.current++;

    // Mouth chomp
    s.mouth += s.mouthDir * 7;
    if (s.mouth <= 4)  { s.mouth = 4;  s.mouthDir =  1; }
    if (s.mouth >= 38) { s.mouth = 38; s.mouthDir = -1; }

    // Frightened countdown
    if (s.frightTicks > 0) s.frightTicks--;
    const frightened = s.frightTicks > 0;

    // ── Pac-Man movement ────────────────────────────────────────────────────
    const { pac, map } = s;

    // Try queued direction
    if (!isWall(map, pac.x + pac.next.dx, pac.y + pac.next.dy)) {
      pac.dir = { ...pac.next };
    }

    let nx = (pac.x + pac.dir.dx + COLS) % COLS;
    let ny =  pac.y + pac.dir.dy;
    if (isWall(map, nx, ny)) { nx = pac.x; ny = pac.y; }

    pac.x = nx;
    pac.y = ny;

    // Eat pellets
    if (map[ny][nx] === 2) { map[ny][nx] = 0; s.score += 10; }
    else if (map[ny][nx] === 3) { map[ny][nx] = 0; s.score += 50; s.frightTicks = 35; }

    // Win check
    if (countDots(map) === 0) {
      s.phase = "won";
      stopLoop();
      flush();
      return;
    }

    // ── Ghosts (every 2nd tick) ─────────────────────────────────────────────
    if (tickCount.current % 2 === 0) {
      s.ghosts = s.ghosts.map(g => stepGhost({ ...g, frightened }, map, pac.x, pac.y));
    } else {
      s.ghosts = s.ghosts.map(g => ({ ...g, frightened }));
    }

    // ── Collision ───────────────────────────────────────────────────────────
    let died = false;
    s.ghosts = s.ghosts.map((g, gi) => {
      if (Math.abs(g.x - pac.x) <= 0 && Math.abs(g.y - pac.y) <= 0) {
        if (g.frightened) {
          s.score += 200;
          return { ...g, ...GHOST_HOME[gi], dir: { dx: 1, dy: 0 }, frightened: false };
        }
        died = true;
      }
      return g;
    });

    if (died) {
      s.lives -= 1;
      if (s.lives <= 0) {
        s.phase = "over";
        stopLoop();
      } else {
        s.phase = "dead";
        stopLoop();
        setTimeout(() => { resetGame(false); startLoop(); }, 900);
      }
    }

    flush();
  }

  // ── Keyboard ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!DIRS[e.key]) return;
      e.preventDefault();
      G.current.pac.next = { ...DIRS[e.key] };
      if (G.current.phase === "idle") {
        G.current.phase = "playing";
        flush();
        startLoop();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // eslint-disable-line

  const handleDpad = (key: string) => {
    G.current.pac.next = { ...DIRS[key] };
    if (G.current.phase === "idle") {
      G.current.phase = "playing";
      flush();
      startLoop();
    }
  };

  // Cleanup on unmount
  useEffect(() => () => stopLoop(), []); // eslint-disable-line

  // ── Render ─────────────────────────────────────────────────────────────────
  const { map, pac, ghosts, score, lives, phase, mouth, frightTicks } = render;

  const rot = pac.dir.dx === 1 ? 0 : pac.dir.dx === -1 ? 180 : pac.dir.dy === -1 ? 270 : pac.dir.dy === 1 ? 90 : 0;
  const halfCell = CELL / 2 - 1;
  const pcx = halfCell + 1, pcy = halfCell + 1;
  const rad = (mouth * Math.PI) / 180;
  const px1 = pcx + halfCell * Math.cos(rad),  py1 = pcy + halfCell * Math.sin(rad);
  const px2 = pcx + halfCell * Math.cos(-rad), py2 = pcy - halfCell * Math.sin(rad);

  const dpadLayout: (string | null)[][] = [
    [null, "ArrowUp", null],
    ["ArrowLeft", null, "ArrowRight"],
    [null, "ArrowDown", null],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", userSelect: "none", fontFamily: "monospace" }}>

      {/* Score bar */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        width: COLS * CELL, maxWidth: "100%",
        padding: "5px 10px", marginBottom: 6,
        background: "#111", borderRadius: 8,
        color: "#E9631A", fontSize: "0.82rem", letterSpacing: "0.08em",
        boxSizing: "border-box",
      }}>
        <span>SCORE: {String(score).padStart(5, "0")}</span>
        <span style={{ color: "#FFD700" }}>{"♥ ".repeat(lives).trim()}</span>
      </div>

      {/* Game board */}
      <div style={{
        position: "relative",
        width:  COLS * CELL,
        height: ROWS * CELL,
        maxWidth: "100%",
        background: "#000",
        borderRadius: 8,
        overflow: "hidden",
        border: "2px solid rgba(233,99,26,0.5)",
        boxShadow: "0 0 24px rgba(233,99,26,0.12)",
      }}>

        {/* Map cells */}
        {map.map((row, y) => row.map((cell, x) => (
          <div key={`${y}-${x}`} style={{
            position: "absolute",
            left: x * CELL, top: y * CELL,
            width: CELL, height: CELL,
            background: cell === 1 ? "#1010c8" : "transparent",
            border:     cell === 1 ? "1px solid #0a0a99" : "none",
            boxSizing: "border-box",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {cell === 2 && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#f5d98b" }} />}
            {cell === 3 && <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E9631A", boxShadow: "0 0 8px #E9631A", animation: "ppulse 0.55s infinite alternate" }} />}
          </div>
        )))}

        {/* Pac-Man */}
        <svg
          style={{
            position: "absolute",
            left: pac.x * CELL,
            top:  pac.y * CELL,
            transform: `rotate(${rot}deg)`,
            transformOrigin: "center",
            transition: "left 0.1s linear, top 0.1s linear",
            filter: "drop-shadow(0 0 5px #FFDD00)",
            zIndex: 10,
          }}
          width={CELL} height={CELL}
        >
          <path
            d={`M ${pcx},${pcy} L ${px1},${py1} A ${halfCell},${halfCell} 0 1 1 ${px2},${py2} Z`}
            fill="#FFDD00"
          />
        </svg>

        {/* Ghosts */}
        {ghosts.map((g, i) => {
          const flash = g.frightened && frightTicks < 12 && Math.floor(Date.now() / 200) % 2 === 0;
          const gc = g.frightened ? (flash ? "#ffffff" : "#2222ff") : g.color;
          return (
            <svg key={i} style={{
              position: "absolute",
              left: g.x * CELL, top: g.y * CELL,
              transition: "left 0.16s linear, top 0.16s linear",
              zIndex: 9,
            }} width={CELL} height={CELL} viewBox="0 0 24 24">
              <path d="M 2,22 L 2,10 Q 2,2 12,2 Q 22,2 22,10 L 22,22 Q 19,18 16,22 Q 14,18 12,22 Q 10,18 8,22 Q 5,18 2,22 Z" fill={gc} />
              {!g.frightened ? (
                <>
                  <circle cx="8.5"  cy="10" r="2.8" fill="white" />
                  <circle cx="15.5" cy="10" r="2.8" fill="white" />
                  <circle cx={8.5  + g.dir.dx * 1.2} cy={10 + g.dir.dy * 1.2} r="1.4" fill="#00008b" />
                  <circle cx={15.5 + g.dir.dx * 1.2} cy={10 + g.dir.dy * 1.2} r="1.4" fill="#00008b" />
                </>
              ) : (
                <path d="M 7,13 Q 9,11 11,13 Q 13,11 15,13 Q 17,11 17,11" stroke="white" strokeWidth="1.3" fill="none" />
              )}
            </svg>
          );
        })}

        {/* Overlays */}
        {(phase === "idle" || phase === "won" || phase === "over" || phase === "dead") && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 20,
            background: phase === "dead" ? "rgba(255,30,30,0.3)" : "rgba(0,0,0,0.83)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 14,
          }}>
            {phase !== "dead" && (
              <>
                <div style={{ color: "#FFDD00", fontSize: "clamp(1.1rem,5vw,1.9rem)", fontWeight: "bold", letterSpacing: "0.15em", textShadow: "0 0 20px #FFDD00" }}>
                  {phase === "idle" ? "PAC‑MAN" : phase === "won" ? "YOU WIN! 🎉" : "GAME OVER"}
                </div>
                {phase !== "idle" && (
                  <div style={{ color: "#E9631A", fontSize: "1rem" }}>SCORE: {score}</div>
                )}
                <button
                  onClick={() => resetGame(true)}
                  style={{
                    marginTop: 6, padding: "10px 32px",
                    background: "#E9631A", color: "#000",
                    border: "none", borderRadius: 6,
                    fontSize: "1rem", fontWeight: "bold",
                    cursor: "pointer", letterSpacing: "0.1em",
                    boxShadow: "0 0 18px rgba(233,99,26,0.7)",
                  }}
                >
                  {phase === "idle" ? "START" : "PLAY AGAIN"}
                </button>
                {phase === "idle" && (
                  <div style={{ color: "#555", fontSize: "0.75rem" }}>Arrow keys · D-pad below</div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* D-pad */}
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, 48px)", gridTemplateRows: "repeat(3, 48px)", gap: 5 }}>
        {dpadLayout.map((row, ri) => row.map((key, ci) => (
          <button
            key={`${ri}-${ci}`}
            onPointerDown={() => key && handleDpad(key)}
            style={{
              width: 48, height: 48,
              visibility: key ? "visible" : "hidden",
              background: "rgba(233,99,26,0.12)",
              border: "1px solid rgba(233,99,26,0.4)",
              borderRadius: 10, color: "#E9631A",
              fontSize: "1.3rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {key === "ArrowUp" ? "▲" : key === "ArrowDown" ? "▼" : key === "ArrowLeft" ? "◀" : "▶"}
          </button>
        )))}
      </div>

      <style>{`
        @keyframes ppulse {
          from { transform: scale(1); opacity: 1; }
          to   { transform: scale(1.35); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}