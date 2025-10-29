<script setup></script>

<template>
	<div class="always-container">
		<div class="header-container">
			<div>
				<a href="https://news.baidu.com/" target="_blank">新闻</a>
				<a href="https://www.hao123.com/?src=from_pc_logon/" target="_blank">hao123</a>
				<a href="https://map.baidu.com/" target="_blank">地图</a>
				<a href="https://tieba.baidu.com/" target="_blank">贴吧</a>
				<a href="https://haokan.baidu.com/?sfrom=baidu-top" target="_blank">视频</a>
				<a href="https://image.baidu.com/" target="_blank">图片</a>
				<a href="https://pan.baidu.com/?from=1026962h/" target="_blank">网盘</a>
				<a href="https://wenku.baidu.com/?fr=bdpcindex" target="_blank">文库</a>
				<a href="https://www.baidu.com/" target="_blank">更多</a>
			</div>
			<div>
				<a href="https://www.baidu.com/" target="_blank">设置</a>
				<button>登录</button>
			</div>
		</div>
		<div class="main-container">
			<img class="logo" src="@assets/svg/baidu.svg" alt="baidu logo" srcset="" />
			<div class="input-container">
				<div>
					<input class="input" type="text" placeholder="百度一下，你就知道" />
					<button>百度一下</button>
				</div>
			</div>
		</div>
		<div class="footer-container">
			<a href="https://home.baidu.com/" target="_blank">关于百度</a>
			<a href="https://ir.baidu.com/" target="_blank">About Baidu</a>
			<a href="https://www.baidu.com/duty/" target="_blank">使用百度前必读</a>
			<a href="https://help.baidu.com/question?prod_id=1" target="_blank">帮助中心</a>
			<a href="https://e.baidu.com/?refer=1271" target="_blank">企业推广</a>
			<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank">
				京公网安备11000002000001号
			</a>
			<a href="https://beian.miit.gov.cn/" target="_blank">京ICP证030173号</a>
			<a href="javascript:" target="_blank">互联网新闻信息服务许可证11220180008</a>
			<a href="javascript:" target="_blank">网络文化经营许可证： 京网文〔2023〕1034-029号</a>
			<a href="https://www.baidu.com/licence/" target="_blank">信息网络传播视听节目许可证 0110516</a>
			<a href="javascript:" target="_blank">互联网宗教信息服务许可证编号：京（2022）0000043</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		> div {
			margin: 20px;
			display: flex;
			align-items: center;
			gap: 20px;
			a {
				color: #272b32;
				font-size: 14px;
				&:hover {
					color: #315efb;
				}
			}
			button {
				padding: 4px 10px;
				color: white;
				border-radius: 4px;
				background-image: linear-gradient(136deg, #286aff, #4e6ef2, #7274f9, #9f66ff);
				cursor: pointer;
			}
		}
	}
	.main-container {
		padding: 0 30px;
		margin-top: 20vh;
		.logo {
			margin: auto;
			display: block;
			max-width: 200px;
		}
		.input-container {
			margin: 20px auto;
			padding: 1px;
			max-width: 800px;
			height: 56px;
			border-radius: 12px;
			background-image: linear-gradient(136deg, #286aff, #4e6ef2, #7274f9, #9f66ff);
			> div {
				overflow: hidden;
				padding: 6px;
				display: grid;
				grid-template-columns: 1fr 110px;
				gap: 10px;
				height: 100%;
				border-radius: 10px;
				background-color: white;
				input {
					min-width: 0;
					font-size: 16px;
					padding: 0 12px;
					vertical-align: middle;
					border: none;
				}
				button {
					font-size: 16px;
					color: white;
					font-weight: 500;
					border-radius: 10px;
					background-image: linear-gradient(136deg, #286aff, #4e6ef2, #7274f9, #9f66ff);
					cursor: pointer;
					&:hover {
						background-image:
							linear-gradient(rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09)),
							linear-gradient(136deg, #286aff, #4e6ef2, #7274f9, #9f66ff);
					}
				}
			}
		}
	}
	.footer-container {
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		font-size: 12px;
		padding: 20px;
		text-align: center;
		a {
			margin: 0 4px;
			display: inline-block;
			color: #bbb;
			white-space: normal;
			&:hover {
				color: #272b32;
			}
		}
	}

	@media (max-width: 768px) {
		.header-container {
			> div {
				gap: 10px;
				&:first-child {
					display: none;
				}
			}
		}
	}
</style>
