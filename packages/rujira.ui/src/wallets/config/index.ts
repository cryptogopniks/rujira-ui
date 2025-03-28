import * as gaia from "./gaia";
import * as kujira from "./kujira";
import * as thor from "./thor";

export const main = [gaia.main, kujira.main, thor.main];
export const stage = [gaia.stage, kujira.stage, thor.stage];
export const mock = [gaia.mock, kujira.mock, thor.mock];
export const dev = [gaia.dev, kujira.dev, thor.dev];
