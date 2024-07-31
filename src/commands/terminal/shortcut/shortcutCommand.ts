import { CommandType } from "../../core/command";
import { defineAsyncComponent, markRaw } from "vue";
import ComponentOutputType = GrayTerminal.ComponentOutputType;

/**
 * 快捷键命令
 * @author pengjunlee
 */
const shortcutCommand: CommandType = {
  func: "shortcut",
  name: "快捷键",
  desc: "查看快捷键",
  alias: [],
  params: [],
  options: [],
  collapsible: true,
  action(options, terminal): void {
    const output: ComponentOutputType = {
      type: "component",
      component: markRaw(
        defineAsyncComponent(() => import("./ShortcutBox.vue"))
      ),
    };
    terminal.writeResult(output);
  },
};

export default shortcutCommand;
