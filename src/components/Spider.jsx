"use client";

import React, { useState } from "react";

const HashIcon = () => (
  <svg
    width="2.2em"
    height="2.2em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3L6 21"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 3L14 21"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 9H20"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 15H18"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SparkleIcon = () => (
  <svg
    height="1.8em"
    style={{
      flex: "none",

      lineHeight: 1,
    }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1.8em"
  >
            <title>Gemini</title>       {" "}
    <defs>
                 {" "}
      <linearGradient
        id="gemini-gradient-fixed"
        x1="0%"
        x2="68.73%"
        y1="100%"
        y2="30.395%"
      >
                        <stop offset="0%" stopColor="#1C7DFF"></stop>           
            <stop offset="52.021%" stopColor="#1C69FF"></stop>               {" "}
        <stop offset="100%" stopColor="#F0DCD6"></stop>           {" "}
      </linearGradient>
             {" "}
    </defs>
           {" "}
    <path
      d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"
      fill="url(#gemini-gradient-fixed)"
      fillRule="nonzero"
    ></path>
       {" "}
  </svg>
);

const ReactIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"
      fill="#68A063"
    />
    <path
      d="M12 22.81c-.27 0-.55-.07-.78-.2l-2.44-1.41c-.37-.21-.19-.28-.07-.32.5-.17.6-.21 1.13-.51.06-.03.13-.02.19.02l1.87 1.11c.07.04.17.04.23 0l7.3-4.21c.07-.04.11-.12.11-.2V8.51c0-.09-.04-.17-.11-.21L12.13 4.09c-.07-.04-.16-.04-.23 0L4.6 8.3c-.07.04-.11.13-.11.21v8.38c0 .08.04.16.11.2l2 1.15c1.08.54 1.75-.1 1.75-.73V9.79c0-.13.1-.23.23-.23h1.01c.12 0 .23.1.23.23v7.72c0 1.34-.73 2.11-2 2.11-.39 0-.69 0-1.54-.42l-1.92-1.1c-.48-.28-.78-.8-.78-1.36V8.36c0-.56.3-1.08.78-1.36l7.44-4.3c.46-.26 1.04-.26 1.5 0l7.44 4.3c.48.28.78.8.78 1.36v8.38c0 .56-.3 1.08-.78 1.36l-7.44 4.3c-.23.13-.51.2-.78.2z"
      fill="#68A063"
    />
  </svg>
);

const MongoDBIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 5.352-3.947 4.292-11.375z"
      fill="#4DB33D"
    />
    <path
      d="M11.5 23.963s.234-2.043.234-2.043l.135-.135s.135 2.178.135 2.178c-.168 0-.336 0-.504 0z"
      fill="#4DB33D"
    />
  </svg>
);

const ExpressIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.978-2.667C.480 14.794.002 13.117.002 11.576zm1.127-.286h9.654c-.06-3.076-2.001-4.738-4.672-4.19-2.458.507-4.784 2.084-4.982 4.19z"
      fill="#68A063"
    />
  </svg>
);

const JavaScriptIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H24V24H0V0Z" fill="#F7DF1E"></path>
    <path
      d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.007.064zm-9.312-.105c.029.12.029.23.029.42-1.156 1.05-2.91 1.08-3.864.41-.372-.27-.564-.705-.564-1.26l1.87-.113c.029.12.029.18.029.27.15.27.45.36.81.36.48 0 .64-.15.64-.27 0-.12-.029-.18-.29-.27l-1.699-.51c-.372-.12-.564-.27-.69-.51-.15-.27-.18-.57-.18-.87 0-.57.18-1.08.54-1.47.45-.48 1.08-.72 1.92-.72.45 0 .87.09 1.26.27.45.21.75.51.93.93l-1.83.12c-.06-.15-.15-.24-.27-.3-.15-.09-.33-.12-.51-.12-.27 0-.42.09-.42.24 0 .15.06.21.27.27l1.65.45c.48.15.75.36.93.66.15.27.18.57.18.9-.029.33-.089.63-.239.93z"
      fill="#323330"
    />
  </svg>
);

const TypeScriptIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" fill="#3178C6" rx="2"/>
    <path
      d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
      fill="#FFF"
    />
  </svg>
);

const NextJSIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#000"/>
    <path
      d="M10.621 12.245L15.247 19.5a11.948 11.948 0 0 0 3.666-3.15L13.583 9.75h-1.962v2.495z"
      fill="#FFF"
    />
    <path
      d="M8.583 9.75v8.25a11.947 11.947 0 0 0 2.038.495V9.75H8.583z"
      fill="#FFF"
    />
    <path
      d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"
      fill="none"
      stroke="#FFF"
      strokeWidth="1.5"
    />
  </svg>
);

const TailwindIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
      fill="#38BDF8"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      fill="#FFF"
    />
  </svg>
);

