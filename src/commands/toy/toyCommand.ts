import { CommandType } from "../core/command";
import { defineAsyncComponent, markRaw } from "vue";
import ComponentOutputType = GrayTerminal.ComponentOutputType;

/**
 * 特效示例命令
 * @author pengjunlee
 */
const toyCommand: CommandType = {
  func: "toy",
  name: "代码样例",
  desc: "一些好玩的代码样例",
  params: [
    {
      key: "index",
      desc: "样例序号",
      required: false,
    },
  ],
  options: [],
  subCommands: {},
  collapsible: true,
  icon: '🧩',
  action(options, terminal) {
    const { _ } = options;
    if (_.length < 1) {
      // 查看列表
      const output: ComponentOutputType = {
        type: "component",
        component: markRaw(defineAsyncComponent(() => import("./ToyShopBox.vue"))),
        props: { toys: toyList },
      };
      terminal.writeResult(output);
      return;
    } else {
      const index: number = parseInt(_[0], 10);
      // 查看列表
      const output: ComponentOutputType = {
        type: "component",
        component: markRaw(defineAsyncComponent(loadComponent(toyList[index - 1].value))),
      };
      terminal.writeResult(output);
      return;
    }
  },
};
const components = import.meta.glob('./shop/*.vue');

function loadComponent(name: string) {
  return components[`./shop/${name}`];
}
const toyList: ToyType[] = [
  {
    name: "文字动画",
    desc: "动态描绘出文字的效果",
    value: "TextAnimation.vue",
  },
  {
    name: "图片立方体",
    desc: "一个旋转的立方体，每个面都是一张图片",
    value: "ImageCube.vue",
  },
  {
    name: "小黄人",
    desc: "一个由纯CSS制作的小黄人",
    value: "Minions.vue",
  },
  {
    name: "发光立方体",
    desc: "一个由纯CSS制作的发光立方体",
    value: "GlowingCube.vue",
  },
  {
    name: "文字立方体",
    desc: "一个由纯CSS制作的文字立方体",
    value: "TextCube.vue",
  },
  {
    name: "幸运酒瓶",
    desc: "一个由纯CSS制作的幸运转盘游戏",
    value: "LuckWheel.vue",
  },
  {
    name: "彩色时钟",
    desc: "一个彩色柱形时钟",
    value: "ColorBarClock.vue",
  },
  {
    name: "文本时钟",
    desc: "一个文本转动时钟",
    value: "TextClock.vue",
  },
  {
    name: "熔岩光线",
    desc: "一个文本转动时钟",
    value: "LavaLight.vue",
  },
  {
    name: "PacMan",
    desc: "一个纯CSS实现的经典PacMan吃米加载动画",
    value: "PacMan.vue",
  },
  {
    name: "旋转文本",
    desc: "一个纯CSS实现的文本旋转动画",
    value: "RotateTextLoading.vue",
  },
  {
    name: "沙漏动画",
    desc: "一个纯CSS实现的沙漏动画",
    value: "SandGlassLoading.vue",
  },
];

export default toyCommand;
