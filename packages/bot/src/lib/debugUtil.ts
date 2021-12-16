/**
 * Debug utility module
 */
import {
  ENVIRONMENT,
  DEPLOY_BRANCH,
  DEV_CHANNEL_WHITELIST,
  PROD_CHANNEL_WHITELIST,
} from "./config";

export const isProd = ENVIRONMENT === "production";

/**
 * returns dev server information on a Railway project
 * @returns {object}
 */
export const getDebugInfo = function () {
  return {
    isProd: isProd,
    branch: DEPLOY_BRANCH,
    env: ENVIRONMENT,
    devChannel: DEV_CHANNEL_WHITELIST,
    prodChannel: PROD_CHANNEL_WHITELIST,
  };
};

/**
 * prepend deployment information to the message
 */
export const printDebugInfo = function (message: string): string {
  if (isProd) {
    return message;
  }
  const info = getDebugInfo();
  let logMsg = "ENV: " + info.env;
  if (info.branch) {
    logMsg += " BRANCH: " + info.branch;
  }
  logMsg = "[" + logMsg + "] ";
  return logMsg + message;
};

/**
 * @param {string} channelId
 * string type for the channelId is a workaround for the numeric rounding error like below.
 *   Number(920277169509367858) -> 920277169509367800
 *   parseInt(920277169509367858, 10) -> 920277169509367800
 * @returns {boolean}
 */
export const isDevChannel = function (channelId: string): boolean {
  return checkChnanelWhitelist(channelId, DEV_CHANNEL_WHITELIST);
};

/**
 * @param {string} channelId
 * string type for the channelId is a workaround for the numeric rounding error like below.
 *   Number(920277169509367858) -> 920277169509367800
 *   parseInt(920277169509367858, 10) -> 920277169509367800
 * @returns {boolean}
 */
export const isProdChannel = function (channelId: string): boolean {
  return checkChnanelWhitelist(channelId, PROD_CHANNEL_WHITELIST);
};

const checkChnanelWhitelist = (id: string, whitelist: string[]): boolean => {
  // The check is deactivated if the white list was unavailable.
  if (!whitelist) {
    console.info(
      "channel check is disabled due to the whitelist was unavailable",
    );
    return true;
  }
  return whitelist.includes(id);
};
