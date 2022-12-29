# Make a big deal

> 我们来搞个大事情吧！

仓库主要使用 Monorepo 管理模块，暂定目前分为：

1. i18n - 用于放置 i18n 配置，ui 中禁止在页面中直接输入中文
2. ui - 前端代码
3. utils - 各种工具函数和 types 放置的位置
4. server - 服务端代码

## 开始

需要本地安装 pnpm 包管理器

```shell
npm install -g pnpm
```

因为项目使用 pnpm + lerna + turborepo 实现，所以安装依赖、清除依赖等方式都需要按照规则进行

- install

  ```shell
  pnpm install
  ```

- clean

  ```shell
  pnpm lerna clean
  ```

- add

  ```shell
  pnpm --filter=<workspace_package_name> add <package> 
  ```

- run

  ```shell
  pnpm --filter=<workspace_package_name> run <script>
  ```

- test
  
  ```shell
  pnpm turbo test
  ```

- turbo

  ```shell
  pnpm turbo <scrpt>
  ```
  
- turbo remote cache

  详细请自行了解 [Turbo remote cache](https://turbo.build/repo/docs/core-concepts/remote-caching)

  ```shell
  turbo run <script> --team="team_awesome" --token="turbotoken" --api="https://your-caching.server.dev"
  ```

具体其他命令请查看相关文档

- [pnpm](https://pnpm.io)
- [turborepo](https://turbo.build/repo)
- [lerna](https://lerna.js.org)
