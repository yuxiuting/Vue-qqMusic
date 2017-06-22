// 将第三方API 列出在模块 有利于代码的可读性
const prefix = ''
const agent = 'https://bird.ioliu.cn/v1/?url='
const wangyi = agent + 'http://music.163.com'
// const qq = agent + 'https://y.qq.com/'

export default {
    music: {
        search: 'https://api.imjad.cn/cloudmusic/?type=search&s=',
        lyric: wangyi + '/api/song/lyric',
	 	detail: 'https://bird.ioliu.cn/netease', 	// id=2222
	 	playlist: wangyi + '/api/playlist/detail'
    }
}