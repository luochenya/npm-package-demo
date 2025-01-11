# 公共组件与方法库

一个高效的公共组件封装与工具方法库，适用于 Vue 3 项目开发，支持按需引入。

---

## 安装

```bash
npm install luochenya-common
```

或者使用 yarn：

```bash
yarn add luochenya-common
```

---

## 使用方法

### 全局引入

如果需要注册所有组件和工具方法：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { LuoChenYaButton, LuoChenYaJs } from "luochenya-common";
import "luochenya-common/luochenya-common.css";

const app = createApp(App);
app.component('LuoChenYaButton', LuoChenYaButton);
app.config.globalProperties.LuoChenYaJs = LuoChenYaJs;
app.mount('#app')
```

### **按需引入**

#### 按需引入组件

如果只需要某些组件，可以按如下方式引入：

```javascript
import { LuoChenYaButton, LuoChenYaJs } from "luochenya-common";
import "luochenya-common/luochenya-common.css";

export default {
  components: {
    LuoChenYaButton
  },
};
```

组件可通过 `confirm` 方法触发点击事件，示例：

```vue
<template>
  <LuoChenYaButton @confirm="handleClick">test按钮</LuoChenYaButton>
</template>
```

#### 按需引入工具方法

如果只需要某些工具方法，可以直接引入使用：

```javascript
import { LuoChenYaJs } from "luochenya-common";

const { handleThousands } = LuoChenYaJs;
console.log(handleThousands(1234567890));
```

---

## 功能说明

### **公共组件**

以下是支持的公共组件及其功能：

| 组件名              | 描述                                       | 示例用法                                                    |
|---------------------|--------------------------------------------|------------------------------------------------------------|
| `LuoChenYaButton`     | 示例组件，按钮hover样式                 | `<LuoChenYaButton @confirm="handleClick">test按钮</LuoChenYaButton>`                     |

#### 组件属性说明

**LuoChenYaButton**

| 属性名         | 类型     | 默认值        | 描述                   |
|----------------|----------|---------------|------------------------|
| `confirm`        | `Function` | `fun()`          | 触发点击事件         |

---

### **工具方法**

以下是工具方法的功能及用法示例：

| 方法名              | 描述                                | 示例用法                                |
|---------------------|-------------------------------------|-----------------------------------------|
| `handleThousands`        | 数字转换千位符               | `handleThousands(1234567890)` |

#### 工具方法参数与返回值

**handleThousands**

格式化日期为指定格式。

```javascript
handleThousands(value: String): string
```

| 参数       | 类型     | 描述                     |
|------------|----------|--------------------------|
| `value`     | `String`   | 要格式化的数值       |

**返回值**: 千位符格式化后的字符串。

---

## 常见问题

1. **如何按需引入组件或方法？**

   请确保你安装了支持 Tree-Shaking 的构建工具（如 Vite 或 Webpack）。通过直接从包中引入需要的内容即可实现按需引入，无需加载整个库。

2. **如何自定义组件的样式？**

   可以通过覆盖 CSS 变量或为组件添加额外的 `class` 进行样式调整。

---

## 开发与贡献

欢迎提交 Issue 或 Pull Request，共同完善本项目！

---

## 许可证

本项目基于 [MIT License](LICENSE) 开源。

