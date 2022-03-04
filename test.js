#!/usr/bin/env node
//告诉文件 用node执行 计算机语言

const commander = require('commander')
const downgit = require('download-git-repo')
const ora = require('ora')
const spinner = ora('下载中')

const chalk = require('chalk')
//获取到的参数
let argv = process.argv

//版本号 -V 查看
commander.version('1.0.0')

//[]形式 这是非必填的参数
// <>形式 是必填的参数
//指令
commander.option('-a [num] <s>', 'this is a test', (num, s) => {
  console.log(s)
  console.log(num)
  console.log('input -a')
})
commander.option('-b <s>', 'this is a test', (s) => {
  console.log(s)
  console.log('input -a')
})

//命令
commander.command('create <projectName>').action((projectName) => {
  //第一个参数 从哪里下载
  // 冒号后是那个仓库
  // /后面跟着作者

  //第二个参数  脚手架 cmd在那个目录 就下载在那个目录
  //clone :true 就是 git clone
  //clone:false 是用http下载 
  spinner.start()
  downgit('github:vuejs/vue', process.cwd(), { clone: false },function(err) {
    spinner.stop()
    if(err) throw err;
    console.log(chalk.green('下载成功'))
  })
})

commander.parse(argv)

//模板是最难得 就是创建文件夹
//模板目录结构设计 有哪些风格规范 (工程设计范式)
//rails-style -按层级划分
// src 
  -style
  -js
  -data
  -api
  -views
//样式层 js层 数据层 请求层 视图层

//domain-style - 按照领域划分
// 根据功能划分 
// 登录功能 用户功能
//src 
  -login
  -index

  //模板 => 背后代表的项目的前端规范