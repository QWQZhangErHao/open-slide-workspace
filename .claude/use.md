下次直接用终端进入项目目录启动 Claude Code
  即可：

  cd C:\Users\ZhangErHao\Desktop\project\my-ppt
  claude

  Skills 已经同步在 .claude/skills/ 下，Claude
  Code 启动时自动加载，不需要再跑 npm run
  sync:skills。

  常用启动方式：

  场景: 启动 Claude Code
  命令: claude
  ────────────────────────────────────────
  场景: 边说边预览
  命令: 先 npm run dev（开终端），再开一个新终端

    claude
  ────────────────────────────────────────
  场景: 构建上线
  命令: npm run build

  ▎ 提示：dev server
  ▎ 关闭后下次需要手动重启。如果有僵尸端口，npx
  ▎ kill-port 5173 快速清理。