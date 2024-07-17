# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 清理 npm 缓存
RUN npm cache clean --force

# 设置 npm 使用腾讯的 npm 镜像
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/

# 安装依赖
RUN npm install --verbose

# 复制应用程序的其他代码
COPY . .

# 构建应用程序
RUN npm run build

# 暴露应用程序运行的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]

