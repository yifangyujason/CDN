var SydneyFullScreenConv;(function(n){function tr(n){var d,g,nt,rt,ut,et,st,ht,ct,lt,wt,dt,gt,fi,tr,cr,lr,vr,yr,pr,kr,dr,nu,tu,iu,ru,uu,fu,eu,ou,su,hu,au,vu,yu,wu,ku,du,gu,nf,tf,rf,uf,ff,ef,sf,hf,cf,lf,af,vf,y,yf,gf,ne,te,pf,ie,wf,i,p,f,bf,kf,re,w;if(n===void 0&&(n=null),y=_ge(ar),!y.querySelector("cib-serp")){at=(d=_w._sydConvConfig)===null||d===void 0?void 0:d.usePill;vt=(g=_w._sydConvConfig)===null||g===void 0?void 0:g.enableScrollOut;yt=(nt=_w._sydConvConfig)===null||nt===void 0?void 0:nt.enableSydContext;s=(rt=_w._sydConvConfig)===null||rt===void 0?void 0:rt.enableSydHistory;s=(ut=_w._sydConvConfig)===null||ut===void 0?void 0:ut.convBackBtn;tt=(et=_w._sydConvConfig)===null||et===void 0?void 0:et.enableSetConvQueryFlag;wr=(st=_w._sydConvConfig)===null||st===void 0?void 0:st.enableSydTigerAns;ni=(ht=_w._sydConvConfig)===null||ht===void 0?void 0:ht.enableSydAjax;ft=(ct=_w._sydConvConfig)===null||ct===void 0?void 0:ct.enableSydCarousel;k=(lt=_w._sydConvConfig)===null||lt===void 0?void 0:lt.moveOnlySydXAnswers;e=(wt=_w._sydConvConfig)===null||wt===void 0?void 0:wt.hideSydFSC;o=(dt=_w._sydConvConfig)===null||dt===void 0?void 0:dt.enableSydOverlay;pt=(gt=_w._sydConvConfig)===null||gt===void 0?void 0:gt.enable1TCibSlot;b=(fi=_w._sydConvConfig)===null||fi===void 0?void 0:fi.enableSydX1T;ti=(tr=_w._sydConvConfig)===null||tr===void 0?void 0:tr.hideSydMic;ii=(cr=_w._sydConvConfig)===null||cr===void 0?void 0:cr.fromNoResults;vi=(lr=_w._sydConvConfig)===null||lr===void 0?void 0:lr.codexWinEnableCustomGreeting;yi=(vr=_w._sydConvConfig)===null||vr===void 0?void 0:vr.codexWinGreetingCustomString;ei=(yr=_w._sydConvConfig)===null||yr===void 0?void 0:yr.checkCreatorAnsFor1T;ri=SydFSCHelper.getConfigOrDefault((pr=_w._sydConvConfig)===null||pr===void 0?void 0:pr.enableSydCarouselHistory,!1);br=SydFSCHelper.getConfigOrDefault((kr=_w._sydConvConfig)===null||kr===void 0?void 0:kr.enableSQMsg,!1);ui=SydFSCHelper.getConfigOrDefault((dr=_w._sydConvConfig)===null||dr===void 0?void 0:dr.enableSemSerpNoCache,!1);oi=SydFSCHelper.getConfigOrDefault((nu=_w._sydConvConfig)===null||nu===void 0?void 0:nu.enableSydStaticAdsLink,!1);var ue=SydFSCHelper.getConfigOrDefault((tu=_w._sydConvConfig)===null||tu===void 0?void 0:tu.hideSydReconnect,!1),fe=(iu=_w._sydConvConfig)===null||iu===void 0?void 0:iu.enableDlBing,ee=(ru=_w._sydConvConfig)===null||ru===void 0?void 0:ru.disableSydGhosting,oe=SydFSCHelper.getConfigOrDefault((uu=_w._sydConvConfig)===null||uu===void 0?void 0:uu.disableCibNotificationStyleUpdate,!1),se=_w._sydCachedString,df=_w._sydAddOptionsSet;if(_G[SydFSCHelper.SYD_MODE]="serp",_G[SydFSCHelper.SYD_PREV_MODE]="",si=SydFSCHelper.getConfigOrDefault((fu=_w._sydConvConfig)===null||fu===void 0?void 0:fu.disableTabletScroll,!1),hi=SydFSCHelper.getConfigOrDefault((eu=_w._sydConvConfig)===null||eu===void 0?void 0:eu.disableTabletScrollOut,!1),l=SydFSCHelper.getConfigOrDefault((ou=_w._sydConvConfig)===null||ou===void 0?void 0:ou.disableFocusedTabletScrollOut,!1),ci=SydFSCHelper.getConfigOrDefault((su=_w._sydConvConfig)===null||su===void 0?void 0:su.disableTouchDesktopScroll,!1),ot=SydFSCHelper.getConfigOrDefault((hu=_w._sydConvConfig)===null||hu===void 0?void 0:hu.disableDesktopScroll,!1),li=SydFSCHelper.getConfigOrDefault((au=_w._sydConvConfig)===null||au===void 0?void 0:au.enableChatScrollFix,!1),ai=SydFSCHelper.getConfigOrDefault((vu=_w._sydConvConfig)===null||vu===void 0?void 0:vu.enableConvModeSwitchAjax,!1),bi=SydFSCHelper.getConfigOrDefault((yu=_w._sydConvConfig)===null||yu===void 0?void 0:yu.enableCssSplitConvModeOnClick,0),bt=SydFSCHelper.getConfigOrDefault((wu=_w._sydConvConfig)===null||wu===void 0?void 0:wu.enableWelcomeScreenV2,!1),kt=SydFSCHelper.getConfigOrDefault((ku=_w._sydConvConfig)===null||ku===void 0?void 0:ku.enableChatFRE,!1),ki=SydFSCHelper.getConfigOrDefault((du=_w._sydConvConfig)===null||du===void 0?void 0:du.enable2TQueryConfigsOnSerpLoad,!1),di=SydFSCHelper.getConfigOrDefault((gu=_w._sydConvConfig)===null||gu===void 0?void 0:gu.enableBackgroundFix,!1),gi=SydFSCHelper.getConfigOrDefault((nf=_w._sydConvConfig)===null||nf===void 0?void 0:nf.hideMuidUpsell,!1),nr=SydFSCHelper.getConfigOrDefault((tf=_w._sydConvConfig)===null||tf===void 0?void 0:tf.enableSERPHideShowConv,!1),a=_d.createElement("slot"),a.setAttribute("name","firstAnswer"),a.setAttribute("slot","firstAns"),v=_d.createElement("slot"),v.setAttribute("name","firstAns"),r=((rf=_d.getElementsByClassName("b_top"))===null||rf===void 0?void 0:rf.length)>0?_d.getElementsByClassName("b_top")[0]:null,it=!r?!1:r.getElementsByClassName("b_wpt_ch").length>0||r.getElementsByClassName("qna-sydney").length>0,yf=_ge("b_header"),y&&yf&&sj_b.insertBefore(y,yf),t=_d.createElement("div"),t===null||t===void 0?void 0:t.setAttribute("slot","firstAnswer"),t===null||t===void 0?void 0:t.setAttribute("id","sydFirstAnswer"),t.style.maxWidth="648px",SydFSCHelper.setConfigs(n),SydFSCHelper.setEventListeners(),SydFSCHelper.setSydFSCEligibleState(!0),u=CIB.insertAt(y),SydFSCHelper.setColorScheme(),bt?SydWelcomeScreen===null||SydWelcomeScreen===void 0?void 0:SydWelcomeScreen.setContent(u):kt&&(SydneyChatFRE===null||SydneyChatFRE===void 0?void 0:SydneyChatFRE.setContent(u)),gf=SydFSCHelper.getConfigOrDefault((uf=_w._sydConvConfig)===null||uf===void 0?void 0:uf.isCompliantSydneyEndpointEnabled,!1),gf&&MsbSydneyHelper.addTenantLogoToHeader(),ne=SydFSCHelper.getConfigOrDefault((ff=_w._sydConvConfig)===null||ff===void 0?void 0:ff.useAccountLinkingForConversationLimitUpsell,!1),ne&&(CIB.config.bing.signIn.query.action="acclink",CIB.config.bing.signIn.query.crea="MY04B",CIB.config.bing.signIn.query.pn="AccountLinking_Chat",CIB.config.bing.signIn.query.publ="BingIP"),u.setAttribute("alignment","left"),fe&&CIB.config.sydney.request.optionsSets.push("dlbing"),df&&CIB.config.sydney.request.optionsSets.push(df),ii)SydFSCHelper.lastQuery=SydFSCHelper.getQuery().toLowerCase().trim();else{CIB.config.greeting.shouldSendBotGreeting=SydFSCHelper.shouldForceSendBotGreeting;ai||(sj_evt.bind("ajax.unload",function(){SydFSCHelper.shouldResetBotGreeting=!1}),sj_evt.bind("ajax.load",function(){SydFSCHelper.shouldResetBotGreeting=!0}));CIB.onConversationRequestStateChange(function(n){n||CIB.config.greeting.shouldSendBotGreeting||!SydFSCHelper.shouldResetBotGreeting||(CIB.config.greeting.shouldSendBotGreeting=!0)})}te=SydFSCHelper.getConfigOrDefault((ef=_w._sydConvConfig)===null||ef===void 0?void 0:ef.disResetTT,!1);te&&(pf=(hf=(sf=u===null||u===void 0?void 0:u.shadowRoot)===null||sf===void 0?void 0:sf.querySelector("cib-action-bar"))===null||hf===void 0?void 0:hf.shadowRoot,pf&&(f=sj_ce("style"),f.textContent="\n                    cib-tooltip {\n                        display: none !important;\n                    }\n                ",pf.appendChild(f)));SydFSCHelper.setTestMocks();ri&&(ie=new URLSearchParams(_w.location.search),wf=ie.get("convid"),wf&&bu(wf));i=(cf=_d.querySelector("cib-serp"))===null||cf===void 0?void 0:cf.shadowRoot;p=i===null||i===void 0?void 0:i.querySelector("cib-conversation");p&&p.shadowRoot&&(h=p.shadowRoot.querySelector(".scroller"),f=sj_ce("style"),ue&&(f.textContent="\n                cib-notification-container {\n                    display: none;\n                }\n            "),p.shadowRoot.appendChild(f));ee&&(bf=(af=(lf=i===null||i===void 0?void 0:i.querySelector("cib-action-bar"))===null||lf===void 0?void 0:lf.shadowRoot)===null||af===void 0?void 0:af.querySelector(".autosuggest-text"),bf&&(bf.style.display="none"));kf="ontouchstart"in window||!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0;re=l&&(pi||wi||ClientObserver.getBrowserWidth()<780);kf&&Log.Log("ClientInst","Codex","TouchD");o||si||re||kf&&ci||(sj_be(_w,"mousewheel",ur),sj_be(_w,"touchstart",fr),sj_be(_w,"touchmove",er),sj_be(_w,"touchend",or),li&&(w=(vf=_d.querySelector("cib-serp"))===null||vf===void 0?void 0:vf.shadowRoot.querySelector("cib-side-panel"),w&&sj_be(w,"mouseenter",cu),w&&sj_be(w,"mouseleave",lu)),l&&(sj_be(_w,"keydown",sr),sj_be(_w,"resize",hr)));SydFSCHelper.triggerShareFlow();ir();sj_evt.bind("ajax.load",ir);s&&(SydFSCHelper.setupHistory(),SydFSCHelper.checkInitialState());gr();o&&pu();SydFSCHelper.triggerClarity();CIB.onResetConversation(function(){SydFSCHelper.shouldMove1TAnswers(b,c)&&rr()});CIB.onModeChanged(function(){sj_evt.fire("onModeChanged")});if(CIB.onMobileUpsellPopupShown)CIB.onMobileUpsellPopupShown(function(){var n={convId:CIB.manager.conversation.id,responseTone:CIB.responseTone};SydFSCHelper.SydLog("SystemEvent","MobileUpsell","MobileUpsellPopupShown",n);SydFSCHelper.createRequest("sydchat/writeConvInfo",JSON.stringify(n))});vi&&SydFSCHelper.processCachedResponseUsingCIB(JSON.parse(yi));di&&SydFSCHelper.updateChatBackgroundWidth();gi&&SydFSCHelper.hideSignInUpsellFor3P()}}function kr(){var n=_ge("b_content");sb_st(function(){n&&Lib.CssClass.remove(n,"b_showconv")},0)}function ir(){sj_evt.bind("hideSydFSC",function(n){var l,t,i,y,u,f,r,h;if(!ut){if(ut=!0,Log.Log("ClientInst","Codex","LeaveConversationMode"),e||Lib.CssClass.remove(sj_b,g),l=_ge("sb_form"),l&&Lib.CssClass.contains(l,"hassbi")&&Lib.CssClass.remove(l,"hassbi"),CIB.hideConversation(),e||o||(Lib.CssClass.add(_d.documentElement,"b_delayOvflw"),SydFSCHelper.shouldMove1TAnswers(b,c)&&rr(),t=_ge("b-scopeListItem-web"),t&&t.children.length>0&&(t.parentElement.removeAttribute("role"),t.children[0].setAttribute("aria-current","page"),t.children[0].removeAttribute("aria-selected"),t.children[0].removeAttribute("role"),Lib.CssClass.add(t,"b_active"),_ge("b_skip_to_content").setAttribute("tabindex","0")),i=_ge("b-scopeListItem-conv"),i&&i.children.length>0&&(i.children[0].removeAttribute("role"),i.children[0].removeAttribute("aria-selected"),i.children[0].setAttribute("aria-current","false"),Lib.CssClass.remove(i,"b_active"))),_G[SydFSCHelper.SYD_PREV_MODE]!=_G[SydFSCHelper.SYD_MODE]&&(_G[SydFSCHelper.SYD_PREV_MODE]=_G[SydFSCHelper.SYD_MODE],s&&(y=n&&n.length>1?n[1]:!1,y||SydFSCHelper.pushSydHistory(!1))),tt&&SydFSCHelper.updateConvFlagInURL(!1),_G[SydFSCHelper.SYD_MODE]="serp",ft){if(u=_ge("b_pole"),!u){for(u=sj_ce("div","b_pole"),f=_d.querySelector("main"),r=_ge("b_results");r&&f&&r.parentElement!=f;)r=r.parentElement;f&&r&&f.insertBefore(u,r)}SydFSCHelper.addCarousel(u)}else if(ni&&(h=CIB.vm.conversation.model.messages.filter(function(n){return n.type==="meta"&&n.text!="Generating answers for you..."||n.type==="text"&&n.author==="user"}),h&&h.length>0)){var a=h[h.length-1].text.split("`"),v=a.length==1?a[0]:a.length==3?a[1]:"",p=_ge("sb_form_go"),w=_ge("sb_form_q");_w.sj_isAjax&&v&&w.value.toLowerCase()!=v.toLowerCase()&&p&&(w.value=v,SydFSCHelper.lastQuery=v,p.click())}ut=!1}});sb_st(function(){sj_evt.bind("showSydFSC",su,!0)},0);nr&&sj_evt.bind("sydFSCLoaded",kr,!0);sj_evt.bind("onModeChanged",function(){});sj_evt.fire("convInit:done")}function dr(){var n;r=((n=_d.getElementsByClassName("b_top"))===null||n===void 0?void 0:n.length)>0?_d.getElementsByClassName("b_top")[0]:null;wt=sj_b.querySelector("#b_sydTigerCont")!=null;it=!!r&&r.querySelector("#sydwrap_wrapper")!=null;k&&(i=sj_b.querySelector("#sydwrap_wrapper #b_syd_sm_chat .b_wpt_chat"),i&&(Lib.CssClass.add(i,dt),fi=i.querySelector(".b_wpt_creator_content")!=null))}function gr(){var n=_ge("id_hbfo");sj_be(n,"click",function(n){var r=n.target,t,i;_G[SydFSCHelper.SYD_MODE]=="conversation"&&r&&(t=nu(r),t&&t.target!="_blank"&&(i="",t.href.indexOf("/profile/")>=0?i="profile":t.href.indexOf("/account/")>=0&&(i="account"),SydFSCHelper.LogIntEvent("ConversationViewExit","Conversation",{source:"ClickMenu",target:i})))})}function nu(n){while(n!=null){if(n.tagName=="A"&&Lib.CssClass.contains(n,"hb_section"))return n;n=n.parentElement}return null}function ht(n,t,i){i===void 0&&(i=!1);t&&n&&(i?n.prepend(t):n.appendChild(t))}function tu(n){var u,f,e,o,s,h;if(!at){ht(_ge("b_sydtoporpole"),n);return}var l=_d.querySelector("cib-serp"),i=(f=(u=_d.querySelector("cib-serp"))===null||u===void 0?void 0:u.shadowRoot)===null||f===void 0?void 0:f.querySelector("cib-conversation"),r=(o=(e=i===null||i===void 0?void 0:i.shadowRoot)===null||e===void 0?void 0:e.querySelector(".scroller"))===null||o===void 0?void 0:o.querySelector(".main cib-welcome-container"),c=(h=(s=i===null||i===void 0?void 0:i.shadowRoot)===null||s===void 0?void 0:s.querySelector(".scroller"))===null||h===void 0?void 0:h.querySelector(".main");i===null||i===void 0?void 0:i.appendChild(a);r?r===null||r===void 0?void 0:r.after(v):c===null||c===void 0?void 0:c.prepend(v);t===null||t===void 0?void 0:t.appendChild(n);pt;ht(l,t);iu()}function iu(){ru();uu()}function ru(){var t=_d.querySelector("#sydFirstAnswer .b_wpt_chat"),n=_d.querySelector("#sydFirstAnswer .b_wpt_chat .b_wpt_chat_inner");t&&n&&(t.querySelector("b_wpt_chat_inner > .b_sideBleed")&&(n.style.padding="0 20px 5px 20px"),t.querySelector(".b_wpt_chat_inner > .wtr_core.b_sideBleed, .b_wpt_chat_inner > .b_sideBleed #lMapContainer, .b_wpt_chat_inner > .ji_container, .b_wpt_chat_inner > .b_sideBleed #placeAnswer, .b_wpt_chat_inner > .b_sideBleed .ckt_main, .b_wpt_chat_inner > .b_sideBleed .mit_ans, .b_wpt_chat_inner > .jobsAnswerContainer, .b_wpt_chat_inner > div .sa_main")&&(n.style.padding="unset"),n.querySelector(".b_wpt_creator")&&(n.style.padding="0px"),n.querySelector(".b_wpt_insights")&&(n.style.paddingTop="0px",n.style.paddingBottom="0px"))}function uu(){var n=_d.querySelector("#sydFirstAnswer .b_wpt_chat");n&&n.querySelector(".b_wpt_creator")&&(n.style.boxShadow="unset")}function fu(){if(dr(),k){if(!i||ei&&fi)return;(c||it&&!wt)&&sb_st(function(){tu(i)},pr)}}function rr(){if(k){if(!i)return;var n=sj_b.querySelector("#sydwrap_wrapper #b_syd_sm_chat");n&&!n.contains(i)&&(Lib.CssClass.remove(i,dt),ht(n,i,!0))}}function eu(){var n=new URLSearchParams(_w.location.search),t=n.get("sendquery");return t==="1"}function ou(){var n=_ge("conv-css-link");n&&!n.classList.contains("css-conv-added")&&(n.setAttribute("rel","stylesheet"),n.setAttribute("class","css-conv-added"))}function su(n){var v,y,p,w,k,h,l,a,u,t,i,r,f,ut;if(!rt){rt=!0;SydFSCHelper.updateResponseToneAfterSerp();CIB.config.features.enableAds=!0;ui&&(k=CIB.config.sydney.request.optionsSets.indexOf("nocacheread"),k>=0&&CIB.config.sydney.request.optionsSets.splice(k,1));bi&&ou();h=_ge("b_header");h&&Lib.CssClass.contains(h,ct)&&(Lib.CssClass.remove(h,ct),SydFSCHelper.LogIntEvent("ConversationViewEnter","Scope",{source:"ShowConv"}));ft&&SydFSCHelper.removeQueries();l=n&&n.length>1?n[1]:null;a=n&&n.length>2?n[2]:null;c=n&&n.length>3?n[3]==yr:!1;var d=n&&n.length>5?n[5]:null,et=n&&n.length>6?n[6]:!1,nt=n&&n.length>7?n[7]:!1;if(e||o||(_w.scrollY>0&&_w.scrollTo(0,0),Lib.CssClass.add(_d.documentElement,"b_disOvflw"),Lib.CssClass.remove(_d.documentElement,"b_delayOvflw")),e||Lib.CssClass.add(sj_b,g),SydFSCHelper.shouldMove1TAnswers(b,c,l)&&fu(),l&&SydFSCHelper.sendFirstQuery(l.toLowerCase().trim(),a,d,nt||eu()),CIB.showConversation(),et&&(u=[],d&&u.push({author:"user",text:d}),a&&u.push({author:"bot",text:a}),yt&&u.length!=0&&CIB.registerContext(u),CIB.toggleSpeechEnabled(),CIB.triggerMic()),!e&&!o&&(t=_ge("b-scopeListItem-web"),t&&t.children.length>0&&(t.parentElement.setAttribute("role","tablist"),t.children[0].setAttribute("aria-current","false"),t.children[0].setAttribute("aria-selected","false"),t.children[0].setAttribute("role","tab"),Lib.CssClass.remove(t,"b_active")),i=_ge("b-scopeListItem-conv"),i&&i.children.length>0&&(i.children[0].setAttribute("aria-current","page"),i.children[0].setAttribute("role","tab"),i.children[0].setAttribute("aria-selected","true"),Lib.CssClass.add(i,"b_active"),_ge("b_skip_to_content").setAttribute("tabindex","-1")),r=_d.querySelector(".b_sydConvMode"),f=(w=(p=(y=(v=r===null||r===void 0?void 0:r.querySelector("cib-serp"))===null||v===void 0?void 0:v.shadowRoot)===null||y===void 0?void 0:y.querySelector("cib-action-bar"))===null||p===void 0?void 0:p.shadowRoot)===null||w===void 0?void 0:w.querySelector(".input-container .text-input textarea"),f&&!nt&&f.focus(),r&&f&&nt)){sj_be(r,"keyup",it);function it(n){(n.code=="Tab"||n.keyCode==9||n.key=="Tab")&&f.focus();r.removeEventListener("keyup",it)}}_G[SydFSCHelper.SYD_PREV_MODE]!=_G[SydFSCHelper.SYD_MODE]&&(_G[SydFSCHelper.SYD_PREV_MODE]=_G[SydFSCHelper.SYD_MODE],s&&(ut=n&&n.length>4?n[4]:!1,ut||SydFSCHelper.pushSydHistory(!0)));tt&&SydFSCHelper.updateConvFlagInURL(!0);ki||hu();_G[SydFSCHelper.SYD_MODE]="conversation";rt=!1}}function hu(){var n=ClientObserver.getBrowserWidth(),t=ClientObserver.getBrowserHeight();SydFSCHelper.set2TQueryConfigs(n,t,oi)}function cu(){st=!0}function lu(){st=!1}function ur(n){var t=0;n||(n=window.event);n.wheelDelta?t=n.wheelDelta/60:n.detail&&(t=-n.detail/2);lr(t,nt)}function fr(n){et=n.changedTouches[0].clientY;d=n.touches&&n.touches.length>1?!0:!1}function er(n){var t=n.changedTouches[0].clientY-et;lr(t,vr,!0)}function or(n){f=0;y=!1;p=!1;et=0;d=n.touches&&n.touches.length!==0}function sr(){pi=!0;l&&(cr(),sj_ue(_w,"keydown",sr))}function hr(){wi=!0;l&&(cr(),sj_ue(_w,"resize",hr))}function cr(){sj_ue(_w,"mousewheel",ur);sj_ue(_w,"touchstart",fr);sj_ue(_w,"touchmove",er);sj_ue(_w,"touchend",or)}function au(){var n=_ge("b_sydConvCont");n&&Lib.CssClass.contains(document.body,"b_sydConvMode")&&Lib.CssClass.add(_ge("b_content"),"b_hide")}function vu(){var n=_ge("b_sydConvCont");n&&Lib.CssClass.contains(document.body,"b_sydConvMode")&&Lib.CssClass.remove(_ge("b_content"),"b_hide")}function lr(n,t,i){if(i===void 0&&(i=!1),!st){sb_ct(gt);y||(w=Lib.CssClass.contains(sj_b,g),p=w?yu():_w.scrollY==0);y=!0;p&&(f+=n);i||(gt=sb_st(function(){f=0;y=!1;p=!1},150));var r=!w&&f>lt&&_G[SydFSCHelper.SYD_MODE]!="conversation"&&!d,u=vt&&w&&f<-1*lt&&_G[SydFSCHelper.SYD_MODE]=="conversation"&&!hi&&!d;r?(Log.Log("ClientInst","Codex","ScrollToChat"),!ot&&f>t&&(SydFSCHelper.LogIntEvent("ConversationViewEnter","Scope",{source:"ScrollUp"}),SydFSCHelper.triggerSydFSCQueryWithContext())):u&&(Log.Log("ClientInst","Codex","ScrollOutChat"),!ot&&f<-1*t&&(SydFSCHelper.LogIntEvent("ConversationViewExit","Scope",{source:"ScrollDown",target:_G[SydFSCHelper.SYD_PREV_MODE]}),sj_evt.fire("hideSydFSC"),sb_st(function(){_w.scrollTo(0,0)},1)))}}function yu(){return!h?!1:Math.abs(h.scrollTop-(h.scrollHeight-h.offsetHeight))<1}function pu(){var t,i,r,e=_ge("b_sydOvrClose"),n,u,f;e&&sj_be(e,"click",function(){sj_evt.fire("hideSydFSC")});n=(r=(i=(t=_d.querySelector("#b_sydConvCont cib-serp"))===null||t===void 0?void 0:t.shadowRoot)===null||i===void 0?void 0:i.querySelector("cib-action-bar"))===null||r===void 0?void 0:r.shadowRoot;u=n===null||n===void 0?void 0:n.querySelector(".outside-left-container");u&&(u.style.display="none");ti&&n&&(f=sj_ce("style"),f.textContent="\n                .control.microphone {\n                    display: none;\n                }\n            ",n.appendChild(f))}function wu(n,t){var i,r;n===void 0&&(n=null);t===void 0&&(t=nt);r=(i=_w._sydPayWallConfig)===null||i===void 0?void 0:i.loadSydneyConvResWithPayWall;r?sj_evt.bind("waitlistUpdate:eligible",tr,!0):tr(n);nt=t}function bu(n){CIB.loadConversation(n);SydFSCHelper.lastQuery=SydFSCHelper.getQuery().toLowerCase().trim()}var g="b_sydConvMode",ct="b_sydShowConv",ar="b_sydConvCont",nt=10,lt=10,vr=100,at,vt,yt,s,tt,pt=!1,r,it,i=null,wt=!1,u,bt,kt,h,t,a,v,yr="SYDX_WRAPPER",c=!1,dt="b_sydxwrappedanswer",pr=1e3,rt=!1,ut=!1,f=0,gt,y=!1,p=!1,w=!1,wr=!1,b=!1,ni=!1,ft=!1,e=!1,o=!1,et,k=!1,ti=!1,ii=!1,ri=!1,br=!1,ui=!1,fi=!1,ei=!1,oi=!1,si=!1,hi=!1,l=!1,ci=!1,ot=!1,li=!1,st=!1,ai=!1,vi=!1,yi="",pi=!1,wi=!1,d=!1,bi,ki=!1,di=!1,gi=!1,nr=!1;(typeof sj_b=="undefined"||sj_b==null)&&(window.sj_b=document.body);n.initWithWaitlistUpdate=wu;sj_evt.fire("sydFSC.init");sj_be(_w,"beforeprint",au);sj_be(_w,"afterprint",vu)})(SydneyFullScreenConv||(SydneyFullScreenConv={}))