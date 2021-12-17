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
export const DEV_CHANNEL_ALLOWED_LIST: string[] = process.env
  .DEV_CHANNEL_ALLOWED_LIST
  ? process.env.DEV_CHANNEL_ALLOWED_LIST.split(",")
  : [];
export const PROD_CHANNEL_ALLOWED_LIST: string[] = process.env
  .PROD_CHANNEL_ALLOWED_LIST
  ? process.env.PROD_CHANNEL_ALLOWED_LIST.split(",")
  : [];
