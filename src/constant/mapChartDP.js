import { tableDataICSE, tableDataFSE, tableDataASE } from "./data";
import { transformDataTomap } from "../utils";

let combinedData = tableDataASE.concat(tableDataFSE);
combinedData = combinedData.concat(tableDataICSE);
export const internetUsers = transformDataTomap(combinedData);




