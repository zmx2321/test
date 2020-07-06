# git相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 上传下载代码常用命令
- `git clone url` 复制的地址
- `git pull` 拉取别人的代码
- `git status` 查看仓库状态
- `git add .` 除了gitignore里面的东西，其余添加到缓存区
- `git commit -m 'deploy'` 将被添加到缓存区的东西提交到缓存区  加文字说明
- `git push` 将缓存区的的文件提交到仓库


## 其他常用命令
- `git config --global credential.helper store` git不输入密码
- 卸载重装git credentials manager
    - `git credential-manager uninstall`  卸载
    - `git credential-manager install`  重装