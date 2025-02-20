import { clsx, type ClassValue } from "clsx";
import pino from "pino";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const Logger = (level: string, info: any) => pino({
  level: level,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  write:info,
  
  enabled: process.env.NODE_ENV !== "production",
  msgPrefix: "@patgpt",
  name: "contentful client",
  timestamp: true,

});
 