import { CommandType } from "../../core/command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = GrayTerminal.ComponentOutputType;

/**
 * 待办事项命令
 * @author pengjunlee
 */
const formatCommand: CommandType = {
  func: "json",
  name: "格式化JSON字符串",
  desc: "格式化JSON字符串",
  params: [],
  options: [],
  subCommands: {},
  collapsible: true,
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./FormatterBox.vue")),
    };
    terminal.writeResult(output);
    return;
  },
};

export default formatCommand;
