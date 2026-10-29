# Chakravyuh — Smart ENTC Learning & Innovation Platform

> **Interactive Digital Logic & Circuit Simulation Workbench for Electronics & Telecommunication Engineering (ENTC) Students**

Chakravyuh is a lightweight, responsive web application designed for engineering hackathons and digital electronics coursework. It gives students hands-on experience building, wiring, and testing combinational logic circuits right in their browser—complete with glowing electrical signal propagation, dynamic truth table generation, guided lab challenges, and a circuit-aware rule-based learning assistant.

---

## ⚡ Key Features

1. **Virtual Logic Lab (Interactive Schematic Workbench)**
   - **Components**: Toggleable Input Switches (0 = LOW/0V, 1 = HIGH/5V), Standard Logic Gates (AND `7408`, OR `7432`, NOT `7404`, NAND `7400`, NOR `7402`, XOR `7486`), and Output LED indicator probes.
   - **Signal Visualization**: Live voltage propagation where HIGH (1) wires pulse with electric cyan glow and LOW (0) wires show inactive slate lines.
   - **Dynamic Truth Table Generator**: Automatically computes all $2^n$ binary permutations for any active circuit and highlights the row matching the switches' current positions in real time.
   - **Dual Wiring Mode**:
     - *Visual Canvas*: Drag-and-drop components, click terminal handles to draw cubic Bezier wires.
     - *Step Wiring Matrix*: Direct dropdown-based pin connector ideal for mobile screens and quick connections.
   - **Pre-loaded Educational Presets**: Load 1-Bit Half Adder, Basic AND, Basic OR, and NOT Inverter demos with a single click.

2. **ENTC Engineering Challenges (5 Playable Missions)**
   - **Challenge 1: Dual-Factor Authorization (AND)** — Output 1 only when both security switches are active.
   - **Challenge 2: Hazard Emergency Siren (OR)** — Alarm triggers when either sensor trips.
   - **Challenge 3: Inverter Glitch Repair (NOT)** — Diagnose and replace a malfunctioning AND gate with a NOT inverter.
   - **Challenge 4: Staircase Lighting Switch (XOR)** — Two-way switch logic where changing either switch toggles the light.
   - **Challenge 5: Fail-Safe Motor Interlock** — Multi-gate circuit where Motor Run = Start AND (NOT Emergency Stop).
   - **Automated Test Suite**: "Check Answer" runs the circuit through every test case in the expected truth table, reporting Pass/Fail per row.
   - **Confetti & One-Time XP**: Awards XP once per challenge in `localStorage` to prevent duplicate farming.

3. **Circuit-Aware Learning Assistant**
   - **Deterministic Circuit Engine**: 100% deterministic, rule-based expert engine running client-side.
   - **Contextual Inspection**: Scans the active circuit for empty workbenches, floating/disconnected pins, missing output probes, or truth table mismatches.
   - **Progressive Pedagogical Hints**: Explains *why* an output is 0 or 1 based on Boolean algebra without immediately giving away the solution.
   - **Quick Questions**: Clickable prompts like *"Why is my output 0?"*, *"Why is my output 1?"*, *"Give me a hint"*, and *"What are Universal Gates?"*.

4. **Progress & Milestone Badges**
   - Ranks from *Silicon Novice* to *Chakravyuh Master*.
   - Unlockable achievement badges: *First Spark*, *Silicon Initiate*, *Truth Seeker*, and *Chakravyuh Conqueror*.
   - Persisted across reloads in browser `localStorage`.
   - Safe **Reset Progress** control with a confirmation modal.

5. **ENTC Digital Logic Cheat Sheet**
   - IEEE/ANSI logic gate symbols, Boolean expressions ($Y = A \cdot B$, $Y = A + B$, $Y = \overline{A}$), standard TTL 74xx IC numbers, and De Morgan's theorem reference.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS (Dark Navy `#060913`, Cyan `#00f5d4`, Violet `#8b5cf6`, Emerald `#10b981`)
- **Icons**: Lucide React
- **Celebrations**: Canvas-Confetti
- **Storage**: Browser `localStorage` (no database or backend required)

---

## 📁 Project Architecture & Key Files