const RenderIcon = () => (
  <svg
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0L2.5 7v10L12 24l9.5-7V7L12 0z"
      fill="#46E3B7"
    />
    <path
      d="M12 4.5L6.25 8.5v7L12 19.5l5.75-4v-7L12 4.5z"
      fill="#FFF"
    />
    <circle cx="12" cy="12" r="2" fill="#46E3B7"/>
  </svg>
);

const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isHovered = false,
  animationDelay = 0,
}) => (
  <div
    className={`
        backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 border
        ${
          isHighlighted
            ? "dark:bg-gray-700/50 bg-gray-100/80 border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow"
            : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${
                !isHovered && "animate-float"
              }`
        }
        ${
          isHovered
            ? "dark:bg-gray-600/50 bg-gray-200/80 border-blue-400/60 scale-110 dark:shadow-blue-400/30 shadow-blue-400/40 shadow-2xl"
            : "dark:hover:bg-white/10 hover:bg-gray-100/80 dark:hover:border-white/20 hover:border-gray-300/60"
        }
        ${className}
    `}
    style={{
      animationDelay: `${animationDelay}s`,
    }}
  >
    {children}
  </div>
);
const IconGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const outerIcons = [
    {
      id: 1,
      component: <SparkleIcon />,
    },
    {
      id: 2,
      component: <ReactIcon />,
    },
    {
      id: 3,
      component: <NodeIcon />,
    },
    {
      id: 4,
      component: <JavaScriptIcon />,
    },
    {
      id: 5,
      component: <TailwindIcon />,
    },
    {
      id: 6,
      component: <GitHubIcon />,
    },
    {
      id: 7,
      component: <RenderIcon />,
    },
    {
      id: 8,
      component: <MongoDBIcon />,
    },
  ];
  const radius = 160;
  const centralIconRadius = 48;
  const outerIconRadius = 32;
  const svgSize = 400;
  const svgCenter = svgSize / 2;
  return (
    <div className="relative w-[400px] h-[400px] scale-75 md:scale-90 lg:scale-100">
      {}
      <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g>
          {}
          {outerIcons.map((icon, i) => {
            const nextIndex = (i + 1) % outerIcons.length;
            const nextIcon = outerIcons[nextIndex];
            const angle1 =
              (-90 + i * (360 / outerIcons.length)) * (Math.PI / 180);
            const x1 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle1);
            const y1 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle1);
            const angle2 =
              (-90 + nextIndex * (360 / outerIcons.length)) * (Math.PI / 180);
            const x2 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle2);
            const y2 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle2);
            const isLineActive =
              hoveredId === icon.id || hoveredId === nextIcon.id;
            return (
              <line
                key={`web-line-${icon.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isLineActive ? "#3B82F6" : "#6B7280"}
                strokeWidth="1.5"
                className="transition-all duration-300 dark:stroke-gray-600"
                style={{
                  opacity: isLineActive ? 0.8 : 0.25,
                }}
                filter={isLineActive ? "url(#glow)" : "none"}
              />
            );
          })}

          {}
          {outerIcons.map((icon, i) => {
            const angleInDegrees = -90 + i * (360 / outerIcons.length);
            const angleInRadians = angleInDegrees * (Math.PI / 180);
            const startX =
              svgCenter + centralIconRadius * Math.cos(angleInRadians);
            const startY =
              svgCenter + centralIconRadius * Math.sin(angleInRadians);
            const endX =
              svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
            const endY =
              svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
            const isSpokeActive = hoveredId === icon.id;
            return (
              <line
                key={`spoke-line-${icon.id}`}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={isSpokeActive ? "#3B82F6" : "#6B7280"}
                strokeWidth="1.5"
                className="transition-all duration-300 dark:stroke-gray-600"
                style={{
                  opacity: isSpokeActive ? 1 : 0.25,
                }}
                filter={isSpokeActive ? "url(#glow)" : "none"}
              />
            );
          })}
        </g>
      </svg>

      {}
      <div className="absolute top-1/2 left-1/2">
        {}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
          <IconWrapper
            className="w-24 h-24"
            isHighlighted={true}
            animationDelay={0}
          >
            <HashIcon />
          </IconWrapper>
        </div>

        {}
        {outerIcons.map((icon, i) => {
          const angleInDegrees = -90 + i * (360 / outerIcons.length);
          const angleInRadians = angleInDegrees * (Math.PI / 180);
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);
          const iconStyle = {
            transform: `translate(${x}px, ${y}px)`,
          };
          const isHovered = hoveredId === icon.id;
          return (
            <div
              key={icon.id}
              className="absolute z-10"
              style={iconStyle}
              onMouseEnter={() => setHoveredId(icon.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 relative">
                {}
                <div
                  className={`absolute inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <IconWrapper
                  className="w-16 h-16"
                  isHovered={isHovered}
                  animationDelay={i * 0.15}
                >
                  {icon.component}
                </IconWrapper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default function Spider() {
  return (
    <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
      {}
      <style>
        {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.05); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 3s ease-in-out infinite;
                }
            `}
      </style>

      {}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 container mx-auto flex items-center justify-center">
        <IconGrid />
      </div>
    </div>
  );
}
