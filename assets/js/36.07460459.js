(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{368:function(t,v,_){"use strict";_.r(v);var a=_(13),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"运维自动化agent角色-仿k8sgpt设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运维自动化agent角色-仿k8sgpt设计"}},[t._v("#")]),t._v(" 运维自动化Agent角色:仿k8sGPT设计")]),t._v(" "),v("p",[t._v("软件工程师罗小东，多年架构和平台设计经验，目前在研究平台与新技术结合中。")]),t._v(" "),v("h2",{attrs:{id:"回顾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),v("p",[t._v("书接上文。")]),t._v(" "),v("p",[t._v("这些的设计都是在有一个基础平台之上，这里并不会过多阐述平台型的建设或者中台型的内容，前期在AIGC交互组件设计上，已经集成了交互的模块，形成的管理模块已经集成到到几个点:")]),t._v(" "),v("ul",[v("li",[t._v("自定义Agent的聊天窗口和多频道设计")]),t._v(" "),v("li",[t._v("Agent角色的流程化插件化配置，可控化")]),t._v(" "),v("li",[t._v("Prompt的定义和分离和结果补偿机制")])]),t._v(" "),v("p",[t._v("这些交互组件基本上确保了角色之间的交互达到一个比较稳定的状态和结果集可视化的状态，当然，还有一定的优化空间，但并不影响进入下一步Agent角色插件的自定义。")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("参考集成类k8sGPT的原因只是做一个插件角色的示例，原来的k8sGPT集成较为简单，这里参考设计一个类似的Agent角色，一方面是熟悉了解Agent插件的自定义方式，另一个是方面是与实际的工作中结合，体现出价值性。\n这只是一个单Agent角色的角色定义，当中包含多个Prompt的配置和数据接口的提取，多Agent、闭环Agent和复杂Agent暂时不属于本章节内容。")]),t._v(" "),v("p",[t._v("Agent角色的定义从设计维度进行阐述，如下:")]),t._v(" "),v("ul",[v("li",[t._v("角色设计: 定义Agent角色和作用，解决场景，Prompt等。")]),t._v(" "),v("li",[t._v("数据来源: Agent数据来源的处理，比如API、知识库等。")]),t._v(" "),v("li",[t._v("交互模式: 定义角色的交互方式，数据返回的格式等。")]),t._v(" "),v("li",[t._v("集成平台: 比如集成预警还有生成相关解决方案文档等。")])]),t._v(" "),v("p",[t._v("前期也遇到比较多的设计思路，插件化每个角色都可以定义比较个性化和较强的交互能力，上面是我们在这个过程中的一些设计经验，每个架构师有自己的思维，我有我思。")]),t._v(" "),v("h2",{attrs:{id:"agent角色定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#agent角色定义"}},[t._v("#")]),t._v(" Agent角色定义")]),t._v(" "),v("p",[t._v("这里角色的定义根据自己工作的性质和内容定义，包括一些流程配置(这里是liteflow框架，并无界面)，角色多跟少由团队自己团队的情况设计，一般来说，都会有比较强的个性化要求，这里设计目标重点还是形成工作闭环或者减轻\n一定的重复工作，形成团队和企业自己的Agent能力沉淀，解放上层人力进而可以思考更有价值的事情。")]),t._v(" "),v("h3",{attrs:{id:"角色设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#角色设计"}},[t._v("#")]),t._v(" 角色设计")]),t._v(" "),v("blockquote",[v("p",[t._v("定义Agent角色和作用，解决场景，Prompt等。")])]),t._v(" "),v("p",[t._v("在这里设计了3个角色，同时注意并不是每个角色都跟LLM交互，理解成一个虚拟的员工或者能做事的角色即可，比如自动化也是一个角色，类似于ChatOps，角色定义如下:")]),t._v(" "),v("ul",[v("li",[t._v("K8S问题收集Agent: 主要用于收集K8S问题，与数据接口接口进行交互的，这个比较容易理解，只需要分析好问题就可以")]),t._v(" "),v("li",[t._v("K8S问题分析Agent: 针对获取到的问题分析出结果，然后给出合理的建议和处理脚本等，当然也可以结合知识库来处理，这个看怎么定义")]),t._v(" "),v("li",[t._v("问题报告生成Agent: 根据问题处理结果生成报告和每日或者每周运维报告")])]),t._v(" "),v("p",[t._v("暂时定义那么多个，当然你也可以定义一个发邮件的Agent，或者说管理的Agent来管理上面的Agent，这里为了确保结果和可控性，会由人工对结果和审核和校验。")]),t._v(" "),v("blockquote",[v("p",[t._v("补充Prompt定义图")])]),t._v(" "),v("p",[t._v("在定义好角色之后，再进一步的定义每个角色的Prompt，这里一样返回的是yaml格式方式，便于跟其它的平台进行交互。这里问题分析的Agent解决问题的思路来源于多种方面，比如自定义沉淀的知识库，\n使用机器学习获取到的分析结果等，会根据结果和沉淀，还有反馈机制，不断的演化形成更符合团队的处理结果，当然这里属于另一个范围，这里不做过多的阐述。")]),t._v(" "),v("p",[t._v("插件化的机制，可以不断的优化插件和Prompt形成最优化的输出。")]),t._v(" "),v("h3",{attrs:{id:"数据来源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据来源"}},[t._v("#")]),t._v(" 数据来源")]),t._v(" "),v("blockquote",[v("p",[t._v("Agent数据来源的处理，比如API、知识库等。")])]),t._v(" "),v("p",[t._v("数据来源的处理参考的是k8sGPT的Analyzer，这里是在原来的k8s管理平台进行的升级，添加了一个分析的模块，提供出api接口，便于插件使用，插件通过参数调用api来获取到结果参考，返回结果解析。")]),t._v(" "),v("p",[t._v("下面是Pod解析的相关代码，原来考虑使用LLM将golang直接转换成java的，但是效果并不是很明显，转换了一部分，然后进行人工改造，跟原来k8sGPT接口有一定的差别。")]),t._v(" "),v("blockquote",[v("p",[t._v("补充接口返回数据图")])]),t._v(" "),v("p",[t._v("为了做出交互，暂时接口数据做了一些简化。在插件节点定义的时候，通过http调用接口数据即可，以下是节点的定义。")]),t._v(" "),v("h3",{attrs:{id:"交互模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交互模式"}},[t._v("#")]),t._v(" 交互模式")]),t._v(" "),v("blockquote",[v("p",[t._v("定义角色的交互方式，数据返回的格式等。")])]),t._v(" "),v("p",[t._v("交互有一种，一个是Agent之间的交互，另一个是与人的交互。")]),t._v(" "),v("p",[t._v("Agent之间的交互依然是上文的内容是下文的输入，使用yaml来进一步规范的定义格式，如果异常会在Prompt组件进行补偿重试机制，也会有一定的定时监控通知机制。另一个是与人的交互，会相对比较简单，\n这里主要参考的是平时工作的模式，考虑是组建一个k8s排查运维的团队，将上面的Agent拉入，专门针对k8s问题运维排查处理的，方便后期agent的复用和其它团队的共享使用。")]),t._v(" "),v("p",[t._v("定义的k8s排查运维团队如下:")]),t._v(" "),v("blockquote",[v("p",[t._v("待补充团队图片")])]),t._v(" "),v("p",[t._v("可能后期工作过程中，还可能会缺少角色，不断的往上增加即可。下面是交互的情况还有多角色上下文的交互，界面还是简陋了些，后期还会进一步优化。")]),t._v(" "),v("h3",{attrs:{id:"集成平台"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集成平台"}},[t._v("#")]),t._v(" 集成平台")]),t._v(" "),v("blockquote",[v("p",[t._v("比如集成预警还有生成相关解决方案文档等。")])]),t._v(" "),v("p",[t._v("交互的yaml格式化，在集成平台上会相对比较容易，类似于开始的数据来源也是集成平台的一种方式，集成平台的主要目的是方便内部团队第三方IM或者通信，目标是做几个：")]),t._v(" "),v("ul",[v("li",[t._v("发送通知给钉钉,让群里直接看到看到word或者Excel结果，达到可评审的目的")]),t._v(" "),v("li",[t._v("每周或者每个时间段，给出问题的结果和每日的运维周报或者日报")]),t._v(" "),v("li",[t._v("抽取出重要问题事件，形成运维事件进一步的处理")]),t._v(" "),v("li",[t._v("......")])]),t._v(" "),v("p",[t._v("这个会比较个性化，针对于团队自定义的情况来处理。到这步结束之后，基本上整个Agent角色定义就形成一个阶段，提交插件的代码到基线，通过CICD会自动构建和更新插件，\n后期的调试和优化通过调整Prompt或者插件即可。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("在插件化和可控化的处理，完成上面的Agent角色与交互，会有比较大的想像空间，比如k8s可以，那SpringBoot程序是否也可以参考(数据通过脱敏组件处理)，只需要定义插件好可集成，在其它的场景下不断加入，形成新的工作模式。\n上面是集成简单的Agent的设计和方案，期望给一些同学参考，也期望有兴趣的同学可以一起讨论，分享经验。")]),t._v(" "),v("h2",{attrs:{id:"鸣谢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[t._v("#")]),t._v(" 鸣谢")]),t._v(" "),v("p",[t._v("这里的设计思路参考以下开源项目:")]),t._v(" "),v("ul",[v("li",[t._v("AgentGPT: 基于AutoGPT的可视化版，参考其交互UI")]),t._v(" "),v("li",[t._v("k8sGPT: GPT结合k8s运维工具，参考其处理思路")]),t._v(" "),v("li",[t._v("Langchain:，LLM框架,参考其架构思想")]),t._v(" "),v("li",[t._v("Jenkins: CICD工具，参考其插件思路")])])])}),[],!1,null,null,null);v.default=e.exports}}]);