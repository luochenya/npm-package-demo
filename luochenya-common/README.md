# 公共组件与方法库

一个高效的公共组件封装与工具方法库，适用于 Vue 3 项目开发，支持按需引入。

---

## 安装

```bash
npm install your-package-name
```

或者使用 yarn：

```bash
yarn add your-package-name
```

---

## 使用方法

### 全局引入

如果需要注册所有组件和工具方法：

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import YourPackageName from 'your-package-name';

const app = createApp(App);
app.use(YourPackageName);
app.mount('#app');
```

### **按需引入**

#### 按需引入组件

如果只需要某些组件，可以按如下方式引入：

```javascript
import { YourComponent, AnotherComponent } from 'your-package-name';

export default {
  components: {
    YourComponent,
    AnotherComponent,
  },
};
```

组件可通过 `props` 接收参数，示例：

```vue
<template>
  <YourComponent :title="'示例标题'" />
</template>
```

#### 按需引入工具方法

如果只需要某些工具方法，可以直接引入使用：

```javascript
import { formatDate, deepClone } from 'your-package-name';

const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
console.log('Formatted Date:', formattedDate);

const originalObject = { name: 'example' };
const clonedObject = deepClone(originalObject);
console.log('Cloned Object:', clonedObject);
```

---

## 功能说明

### **公共组件**

以下是支持的公共组件及其功能：

| 组件名              | 描述                                       | 示例用法                                                    |
|---------------------|--------------------------------------------|------------------------------------------------------------|
| `YourComponent`     | 示例组件，支持标题显示功能                 | `<YourComponent :title="'示例标题'" />`                     |
| `AnotherComponent`  | 显示多项内容的列表组件                    | `<AnotherComponent :items="['Item 1', 'Item 2']" />`       |

#### 组件属性说明

**YourComponent**

| 属性名         | 类型     | 默认值        | 描述                   |
|----------------|----------|---------------|------------------------|
| `title`        | `String` | `''`          | 设置组件的标题         |

**AnotherComponent**

| 属性名         | 类型       | 默认值        | 描述                   |
|----------------|------------|---------------|------------------------|
| `items`        | `Array`    | `[]`          | 渲染的列表内容数组     |

---

### **工具方法**

以下是工具方法的功能及用法示例：

| 方法名              | 描述                                | 示例用法                                |
|---------------------|-------------------------------------|-----------------------------------------|
| `formatDate`        | 格式化日期为指定格式               | `formatDate(new Date(), 'YYYY-MM-DD')` |
| `validateEmail`     | 验证邮箱是否符合格式               | `validateEmail('example@test.com')`    |
| `deepClone`         | 深拷贝对象                         | `deepClone({ key: 'value' })`          |
| `getRandomNumber`   | 获取指定范围的随机数               | `getRandomNumber(1, 100)`              |

#### 工具方法参数与返回值

**formatDate**

格式化日期为指定格式。

```javascript
formatDate(date: Date, format: string): string
```

| 参数       | 类型     | 描述                     |
|------------|----------|--------------------------|
| `date`     | `Date`   | 要格式化的日期对象       |
| `format`   | `String` | 日期格式，例如 `YYYY-MM-DD` |

**返回值**: 格式化后的日期字符串。

**deepClone**

深拷贝一个对象或数组，返回新的副本。

```javascript
deepClone<T>(data: T): T
```

| 参数       | 类型       | 描述                     |
|------------|------------|--------------------------|
| `data`     | `Object` 或 `Array` | 要深拷贝的数据 |

**返回值**: 深拷贝后的数据副本。

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