```
c:\Users\Dell\OneDrive\Documents\Chakravyuh\
├── src\
│   ├── constants\
│   │   └── gates.js              # Gate definitions, pin counts, formulas, IC numbers & challenge data
│   ├── engine\
│   │   ├── circuitEngine.js      # Topological evaluation, wire signal propagation & truth table generator
│   │   ├── assistantEngine.js    # Rule-based circuit inspector & contextual tutoring logic
│   │   └── storage.js            # LocalStorage wrapper, XP rewards & badge calculations
│   ├── components\
│   │   ├── Header.jsx            # Top navigation bar, XP counter & mobile drawer
│   │   ├── HomeDashboard.jsx     # Landing dashboard with stats & live mini logic gate teaser
│   │   ├── VirtualLab\
│   │   │   ├── VirtualLab.jsx        # Main lab view combining canvas, matrix, truth table & guide
│   │   │   ├── CircuitCanvas.jsx     # Visual SVG schematic workspace with draggable nodes & wires
│   │   │   ├── GateSymbol.jsx        # ANSI/IEEE standard logic gate SVG symbols
│   │   │   ├── GatePalette.jsx       # Component toolbar (+Input, +LED, +Gates, Presets)
│   │   │   ├── StepWiringMatrix.jsx  # Step-by-step pin connector table
│   │   │   ├── LiveTruthTable.jsx    # Dynamic truth table with active row highlighting
│   │   │   └── LabInstructions.jsx   # Quick start collapsible guide
│   │   ├── Challenges\
│   │   │   └── ChallengesView.jsx    # Guided missions with live truth table test harness & confetti
│   │   ├── Assistant\
│   │   │   └── AssistantDrawer.jsx   # Learning assistant drawer with live inspection & suggested questions
│   │   ├── Progress\
│   │   │   └── ProgressView.jsx      # Student XP, level rank, badge matrix & reset control
│   │   └── GateGuide\
│   │       └── GateGuideModal.jsx    # Logic gate cheat sheet & IC reference
│   ├── App.jsx                   # Main root application component
│   ├── main.jsx                  # React DOM entrypoint
│   └── index.css                 # Tailwind directives, animations & circuit grid styling
├── index.html                    # HTML entry with Google Fonts (Plus Jakarta Sans & JetBrains Mono)
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind theme extension (navy, electric accents, glow shadows)
└── package.json                  # Dependencies and scripts
```

---

## 🚀 How to Run the App

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit the local address displayed in your terminal (typically `http://localhost:5174` or `http://localhost:5173`).

*(To test the production build, run `npm run build` followed by `npm run preview`.)*

---

## 🎯 Quick Demo Walkthrough

1. **Explore Dashboard**: View student statistics, then try clicking the interactive logic switch teaser in the hero section to see instant Boolean evaluation ($1 \cdot 0 = 0$).
2. **Open Virtual Lab**: Click **"Launch Virtual Logic Lab"**.
   - Notice the pre-loaded 7408 AND gate circuit.
   - Click **"Input A"** or **"Input B"** to flip the switches between `LOW (0)` and `HIGH (1)`.
   - Observe the wires glow electric cyan when carrying `1`, and see the Output LED probe immediately light up `1 (HIGH)` when both inputs are `1`.
   - Scroll down to the **Live Truth Table**: notice the active input row dynamically highlights with a glowing border.
   - Click **"Add Component"** to add an OR or NOT gate, wire it up using either drag-and-drop or the **Step Wire Matrix**.
3. **Consult the Assistant**:
   - Click **"Assistant"** (top right or in the toolbar).
   - See the real-time circuit diagnostic.
   - Click **"Why is my output 0?"** or type a question to get an explanation based on your circuit's current state.
4. **Tackle Challenges**:
   - Click **"Challenges"** in the navigation.
   - Select **Task #1 (Dual-Factor Authorization)**: wire Input A and B into the AND gate, connect the output to the LED, and click **"Check Answer"**.
   - Watch all test cases turn green, celebrate with confetti, and see **+100 XP** awarded!
   - Select **Task #3 (Inverter Glitch Repair)**: delete the broken AND gate, add a NOT gate, connect it, and verify the inversion.
5. **Review Progress**:
   - Navigate to **"Progress & Badges"**.
   - View your level rank (e.g., *Gate Specialist*), earned XP, and newly unlocked badges (*First Spark*, *Silicon Initiate*).
   - Refresh the page: observe that all XP and completed challenges remain intact via `localStorage`.
