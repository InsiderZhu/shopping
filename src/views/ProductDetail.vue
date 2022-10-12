<template v-if="product">
		<div class="product">
			<div class="row">
				<div class="col-6 product-img">
					<img :src="product.image" />
				</div>
				<div class="col-4 product-info">
					<div class="product-name" >{{product.name}}</div>
					<div class="product-cost">
						<span>
							价格:
						</span>
						<span class="product-costList">
							￥{{product.cost}}
						</span>
					</div>
					<div class="button" @click.prevent="addCart">					
						<router-link to='/Cart'type="button" class="btn btn-outline-warning">立即购买</router-link>
						<button type="button" class="btn btn-danger product-add-cart">加入购物车</button>
					</div>

				</div>
			</div>


				
	</div>
</template>

<script>
	export default{
		name:'productDetail',
		data(){
			return{
				id:parseInt(this.$route.params.id),
				product:null
			}
		},
		mounted() {
			this.getProduct()
		},
		methods:{
			getProduct(){
				const productList = this.$store.state.productList
				this.product = productList.find(item => item.id == this.id)
			},
			test(){
				console.log(this.id)
				console.log(this.product)
			},
			addCart(){
				console.log(this.id)
				this.$store.commit('addCart',this.id)
			}
		}
	}
</script>

<style scoped>
.product {
	margin: 32px;
	padding:  32px;
	border: 1px solid #ccc;
	border-radius: 18px;
	background-color: #fff;
	overflow:hidden;
}
.product-img{
	padding-left: 10%;
	float: left;
	height: 450px;
	
	
}
.product-name{
	font-size: 300%;
	padding:10px
}
.product-img img{
	height: 100%;

}
.product-info{




}
.product-cost{
	background-color: #FFF2E8;
	font-weight: 200;
	font-size: 18px;
	margin: 10px ;
	padding-bottom: 20px;
}
.product-costList{
	color: #f2352e;
	font-size: 200%;
	font-weight: 500;
	padding-left: 10%;

}
.product-add-cart{

	margin: 10px;
}
.button{
	padding: 10px;
}

</style>