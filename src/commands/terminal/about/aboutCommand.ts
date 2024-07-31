import { CommandType } from "../../core/command";
import { defineAsyncComponent, markRaw } from "vue";
import ComponentOutputType = GrayTerminal.ComponentOutputType;

/**
 * 查看网站本身信息命令
 * @author pengjunlee
 */
const infoCommand: CommandType = {
  func: "info",
  name: "查看本站信息",
  alias: ["author", "about"],
  options: [],
  action(options, terminal): void {
    const output: ComponentOutputType = {
      type: "component",
      component: markRaw(defineAsyncComponent(() => import("./AboutBox.vue"))),
    };
    terminal.writeResult(output);
  },
};

export default infoCommand;
