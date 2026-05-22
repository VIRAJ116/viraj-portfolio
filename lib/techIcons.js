import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSequelize,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiGraphql,
  SiGit,
  SiGithub,
  SiD3,
  SiJsonwebtokens,
  SiRazorpay,
} from "react-icons/si";
import {
  TbBrandReact,
  TbApi,
  TbDeviceMobile,
  TbActivity,
  TbDatabase,
  TbBolt,
} from "react-icons/tb";
import { FaAws } from "react-icons/fa";

// Brand-color + icon map. Keys are normalized: lowercase, alphanumeric only.
const TECH = {
  react: { Icon: SiReact, color: "#61DAFB" },
  reactjs: { Icon: SiReact, color: "#61DAFB" },
  react19: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#FFFFFF" },
  next: { Icon: SiNextdotjs, color: "#FFFFFF" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  tailwindcss: { Icon: SiTailwindcss, color: "#38BDF8" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8" },
  scss: { Icon: SiSass, color: "#CC6699" },
  sass: { Icon: SiSass, color: "#CC6699" },
  scsscss3: { Icon: SiSass, color: "#CC6699" },

  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  expressjs: { Icon: SiExpress, color: "#E6E6EC" },
  express: { Icon: SiExpress, color: "#E6E6EC" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  postgres: { Icon: SiPostgresql, color: "#4169E1" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  drizzle: { Icon: TbDatabase, color: "#C5F74F" },
  drizzleorm: { Icon: TbDatabase, color: "#C5F74F" },
  sequelize: { Icon: SiSequelize, color: "#52B0E7" },
  sequelizeorm: { Icon: SiSequelize, color: "#52B0E7" },

  redux: { Icon: SiRedux, color: "#764ABC" },
  reduxtoolkit: { Icon: SiRedux, color: "#764ABC" },
  reactquery: { Icon: SiReactquery, color: "#FF4154" },
  zustand: { Icon: TbBrandReact, color: "#FFB85C" },
  axios: { Icon: SiAxios, color: "#9A6BFF" },
  rest: { Icon: TbApi, color: "#B6A3FF" },
  restapis: { Icon: TbApi, color: "#B6A3FF" },
  graphql: { Icon: SiGraphql, color: "#E535AB" },

  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#E6E6EC" },
  d3: { Icon: SiD3, color: "#F9A03C" },
  d3js: { Icon: SiD3, color: "#F9A03C" },
  jwt: { Icon: SiJsonwebtokens, color: "#FB015B" },
  jwtauthrbac: { Icon: SiJsonwebtokens, color: "#FB015B" },
  razorpay: { Icon: SiRazorpay, color: "#3395FF" },
  agile: { Icon: TbActivity, color: "#22D3EE" },
  agilescrum: { Icon: TbActivity, color: "#22D3EE" },
  responsiveui: { Icon: TbDeviceMobile, color: "#A78BFA" },

  sse: { Icon: TbBolt, color: "#FFB85C" },
  serversentevents: { Icon: TbBolt, color: "#FFB85C" },

  aws: { Icon: FaAws, color: "#FF9900" },
  amazonwebservices: { Icon: FaAws, color: "#FF9900" },
  awsec2: { Icon: FaAws, color: "#FF9900" },
  ec2: { Icon: FaAws, color: "#FF9900" },
};

const FALLBACK = { Icon: TbActivity, color: "#8a8b98" };

function normalize(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export function getTech(name) {
  const k = normalize(name);
  if (TECH[k]) return TECH[k];
  // Strip trailing version digits (e.g. "react19" -> "react") as a fallback
  const stripped = k.replace(/\d+$/, "");
  if (stripped !== k && TECH[stripped]) return TECH[stripped];
  return FALLBACK;
}
