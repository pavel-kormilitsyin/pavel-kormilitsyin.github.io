(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"053f":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("page-loader",{attrs:{state:s.loading}}),s.model?e("div",{staticClass:"content"},[e("div",{staticClass:"gradient q-py-md shadow-after relative-position"},[e("div",{staticClass:"row q-py-md items-center"},[e("div",{staticClass:"col-4 items-center text-center"},[e("stars-rating",{attrs:{orientation:"horizontal",size:"2.6vw",rating:s.model.rating}},[e("div",{staticClass:"fs-vw-8 font-exo2-m text-primary"},[s._v(s._s(s.model.rating))])])],1),e("div",{staticClass:"col-4"},[e("avatar",{attrs:{url:s.model.avatar},nativeOn:{click:function(t){return s.showImage(s.model.avatar)}}})],1),e("div",{staticClass:"col-4 items-center text-center"},[e("div",{staticClass:"fs-vw-8 font-exo2-m text-accent"},[s._v("\n            "+s._s(s.model.countOfReviews)+"\n          ")]),e("div",{staticClass:"fs-vw-3_2 font-sspro-sr text-primary"},[s._v("\n            "+s._s(s.getNoun(s.model.countOfReviews,"отзыв","отзыва","отзывов"))+"\n          ")])])]),e("div",{staticClass:"column text-center"},[e("div",{staticClass:"q-px-lg q-mx-lg fs-vw-5_3 name font-exo2-m text-center"},[s._v("\n          "+s._s(s.model.full_name)+"\n        ")]),s.model.phone?e("div",{staticClass:"font-sspro-sr q-mt-md fs-vw-4"},[e("q-icon",{staticClass:"q-mr-sm",attrs:{size:"4.2vw",name:"img:icons/phone-orange.svg"}}),s._v("\n          "+s._s(s.model.phone)+"\n        ")],1):s._e()])]),e("div",{staticClass:"row font-sspro-sr q-py-md text-center"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"fs-vw-3_2 text-secondary"},[s._v("К/П:")]),e("div",{staticClass:"fs-vw-4 text-primary q-mt-sm"},[s._v(s._s("M"===s.model.gearbox_type?"Механика":"Автомат"))])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"fs-vw-3_2 text-secondary"},[s._v("Автомобиль:")]),e("div",{staticClass:"fs-vw-4 text-primary q-mt-sm"},[s._v(s._s(s.model.car))])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"fs-vw-3_2 text-secondary"},[s._v("Возраст / Стаж:")]),e("div",{staticClass:"fs-vw-4 text-primary q-mt-sm"},[s._v(s._s(s.model.age+" / "+s.model.experience))])])]),e("q-separator"),e("div",{staticClass:"q-pa-md text-left fs-vw-3_2 font-sspro-sr"},[e("div",{staticClass:"text-secondary q-mb-sm"},[s._v("О себе")]),e("div",{staticClass:"text-primary text-justify about"},[e("pre",[s._v(s._s(s.model.about))])])]),e("q-separator"),s.model.carPhotos.length?e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"text-secondary q-mb-sm fs-vw-3_2 font-sspro-sr"},[s._v("\n        Фото автомобиля: "),e("b",[s._v(s._s(s.model.carPhotos.length))])]),e("div",{staticClass:"q-pt-sm q-col-gutter-sm row"},s._l(s.model.carPhotos,(function(t,a){return e("div",{key:t.url,staticClass:"col-6 col-lg-4"},[e("q-img",{attrs:{fit:"cover",src:t.url,"spinner-color":"white",height:"24vw"},on:{click:function(e){return s.showImage(t.url)}}})],1)})),0)]):s._e()],1):s._e(),e("img-viewer",{ref:"viewer"})],1)},i=[],r=e("aecd"),o=e("9562"),n=e("9f3a"),l=e("7212"),c=e("a086"),d={name:"AboutInstructorContentMobile",components:{ImgViewer:c["a"],Avatar:r["a"],StarsRating:o["a"],PageLoader:n["a"],Swiper:l["Swiper"],SwiperSlide:l["SwiperSlide"]},data:function(){return{showPhotos:!1,swiperOptions:{slidesPerView:4,slidesPerGroup:4,slidesPerColumn:1,spaceBetween:0,direction:"horizontal",scrollbar:{el:".swiper-scrollbar",dragClass:"swiper-scrollbar-drag scroll-drag"},navigation:{nextEl:".right-arrow",prevEl:".left-arrow"},breakpoints:{1300:{slidesPerView:4,slidesPerGroup:4,slidesPerColumn:1},1170:{slidesPerView:3,slidesPerGroup:3,slidesPerColumn:1},890:{slidesPerView:2,slidesPerGroup:2,slidesPerColumn:1},550:{slidesPerView:2,slidesPerGroup:2,slidesPerColumn:1}}}}},methods:{showImage:function(s){this.$refs.viewer.show([{thumbnail:s,source:s}])}},computed:{model:function(){var s=parseInt(this.$route.params.instructorId,10);return this.$store.getters.detailedInfoById(s)},loading:function(){return!this.model}},mounted:function(){var s=this;this.$nextTick((function(){s.showPhotos=!0}))}},m=d,v=(e("bc84"),e("2877")),p=e("0016"),u=e("eb85"),w=e("068f"),f=e("eebe"),_=e.n(f),C=Object(v["a"])(m,a,i,!1,null,"080fbbbf",null);t["default"]=C.exports;_()(C,"components",{QIcon:p["a"],QSeparator:u["a"],QImg:w["a"]})},"6a35":function(s,t,e){},bc84:function(s,t,e){"use strict";e("6a35")}}]);