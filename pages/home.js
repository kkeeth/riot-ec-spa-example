"use strict";(self.webpackChunkriot_ec_spa_example=self.webpackChunkriot_ec_spa_example||[]).push([[229],{409:function(e,t,p){var r=p(815);t.Z={css:'product-list .product-list,[is="product-list"] .product-list{ display: flex; padding: 2rem; gap: 10px 20px; }',exports:{components:{Product:r.Z}},template:(e,t,p,r)=>e('<div class="product-list"><product expr14="expr14"></product></div>',[{type:p.EACH,getKey:e=>e.index,condition:null,template:e(null,[{type:p.TAG,getComponent:r,evaluate:e=>"product",slots:[],attributes:[{type:t.ATTRIBUTE,name:"product",evaluate:e=>e.product}]}]),redundantAttribute:"expr14",selector:"[expr14]",itemName:"product",indexName:"index",evaluate:e=>e.props.products}]),name:"product-list"},(()=>{{const t=p(74).default;e.hot.accept(),e.hot.data&&t(p(409).Z)}})()},815:function(e,t,p){t.Z={css:'product,[is="product"]{ display: flex; flex-direction: column; align-items: center; background: white; padding: 1rem 2rem; min-width: 25vw; border-radius: 1rem; text-align: center; box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2); } product .product,[is="product"] .product{ padding: 1rem 2rem; } product .product__title,[is="product"] .product__title,product .product__description,[is="product"] .product__description{ margin-bottom: 1rem; }',exports:{},template:(e,t,p,r)=>e('<div class="product"><h2 expr15="expr15" class="product__title"> </h2><p expr16="expr16" class="product__description"> </p><div class="product__image"><img expr17="expr17"/></div><div class="product__price-button-container"><div expr18="expr18" class="product__price"> </div><button expr19="expr19" class="snipcart-add-item product__button">\n        Add to cart\n      </button></div></div>',[{redundantAttribute:"expr15",selector:"[expr15]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>e.props.product.name}]},{redundantAttribute:"expr16",selector:"[expr16]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>e.props.product.description}]},{redundantAttribute:"expr17",selector:"[expr17]",expressions:[{type:t.ATTRIBUTE,name:"src",evaluate:e=>e.props.product.image.src},{type:t.ATTRIBUTE,name:"alt",evaluate:e=>e.props.product.image.alt}]},{redundantAttribute:"expr18",selector:"[expr18]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>["$",e.props.product.price.toFixed(2)].join("")}]},{redundantAttribute:"expr19",selector:"[expr19]",expressions:[{type:t.ATTRIBUTE,name:"data-item-id",evaluate:e=>e.props.product.id},{type:t.ATTRIBUTE,name:"data-item-name",evaluate:e=>e.props.product.name},{type:t.ATTRIBUTE,name:"data-item-price",evaluate:e=>e.props.product.price},{type:t.ATTRIBUTE,name:"data-item-url",evaluate:e=>e.props.product.url},{type:t.ATTRIBUTE,name:"data-item-image",evaluate:e=>e.props.product.image.src}]}]),name:"product"},(()=>{{const t=p(74).default;e.hot.accept(),e.hot.data&&t(p(815).Z)}})()},674:function(e,t,p){p.r(t);var r=p(409),a=p(746);t.default={css:null,exports:{components:{ProductList:r.Z},products:a.Z},template:(e,t,p,r)=>e('<product-list expr13="expr13"></product-list>',[{type:p.TAG,getComponent:r,evaluate:e=>"product-list",slots:[],attributes:[{type:t.ATTRIBUTE,name:"products",evaluate:e=>e.products}],redundantAttribute:"expr13",selector:"[expr13]"}]),name:"home"},(()=>{{const t=p(74).default;e.hot.accept(),e.hot.data&&t(p(674).default)}})()},746:function(e,t){t.Z=[{id:111,name:"product name1",price:999,description:"hogehoge",image:{src:"https://placeimg.com/200/200/animals",alt:"animals"}},{id:222,name:"product name2",price:999,description:"hogehoge",image:{src:"https://placeimg.com/200/200/animals",alt:"animals"}},{id:333,name:"product name3",price:999,description:"hogehoge",image:{src:"https://placeimg.com/200/200/animals",alt:"animals"}}]}}]);
//# sourceMappingURL=home.js.map