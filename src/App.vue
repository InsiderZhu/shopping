<template>
  <div id="app">
		<div class="header">


			<router-link class="header-title" to='/List'>电商示例网站</router-link>
			<router-link class="header-menu" to='/Cart'>购物车 <span v-if="cartList.length">{{cartList.length}}</span></router-link>

			

		</div>
    <router-view/>
  </div>
</template>

<script>
	export default{
		name:'App',
		computed:{
				cartList(){
				return this.$store.state.cartList
			},
		},

	}
	
</script>

<style>
html
	body{
		padding: 0;
		margin: 0;
		background-color: #eeeeee;
	}

	.header{
		background-color: rgb(0,0,0,0.8);
		line-height: 48px;
		font-size: 18px;
		height: 48px;
	}
	.header a{
		color: #fff;
		text-decoration: none;
	}
	.header a:hover{
		background-color: aquamarine;
	}
	.header-title{
		float: left;
		margin-left: 20px;
	}
	.header-menu{
		float: right;
		margin-right: 32px;
	}
	.header-menu span{
		display: inline-block;
		background-color: #ff5500;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		line-height: 16px;
		font-size: 12px;
		text-align: center;
	}
</style>
