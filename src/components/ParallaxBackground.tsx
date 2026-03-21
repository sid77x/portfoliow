import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function ParallaxBackground() {
  const boundsRef = useRef<HTMLDivElement>(null);
  const [showDragHint, setShowDragHint] = useState(true);
  const { scrollY, scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [100, -500]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const y6 = useTransform(scrollYProgress, [0, 1], [50, -350]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.85]);
  const sqlSlideIn = useTransform(scrollYProgress, [0, 1], [-120, -28]);
  const hashRotate = useTransform(scrollYProgress, [0, 1], [-12, 16]);

  const dismissHint = () => setShowDragHint(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 8) {
      setShowDragHint(false);
    }
  });

  const draggableProps = {
    drag: true as const,
    dragMomentum: true,
    dragElastic: 0.08,
    dragConstraints: boundsRef,
    dragTransition: {
      power: 0.3,
      timeConstant: 260,
      bounceStiffness: 240,
      bounceDamping: 22,
    },
    whileDrag: {
      scale: 1.03,
      zIndex: 60,
    },
    onDragStart: dismissHint,
  };

  const idleCodeTone = "text-zinc-500/75 dark:text-zinc-500/70";
  const codeClass =
    `text-[11px] md:text-[12px] leading-[1.75] font-mono whitespace-pre select-none transition-all duration-300 ${idleCodeTone}`;

  const tokenKeyword = `${idleCodeTone} group-hover:text-cyan-400`;
  const tokenType = `${idleCodeTone} group-hover:text-violet-400`;
  const tokenFn = `${idleCodeTone} group-hover:text-amber-300`;
  const tokenString = `${idleCodeTone} group-hover:text-emerald-300`;
  const tokenNumber = `${idleCodeTone} group-hover:text-rose-300`;
  const tokenOp = `${idleCodeTone} group-hover:text-slate-200`;
  const tokenComment = `${idleCodeTone} group-hover:text-fuchsia-300`;

  return (
    <div ref={boundsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-20">
      {/* Giant code block — top right */}
      <motion.div
        {...draggableProps}
        className="absolute -right-10 top-[5%] w-[420px] group pointer-events-auto"
        style={{ translateY: y1, rotate: rotate1 }}
      >
        <pre className={`${codeClass} group-hover:text-zinc-200 group-hover:[text-shadow:0_0_18px_rgba(56,189,248,0.35)]`}>
          <span className={tokenKeyword}>const</span> model <span className={tokenOp}>=</span> tf.<span className={tokenFn}>sequential</span>();{"\n"}
          model.<span className={tokenFn}>add</span>(tf.layers.<span className={tokenFn}>dense</span>({"\n"}
          {"  "}units<span className={tokenOp}>:</span> <span className={tokenNumber}>128</span>,{"\n"}
          {"  "}activation<span className={tokenOp}>:</span> <span className={tokenString}>'relu'</span>{"\n"}
          {"}));"}{"\n"}
          model.<span className={tokenFn}>compile</span>({"\n"}
          {"  "}optimizer<span className={tokenOp}>:</span> <span className={tokenString}>'adam'</span>,{"\n"}
          {"  "}loss<span className={tokenOp}>:</span> <span className={tokenString}>'categoricalCrossentropy'</span>{"\n"}
          {"});"}
        </pre>
      </motion.div>

      {/* Big code block — left side */}
      <motion.div
        {...draggableProps}
        className="absolute -left-6 top-[30%] w-[380px] group pointer-events-auto"
        style={{ translateY: y2 }}
      >
        <pre className={`${codeClass} group-hover:text-zinc-200 group-hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]`}>
          <span className={tokenKeyword}>def</span> <span className={tokenFn}>predict</span>(image)<span className={tokenOp}>:</span>{"\n"}
          {"  "}tensor <span className={tokenOp}>=</span> <span className={tokenFn}>preprocess</span>(image){"\n"}
          {"  "}output <span className={tokenOp}>=</span> model(tensor){"\n"}
          {"  "}label <span className={tokenOp}>=</span> <span className={tokenFn}>decode</span>(output){"\n"}
          {"  "}<span className={tokenKeyword}>return</span> {"{"}{"\n"}
          {"    "}<span className={tokenString}>"class"</span><span className={tokenOp}>:</span> label,{"\n"}
          {"    "}<span className={tokenString}>"confidence"</span><span className={tokenOp}>:</span> <span className={tokenNumber}>0.97</span>{"\n"}
          {"  "}{"}"}
        </pre>
      </motion.div>

      {/* CI/CD pipeline — right */}
      <motion.div
        {...draggableProps}
        className="absolute right-[2%] top-[50%] w-[350px] group pointer-events-auto"
        style={{ translateY: y3, rotate: rotate2 }}
      >
        <pre className={`${codeClass} group-hover:text-zinc-200 group-hover:[text-shadow:0_0_18px_rgba(16,185,129,0.35)]`}>
          <span className={tokenType}>pipeline</span><span className={tokenOp}>:</span>{"\n"}
          {"  "}<span className={tokenType}>build</span><span className={tokenOp}>:</span>{"\n"}
          {"    "}image<span className={tokenOp}>:</span> <span className={tokenString}>node:18</span>{"\n"}
          {"    "}<span className={tokenType}>commands</span><span className={tokenOp}>:</span>{"\n"}
          {"      "}- npm install{"\n"}
          {"      "}- npm run build{"\n"}
          {"  "}<span className={tokenType}>deploy</span><span className={tokenOp}>:</span>{"\n"}
          {"    "}image<span className={tokenOp}>:</span> <span className={tokenString}>docker</span>{"\n"}
          {"    "}<span className={tokenType}>commands</span><span className={tokenOp}>:</span>{"\n"}
          {"      "}- docker build -t app .{"\n"}
          {"      "}- kubectl apply -f k8s/
        </pre>
      </motion.div>

      {/* SQL query — left */}
      <motion.div
        {...draggableProps}
        className="absolute left-0 top-[65%] w-[400px] group pointer-events-auto"
        style={{ translateY: y4, translateX: sqlSlideIn }}
      >
        <pre className={`${codeClass} group-hover:text-zinc-200 group-hover:[text-shadow:0_0_18px_rgba(244,114,182,0.35)]`}>
          <span className={tokenKeyword}>SELECT</span>{"\n"}
          {"  "}crop_type,{"\n"}
          {"  "}<span className={tokenFn}>AVG</span>(confidence) <span className={tokenKeyword}>AS</span> avg_conf,{"\n"}
          {"  "}<span className={tokenFn}>COUNT</span>(*) <span className={tokenKeyword}>AS</span> detections{"\n"}
          <span className={tokenKeyword}>FROM</span> predictions{"\n"}
          <span className={tokenKeyword}>WHERE</span> status <span className={tokenOp}>=</span> <span className={tokenString}>'blight'</span>{"\n"}
          <span className={tokenKeyword}>GROUP BY</span> crop_type{"\n"}
          <span className={tokenKeyword}>ORDER BY</span> avg_conf DESC;
        </pre>
      </motion.div>

      {/* PyTorch — right */}
      <motion.div
        {...draggableProps}
        className="absolute right-[5%] top-[80%] w-[340px] group pointer-events-auto"
        style={{ translateY: y5 }}
      >
        <pre className={`${codeClass} group-hover:text-zinc-200 group-hover:[text-shadow:0_0_18px_rgba(251,191,36,0.35)]`}>
          <span className={tokenKeyword}>import</span> torch{"\n"}
          <span className={tokenKeyword}>import</span> torch.nn <span className={tokenKeyword}>as</span> nn{"\n\n"}
          <span className={tokenKeyword}>class</span> <span className={tokenType}>BlightNet</span>(nn.Module)<span className={tokenOp}>:</span>{"\n"}
          {"  "}<span className={tokenKeyword}>def</span> <span className={tokenFn}>__init__</span>(self)<span className={tokenOp}>:</span>{"\n"}
          {"    "}<span className={tokenFn}>super</span>().<span className={tokenFn}>__init__</span>(){"\n"}
          {"    "}self.conv1 <span className={tokenOp}>=</span> nn.<span className={tokenFn}>Conv2d</span>({"\n"}
          {"      "}<span className={tokenNumber}>3</span>, <span className={tokenNumber}>64</span>, kernel_size<span className={tokenOp}>=</span><span className={tokenNumber}>3</span>{"\n"}
          {"    "})
        </pre>
      </motion.div>

      {/* Docker deploy — left lower */}
      <motion.div
        {...draggableProps}
        className="absolute -left-2 top-[110%] w-[370px] group pointer-events-auto"
        style={{ translateY: y6 }}
      >
        <pre className={`${codeClass} group-hover:text-zinc-200 group-hover:[text-shadow:0_0_18px_rgba(45,212,191,0.35)]`}>
          <span className={tokenKeyword}>async</span> <span className={tokenKeyword}>function</span> <span className={tokenFn}>deployAgent</span>({"\n"}
          {"  "}config<span className={tokenOp}>:</span> <span className={tokenType}>AgentConfig</span>{"\n"}
          ) {"{"}{"\n"}
          {"  "}<span className={tokenKeyword}>const</span> container <span className={tokenOp}>=</span> <span className={tokenKeyword}>await</span>{"\n"}
          {"    "}docker.<span className={tokenFn}>create</span>({"{"}{"\n"}
          {"      "}image<span className={tokenOp}>:</span> config.image,{"\n"}
          {"      "}env<span className={tokenOp}>:</span> config.env,{"\n"}
          {"      "}ports<span className={tokenOp}>:</span> [<span className={tokenString}>'8080:80'</span>]{"\n"}
          {"    "}{"}"});{"\n"}
          {"  "}<span className={tokenKeyword}>return</span> container.<span className={tokenFn}>start</span>();{"\n"}
          {"}"}
        </pre>
      </motion.div>

      {/* HUGE curly brace — left */}
      <motion.div
        {...draggableProps}
        className="absolute left-[6%] top-[10%] group pointer-events-auto"
        style={{ translateY: y2, scale: scale1 }}
      >
        <span className="text-zinc-400/35 dark:text-zinc-500/35 text-[280px] font-mono leading-none select-none block transition-all duration-300 group-hover:text-cyan-400/80 group-hover:[text-shadow:0_0_26px_rgba(56,189,248,0.8)]">
          {"{"}
        </span>
      </motion.div>

      {/* HUGE closing brace — right */}
      <motion.div
        {...draggableProps}
        className="absolute right-[4%] top-[55%] group pointer-events-auto"
        style={{ translateY: y1, scale: scale1 }}
      >
        <span className="text-zinc-400/35 dark:text-zinc-500/35 text-[280px] font-mono leading-none select-none block transition-all duration-300 group-hover:text-violet-400/80 group-hover:[text-shadow:0_0_26px_rgba(167,139,250,0.8)]">
          {"}"}
        </span>
      </motion.div>

      {/* Giant angle brackets */}
      <motion.div
        {...draggableProps}
        className="absolute right-[15%] top-[2%] group pointer-events-auto"
        style={{ translateY: y3 }}
        onHoverStart={dismissHint}
      >
        <span className="inline-block px-3 text-zinc-400/35 dark:text-zinc-500/35 text-[200px] font-mono leading-none select-none [font-variant-ligatures:none] transition-all duration-300 group-hover:[text-shadow:0_0_36px_rgba(56,189,248,0.95)]">
          <span className="group-hover:text-sky-400/90">{"<"}</span>
          <span className="group-hover:text-sky-400/90">{"/"}</span>
          <span className="group-hover:text-sky-400/90">{">"}</span>
        </span>
      </motion.div>

      {showDragHint && (
        <motion.div
          className="absolute right-[28%] top-[31%] z-[70] pointer-events-none"
          style={{ translateY: y3 }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 rounded-sm border border-zinc-500/35 bg-black/35 px-3 py-1.5 text-xs md:text-sm font-body text-zinc-400/95 dark:text-zinc-400/90 tracking-wide [text-shadow:0_1px_0_rgba(0,0,0,0.35)] backdrop-blur-[1px]">
            <span className="text-lg leading-none">↗</span>
            <span>Try dragging this</span>
          </div>
        </motion.div>
      )}

      {/* Large semicolons cascade */}
      <motion.div
        {...draggableProps}
        className="absolute left-[12%] top-[75%] group pointer-events-auto"
        style={{ translateY: y4 }}
      >
        <div className="text-zinc-400/35 dark:text-zinc-500/35 text-[100px] font-mono leading-[0.8] select-none space-y-0 transition-all duration-300 group-hover:text-emerald-300/85 group-hover:[text-shadow:0_0_20px_rgba(52,211,153,0.75)]">
          <div>;</div>
          <div className="ml-8">;</div>
          <div className="ml-16">;</div>
        </div>
      </motion.div>

      {/* Binary rain column — far right */}
      <motion.div
        {...draggableProps}
        className="absolute right-[1%] top-[15%] group pointer-events-auto"
        style={{ translateY: y2 }}
      >
        <pre className="text-zinc-400/35 dark:text-zinc-500/35 text-[10px] leading-[2] font-mono select-none transition-all duration-300 group-hover:text-lime-300/85 group-hover:[text-shadow:0_0_18px_rgba(163,230,53,0.75)]">
{`0
1
1
0
1
0
0
1
1
0
1
0
0
1
0
1
1
0`}
        </pre>
      </motion.div>

      {/* Hash/comment symbols — scattered */}
      <motion.div
        {...draggableProps}
        className="absolute left-[20%] top-[45%] group pointer-events-auto"
        style={{ translateY: y5, rotate: hashRotate }}
      >
        <span className={`text-zinc-400/35 dark:text-zinc-500/35 text-[120px] font-mono leading-none select-none transition-all duration-300 ${tokenComment} group-hover:[text-shadow:0_0_22px_rgba(232,121,249,0.9)]`}>#</span>
      </motion.div>

      <motion.div
        {...draggableProps}
        className="absolute right-[25%] top-[90%] group pointer-events-auto"
        style={{ translateY: y3 }}
      >
        <span
          className={`inline-block px-3 text-zinc-400/40 dark:text-zinc-500/40 text-[90px] font-mono leading-none select-none transition-all duration-300 ${tokenComment} group-hover:text-fuchsia-300 group-hover:scale-105 group-hover:[text-shadow:0_0_26px_rgba(232,121,249,0.92)]`}
        >
          //
        </span>
      </motion.div>

      {/* Neural network graph */}
      <motion.div
        {...draggableProps}
        className="absolute left-[6%] top-[52%] w-[240px] group pointer-events-auto"
        style={{ translateY: y3 }}
      >
        <svg
          viewBox="0 0 260 180"
          className="w-full h-auto text-zinc-400/28 dark:text-zinc-500/30 transition-all duration-300 group-hover:text-sky-300/90 group-hover:[filter:drop-shadow(0_0_10px_rgba(56,189,248,0.55))_drop-shadow(0_0_24px_rgba(56,189,248,0.45))]"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="currentColor" strokeWidth="1.2" opacity="0.9">
            <line x1="36" y1="35" x2="128" y2="25" />
            <line x1="36" y1="35" x2="128" y2="90" />
            <line x1="36" y1="35" x2="128" y2="155" />
            <line x1="36" y1="90" x2="128" y2="25" />
            <line x1="36" y1="90" x2="128" y2="90" />
            <line x1="36" y1="90" x2="128" y2="155" />
            <line x1="36" y1="145" x2="128" y2="25" />
            <line x1="36" y1="145" x2="128" y2="90" />
            <line x1="36" y1="145" x2="128" y2="155" />

            <line x1="128" y1="25" x2="220" y2="55" />
            <line x1="128" y1="25" x2="220" y2="125" />
            <line x1="128" y1="90" x2="220" y2="55" />
            <line x1="128" y1="90" x2="220" y2="125" />
            <line x1="128" y1="155" x2="220" y2="55" />
            <line x1="128" y1="155" x2="220" y2="125" />
          </g>

          <g fill="currentColor">
            <circle cx="36" cy="35" r="5" />
            <circle cx="36" cy="90" r="5" />
            <circle cx="36" cy="145" r="5" />

            <circle cx="128" cy="25" r="5" />
            <circle cx="128" cy="90" r="5" />
            <circle cx="128" cy="155" r="5" />

            <circle cx="220" cy="55" r="5" />
            <circle cx="220" cy="125" r="5" />
          </g>
        </svg>
      </motion.div>

    </div>
  );
}
