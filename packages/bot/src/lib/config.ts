/**
 * Config module
 *
 * This utility is to aggregate multiple data sources like below for configurations.
 * - Definition
 * - Env vars
 */

/**
 * Env vars assigned by Railway platform
 */
export const ENVIRONMENT: string =
  process.env.RAILWAY_ENVIRONMENT || "localhost";
export const DEPLOY_BRANCH: string = process.env.RAILWAY_GIT_BRANCH || "";

/**
 * Env vars manually assigned
 */
export const DEV_CHANNEL_WHITELIST: string[] = process.env.DEV_CHANNEL_WHITELIST
  ? process.env.DEV_CHANNEL_WHITELIST.split(",")
  : [];
export const PROD_CHANNEL_WHITELIST: string[] = process.env
  .PROD_CHANNEL_WHITELIST
  ? process.env.PROD_CHANNEL_WHITELIST.split(",")
  : [];
