<template>
	<div class="product-item">
		<router-link :to="'/ProductDetail/'+productItem.id" class="item-main">
		<img :src="productItem.image"/>
		
		<h4>{{productItem.name}}</h4>
		<div class="item-color" :style="{background: colors[productItem.color]}"></div>
		<div class="item-cost">￥{{productItem.cost}}</div>
		<div class="item-add-cart" @click.prevent="addCart">加入购物车</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'Product',
		data(){
			return{
				colors:{
					'白色':'#ffffff',
					'金色':'#dac272',
					'蓝色':'#233472',
					'红色':'#f2352e',
					'黑色':'#222'
					
				}
			}
		},
		props:{
			productItem:Object
		},
		methods:{
			addCart(){
				console.log(this.productItem.id)
				this.$store.commit('addCart',this.productItem.id)
			}
		}
	}
	
</script>

<style scoped>
	.product-item{
		width: 20%;
	}
	.item-main{
		display: block;
		margin: 16px;
		padding: 16px;
		border: 1px solid #dddee1;
		background-color: #fff;
		bloder-radius: 6px;
		overflow: hidden;
		text-align: center;
		position: relative;
		text-decoration: none;
	}
	.item-main:hover h4{
		color: #0070c9;
	}
	.item-main img{
		width: 100%;
	}
	.item-color{
		display: block;
		margin: 16px auto;
		width: 16px;
		height: 16px;
		border: 1px solid #dddee1;
		border-radius: 50%;
	}
	h4{
		color: #222;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		
	}
		
	.item-cost{
		color: #de4037;
		margin-top: 10px;
	}
	.item-add-cart{
		display: none;
		background-color: #7fb9f8;
		color: #fff;
		padding: 4px 8px;
		border-radius: 3px;
		font-size: 12px;
		position: absolute;
		right: 1px;
		top: 1px;
	}
	.item-main:hover .item-add-cart{
		display:inline;
	}
</style>