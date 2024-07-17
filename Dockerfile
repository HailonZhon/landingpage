# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 创建 landingpage 目录
RUN mkdir -p /app/landingpage

# 复制 package.json 和 package-lock.json 文件到 landingpage 目录
COPY package*.json /app/landingpage/

# 设置工作目录为 landingpage
WORKDIR /app/landingpage

# 安装依赖
RUN npm install --verbose

# 复制应用程序的其他代码到 landingpage 目录
COPY . /app/landingpage

# 构建应用程序
RUN npm run build --verbose

# 暴露应用程序运行的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]
