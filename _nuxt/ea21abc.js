(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{478:function(t,e,n){},479:function(t,e,n){"use strict";n(45),n(56);var o={name:"MicroMarkupArticle",props:{dateModified:{type:String},datePublished:{type:String},imageArticle:{type:String}}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("meta",{attrs:{itemprop:"image",content:t.imageArticle}}),t._v(" "),e("meta",{attrs:{itemprop:"dateModified",content:t.dateModified}}),t._v(" "),e("meta",{attrs:{itemscope:"",itemprop:"mainEntityOfPage",itemid:"".concat(t.$config.SITE_URL,"/").concat(t.$route.name)}}),t._v(" "),e("meta",{attrs:{itemprop:"datePublished",content:t.datePublished}}),t._v(" "),e("div",{attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("div",{attrs:{itemprop:"publisher",itemscope:"",itemtype:"https://schema.org/Organization"}},[e("div",{attrs:{itemprop:"logo",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[e("img",{staticStyle:{display:"none"},attrs:{itemprop:"url",src:t.$config.LOGO_URL,alt:"Logo ".concat(t.$config.SITE_NAME_EN)}}),t._v(" "),e("meta",{attrs:{itemprop:"width",content:t.$config.LOGO_WIDTH}}),t._v(" "),e("meta",{attrs:{itemprop:"height",content:t.$config.LOGO_HEIGHT}}),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}}),t._v(" "),e("meta",{attrs:{itemprop:"telephone",content:t.$config.TELEPHONE}}),t._v(" "),e("meta",{attrs:{itemprop:"address",content:t.$config.ADDRESS}}),t._v(" "),e("meta",{attrs:{itemprop:"url",content:t.$config.SITE_URL}})])])}),[],!1,null,null,null);e.a=component.exports},480:function(t,e,n){"use strict";n(478)},482:function(t,e,n){"use strict";n(27),n(39),n(264),n(56);var o={data:function(){return{showForm:!0,showSuccess:!1,name:"",submittedNames:[],record:{phone:"",color:""}}},computed:{nameState:function(){return this.record.phone?12===this.record.phone.length:null}},methods:{handleSubmit:function(){var t=this;this.submittedNames.push(this.name);var e="https://api.telegram.org/bot".concat(this.$config.BOT_API_KEY,"/sendMessage"),n="<b>Заявка на обратный звонок!</b>\n";n+="<b>Отправитель: Заказать подбор</b>\n",n+="<b>Телефон: </b> ".concat(this.record.phone),this.$axios.post(e,{chat_id:this.$config.BOT_CHAT_ID,parse_mode:"html",text:n}).then((function(e){t.showSuccess=!0,t.showForm=!1,console.log("data ==>",e.data),console.log("status ==>",e.status),console.log("statusText ==>",e.statusText),console.log("headers ==>",e.headers),console.log("config ==>",e.config)}))}}},r=(n(480),n(23)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("b-form",{ref:"form",staticClass:"capture-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("svg",{staticStyle:{visibility:"hidden",position:"absolute"},attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}}),t._v(" "),e("feComposite",{attrs:{in:"SourceGraphic",in2:"goo",operator:"atop"}})],1)])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showForm?e("div",{staticClass:"show-form"},[e("b-form-group",{staticStyle:{width:"240px","margin-bottom":"30px"}},[e("p",{staticClass:"capture-form__title"},[t._v("Нужна помощь?")]),t._v(" "),e("p",{staticClass:"capture-form__description goo"},[t._v("\n          Подберем программу игры для вашего мероприятия\n        ")])]),t._v(" "),e("b-form-group",{attrs:{label:"Телефон"}},[e("vesp-input-text-mask",{attrs:{mask:"+7 (XXX) XXX-XX-XX","placeholder-char":"X",state:t.nameState,"format-value":function(t){return t.replaceAll(/[^\d+]/g,"")}},model:{value:t.record.phone,callback:function(e){t.$set(t.record,"phone",e)},expression:"record.phone"}})],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-buttom"},[e("b-button",{staticClass:"signup",attrs:{disabled:!t.nameState,type:"submit"}},[e("span",{staticClass:"btn-title"},[t._v("Заказать подбор")])])],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-privacy-policy"},[e("p",{staticClass:"capture-form__privacy-policy"},[t._v("\n          Нажимая на кнопку вы принимаете\n          "),e("b-link",{attrs:{href:"/agreement"}},[t._v("политику конфеденциальности")])],1)])],1):t._e()]),t._v(" "),e("transition",{attrs:{name:"bounce"}},[t.showSuccess?e("div",{staticClass:"show-success"},[e("p",{staticClass:"goo"},[t._v("\n        Спасибо!"),e("br"),t._v("\n        Ваше сообщение отправлено\n      ")])]):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports},539:function(t,e,n){"use strict";n.r(e);n(15),n(59),n(45),n(56);var o=n(479),r=n(482),c={components:{MicroMarkupArticle:o.a,CaptureForm:r.a},layout:"page",data:function(){return{title:"Согласие на обработку персональных данных",description:"Согласие на обработку персональных данных",dateModified:"2023-02-21T06:08:18+03:00",datePublished:"2023-02-21T06:08:18+03:00",imageArticle:"/img/logo.svg"}},head:function(){return{htmlAttrs:{lang:"ru"},title:"".concat(this.title),meta:[{hid:"description",name:"description",content:"".concat(this.description)},{hid:"publish_date",name:"publish_date",content:"2023-02-21T06:08:18.000000Z"},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:"".concat(this.title)},{hid:"og:description",property:"og:description",content:"".concat(this.description)},{hid:"og:image",property:"og:image",content:"favicons/favicon-512x512.png"},{hid:"og:url",property:"og:url",content:"".concat(this.$config.SITE_URL)},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.title)},{hid:"twitter:description",property:"twitter:description",content:"".concat(this.description)},{hid:"twitter:image",property:"twitter:image",content:"favicons/favicon-512x512.png"}],link:[{rel:"canonical",href:"".concat(this.$config.SITE_URL,"/").concat(this.$route.name)}]}}},l=n(23),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"article-container article-min"},[e("aside",{staticClass:"article-sidebar-left"},[e("CaptureForm")],1),t._v(" "),e("main",{staticClass:"article-main",attrs:{id:"scrollspy-nested"}},[e("h1",[t._v("Согласие на обработку персональных данных")]),t._v(" "),e("article",{attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"http://schema.org/Article"}},[e("MicroMarkupArticle",{attrs:{"date-modified":t.dateModified,"date-published":t.datePublished,"image-article":t.imageArticle}}),t._v(" "),t._m(0)],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-body",attrs:{itemprop:"articleBody"}},[e("p",[t._v("\n            Настоящим я, далее — «Субъект Персональных Данных», во исполнение\n            требований Федерального закона от 27.07.2006 г. № 152-ФЗ «О\n            персональных данных» (с изменениями и дополнениями) свободно,\n            своей волей и в своем интересе даю свое согласие ООО «ТП\n            ГИДРАВЛИКА» на обработку своих персональных данных, указанных при\n            заполнении веб-формы («Обратная связь») на сайте\n            https://tpgidravlika.ru/ (далее — «Сайт»), направляемых с\n            использованием Сайта. Под персональными данными я понимаю любую\n            информацию, относящуюся ко мне как к Субъекту Персональных Данных,\n            в том числе мои фамилию, имя, отчество, телефон, электронную\n            почту, иную другую информацию. Под обработкой персональных данных\n            я понимаю сбор, систематизацию, накопление, уточнение, обновление,\n            изменение, использование, распространение, передачу, в том числе\n            трансграничную, обезличивание, блокирование, уничтожение,\n            бессрочное хранение и любые другие действия (операции) с\n            персональными данными.\n          ")]),t._v(" "),e("p",[t._v("\n            Обработка персональных данных Субъекта Персональных Данных\n            осуществляется исключительно в целях предоставления Субъекту\n            Персональных Данных информационных и правовых консультаций\n            посредством обратного телефонного звонка или письмом на\n            электронную почту. Датой выдачи согласия на обработку персональных\n            данных Субъекта Персональных Данных является дата отправки\n            заполненной веб-формы на Сайте: https://tpgidravlika.ru/.\n            Обработка персональных данных Субъекта Персональных Данных может\n            осуществляться с помощью средств автоматизации и/или без\n            использования средств автоматизации в соответствии с действующим\n            законодательством РФ и внутренними положениями (уставом) ООО «ТП\n            ГИДРАВЛИКА».\n          ")]),t._v(" "),e("p",[t._v("\n            ООО «ТП ГИДРАВЛИКА» принимает необходимые правовые,\n            организационные и технические меры или обеспечивает их принятие\n            для защиты персональных данных от неправомерного или случайного\n            доступа к ним: уничтожения, изменения, блокирования, копирования,\n            предоставления, распространения персональных данных и иных\n            неправомерных действий в отношении персональных данных, а также\n            принимает на себя обязательство сохранения конфиденциальности\n            персональных данных Субъекта Персональных Данных.\n          ")]),t._v(" "),e("p",[t._v("\n            Центр вправе привлекать для обработки персональных данных Субъекта\n            Персональных Данных субподрядчиков, а также вправе передавать\n            персональные данные для обработки своим аффилированным лицам,\n            обеспечивая при этом принятие такими субподрядчиками и\n            аффилированными лицами соответствующих обязательств в части\n            конфиденциальности персональных данных.\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);