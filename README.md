# 吹吹—个人主页

这是吹吹个人主页的 Vercel 部署版，使用标准 Next.js 构建。页面、作品素材、字体与交互均保存在项目内，不依赖 Cloudflare 或 OpenAI Sites 运行环境。

## 本地运行

需要 Node.js 22 或更高版本，以及 pnpm 11。

```bash
pnpm install
pnpm dev
```

浏览器访问 `http://localhost:3000`。

## 构建检查

```bash
pnpm build
```

构建成功后即可部署到 Vercel。

## Vercel 部署

1. 将整个项目推送到 GitHub 仓库。
2. 在 Vercel 中选择 `Add New → Project`。
3. 导入 GitHub 仓库。
4. Framework Preset 选择 `Next.js`，Root Directory 保持 `./`。
5. 点击 `Deploy`。

Vercel 会自动识别 `pnpm-lock.yaml`，安装依赖并执行 `pnpm build`。以后推送到 GitHub 的 `main` 分支时，正式网站会自动更新。

## 域名

部署成功后，在 Vercel 项目的 `Settings → Domains` 添加阿里云域名，再按照 Vercel 显示的记录值到阿里云云解析 DNS 中添加 A、CNAME 或 TXT 记录。

## 主要目录

- `app/page.tsx`：页面内容与交互
- `app/globals.css`：网站样式
- `app/layout.tsx`：页面标题、分享信息与图标
- `public/`：图片、字体、音频和作品素材
