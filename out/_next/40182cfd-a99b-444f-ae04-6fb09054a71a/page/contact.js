
          window.__NEXT_REGISTER_PAGE('/contact', function() {
            var comp = module.exports=webpackJsonp([3],{324:function(e,t,a){e.exports=a(325)},325:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(326);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(s).default}})},326:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(327);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(s).default}})},327:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(){return c.default.createElement("div",{className:"jsx-2443768432"},c.default.createElement(m.default,{title:o.default.titles.contact}),c.default.createElement(p.default,null),c.default.createElement(_.default,{className:"box-shadow"},c.default.createElement(h.default,null)),c.default.createElement("div",{className:"jsx-2443768432 Contact__wrapper"},c.default.createElement("div",{className:"jsx-2443768432 row"},c.default.createElement("div",{className:"jsx-2443768432 col-sm-offset-2"}),c.default.createElement("div",{className:"jsx-2443768432 col-xs-10 col-sm-4"},c.default.createElement(E.default,null)),c.default.createElement("div",{className:"jsx-2443768432 col-xs-10 col-sm-4"},c.default.createElement(N.default,null)))),c.default.createElement(b.default,null),c.default.createElement(n.default,{styleId:"2443768432",css:[".Contact__wrapper.jsx-2443768432{padding:0 25px;margin-bottom:90px;}"]}))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),n=l(r),u=a(0),c=l(u),d=a(61),o=l(d),i=a(62),m=l(i),f=a(63),p=l(f),x=a(85),_=l(x),g=a(86),h=l(g),v=a(64),b=l(v),j=a(356),E=l(j),y=a(357),N=l(y);t.default=s},356:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(){return c.default.createElement("div",{className:"jsx-3555841028 ContactInfo"},c.default.createElement("p",{className:"jsx-3555841028"},"Send me a message if you have any problems, found a bug or have a feature suggestion."),c.default.createElement("br",{className:"jsx-3555841028"}),c.default.createElement("p",{className:"jsx-3555841028"},"Also, tell me which map would like to see next."),c.default.createElement("br",{className:"jsx-3555841028"}),c.default.createElement("h5",{className:"jsx-3555841028"},"All feedback is welcome!"),c.default.createElement(n.default,{styleId:"3555841028",css:[".ContactInfo.jsx-3555841028{margin-top:70px;padding-right:15px;}"]}))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),n=l(r),u=a(0),c=l(u);t.default=s},357:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(358);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(s).default}})},358:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(37),r=l(s),n=a(6),u=l(n),c=a(3),d=l(c),o=a(4),i=l(o),m=a(7),f=l(m),p=a(8),x=l(p),_=a(2),g=l(_),h=a(0),v=l(h),b=a(174),j=l(b),E=a(376),y=l(E),N=a(9),M=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(N),F=function(e){function t(e){(0,d.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleFormSubmit=a.handleFormSubmit.bind(a),a.state={errors:[],succesMsg:"",isSending:!1},a}return(0,x.default)(t,e),(0,i.default)(t,[{key:"sendForm",value:function(){var e=this,t=this.refs,a=t.message,l=t.email,s="https://formspree.io/"+y.default.contactEmail;j.default.post(s,{message:a.value,email:l.value}).then(function(t){200===t.status?(e.setState({succesMsg:"Message was successfully sent!",isSending:!1}),a.value="",l.value=""):e.setState({errors:["There was some problem. Please try again later."],isSending:!1})}).catch(function(t){return e.setState({errors:[t],isSending:!1})})}},{key:"validateForm",value:function(){var e=this.refs,t=e.message,a=e.email,l=[];return""===t.value&&l.push("Message body can't be blank"),a.value&&!/@/.test(a.value)&&l.push("Email is missing an @"),this.setState({errors:l}),0===l.length}},{key:"handleFormSubmit",value:function(e){this.setState({errors:[],succesMsg:""}),""===this.refs._bazzinga.value&&this.validateForm()&&(this.setState({isSending:!0}),this.sendForm()),e.target.blur()}},{key:"renderErrors",value:function(){var e=this.state.errors.map(function(e,t){return v.default.createElement("li",{key:t},e)});return e.length>0?v.default.createElement("div",{className:"jsx-3310556270"},v.default.createElement("ul",{className:"jsx-3310556270 ContactForm__errors"},e),v.default.createElement(g.default,{styleId:"3310556270",css:[".ContactForm__errors.jsx-3310556270{padding:20px;margin-bottom:20px;background:"+M.red50+";border:1px solid "+M.red300+";color:"+M.red900+";}"]})):""}},{key:"renderSuccessMsg",value:function(){return this.state.succesMsg?v.default.createElement("div",{className:"jsx-4074917254 ContactForm__success-msg"},v.default.createElement("p",{className:"jsx-4074917254"},this.state.succesMsg),v.default.createElement(g.default,{styleId:"4074917254",css:[".ContactForm__success-msg.jsx-4074917254{padding:20px;margin-bottom:20px;background-color:"+M.lightGreen50+";border:1px solid "+M.lightGreen400+";color:"+M.lightGreen900+";}"]})):""}},{key:"render",value:function(){var e;return v.default.createElement("div",{className:"jsx-886454857 ContactForm__container"},this.renderErrors(),this.renderSuccessMsg(),v.default.createElement("div",{className:"jsx-886454857"},v.default.createElement("label",{htmlFor:"message",className:"jsx-886454857"},"Message:"),v.default.createElement("textarea",{ref:"message",id:"message",type:"text",required:!0,placeholder:"message",className:"jsx-886454857 ContactForm__textarea"}),v.default.createElement("input",{type:"text",ref:"_bazzinga",style:{display:"none"},className:"jsx-886454857"}),v.default.createElement("label",{htmlFor:"contact-email",className:"jsx-886454857"},"Your contact email:"),v.default.createElement("input",(e={ref:"email",id:"contact-email",type:"text"},(0,r.default)(e,"type","email"),(0,r.default)(e,"placeholder","email"),(0,r.default)(e,"name","_replyto"),(0,r.default)(e,"className","jsx-886454857 ContactForm__input"),e)),v.default.createElement("button",{onClick:this.handleFormSubmit,disabled:this.state.isSending,className:"jsx-886454857 button-primary"},"Send")),v.default.createElement(g.default,{styleId:"886454857",css:[".ContactForm__container.jsx-886454857{text-align:left;margin-top:70px;}",".ContactForm__textarea.jsx-886454857{height:200px;width:100%;max-width:350px;min-width:200px;}",".ContactForm__input.jsx-886454857{display:block;width:100%;max-width:350px;min-width:200px;}"]}))}}]),t}(h.Component);t.default=F},376:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={contactEmail:"kacper.datamaps@gmail.com"}}},[324]);
            return { page: comp.default }
          })
        