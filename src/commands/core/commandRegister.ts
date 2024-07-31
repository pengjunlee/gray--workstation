import { CommandType } from "./command";
import searchCommands from "../search/searchCommands";
import gotoCommand from "../system/gotoCommand";
import dateCommand from "../system/dateCommand";
import clearCommand from "../terminal/clearCommand";
import historyCommand from "../terminal/historyCommand";
import userCommands from "../user/userCommands";
import demoCommand from "../demo/demoCommand";
import timingCommand from "../system/timing/timingCommand";
import backgroundCommand from "../terminal/config/backgroundCommand";
import resetCommand from "../terminal/config/resetCommand";
import fanyiCommand from "../tool/fanyi/fanyiCommand";
import helpCommand from "../terminal/help/helpCommand";
import aboutCommand from "../terminal/about/aboutCommand";
import pingCommand from "../system/pingCommand";
import hintCommand from "../terminal/config/hintCommand";
import todoCommand from "../tool/todo/todoCommand";
import formatterCommand from "../tool/json/formatterCommand";
import musicCommand from "../relax/music/musicCommand";
import moyuCommand from "../relax/moyu/moyuCommand";
import shortcutCommand from "../terminal/shortcut/shortcutCommand";
import ikunCommand from "../relax/ikun/ikunCommand";
import welcomeCommand from "../terminal/config/welcomeCommand";
import hotCommand from "../bak/hot/hotCommand";
import ikuntestCommand from "../relax/ikuntest/ikuntestCommand";

/**
 * 命令列表（数组元素顺序会影响 help 命令的展示顺序）
 */
const commandList: CommandType[] = [
  shortcutCommand,
  gotoCommand,
  ...searchCommands,
  ...userCommands,
  demoCommand,
  hotCommand,
  formatterCommand,
  todoCommand,
  timingCommand,
  dateCommand,
  clearCommand,
  historyCommand,
  fanyiCommand,
  helpCommand,
  aboutCommand,
  pingCommand,
  musicCommand,
  moyuCommand,
  ikunCommand,
  ikuntestCommand,
  welcomeCommand,
  backgroundCommand,
  resetCommand,
  hintCommand,
];

/**
 * 命令字典
 */
const commandMap: Record<string, CommandType> = {};

commandList.forEach((command) => {
  commandMap[command.func] = command;
  command.alias?.forEach((name) => {
    commandMap[name] = command;
  });
});

export { commandList, commandMap };
