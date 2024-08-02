(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{321:function(v,_,t){"use strict";t.r(_);var a=t(8),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"运维服务结合llm产品升级设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运维服务结合llm产品升级设计"}},[v._v("#")]),v._v(" 运维服务结合LLM产品升级设计")]),v._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),_("p",[v._v("针对的背景是中小项目运维管理，前期的产品研发上在运维体系上，已集成自动化操作和可视化监控，比如k8s/promethes/jenkins/ansible等自动化工具，并结合设计出对应的运维套件，包括流程化和数据治理工具，devops/chatops体系等，结合开源的工单工具形成运维的标准化管理和流程。")]),v._v(" "),_("img",{attrs:{src:"/images/book_11.jpg"}}),v._v(" "),_("p",[v._v("在大模型的新技术的产出上，将进一步为运维提升，达到整体运维产品体系往上升一级的目标，以更为智能化，更贴近于人性化目标。")]),v._v(" "),_("p",[v._v("前期在开源平台产品运维阶段会遇到一些突出类的问题，比如:")]),v._v(" "),_("ul",[_("li",[v._v("系统问题的分析：缺少初步分析的结果，系统横向知识多，问题分析过分依赖经验和高工，分析深度不足，排查过程长。")]),v._v(" "),_("li",[v._v("数据和知识库归纳：工单和分析结果，问题场景和问题现场维护丢失，形成经验沉淀太多，查找困难，重复性问题出现等。")]),v._v(" "),_("li",[v._v("数据的分析报告：在全链路的监控下，分析的支撑繁琐，运维数据的治理和后期的总结分析依据，对人工依赖，运维数据治理不足；")]),v._v(" "),_("li",[v._v("处理报告结果分析：针对会议或者结果性报告输出内容较多，对报告性编写有一定要求，会议或者报告类输出问题依据说明有些情况说不清；")]),v._v(" "),_("li",[v._v("….")])]),v._v(" "),_("p",[v._v("注：这里不涉及项目资金和客户沟通层面，比如运维费用依据，只做辅助类设计。")]),v._v(" "),_("p",[v._v("总会有一种好像不难解决或者可以解决(可解决)，但过程就是不是特别顺的情况，在标准的执行上总会有一种可以有更优化的依赖工具自我感觉。在升级设计思路，从新技术结合的思路进行阐述:")]),v._v(" "),_("ul",[_("li",[v._v("运维Agent员工的设计和概念介入")]),v._v(" "),_("li",[v._v("结合数据分析的形成运维数据资产")]),v._v(" "),_("li",[v._v("结合大模型的数据分析报告输出")])]),v._v(" "),_("p",[v._v("以上与ChatOps的概念相类似，在交互和输出上将会更加的达到精细化的解决思路，以供相关人员的排查和处理。每个产品设计和架构方案思路不一，以供参考与交流，我有我思.")]),v._v(" "),_("h2",{attrs:{id:"设计思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[v._v("#")]),v._v(" 设计思路")]),v._v(" "),_("p",[v._v("设计是基于原有的开源平台产品上的进一步升级，从初步的探索和目前大模型的成熟来结合，结果会控制一定的发散性，初期以达到可用为目标。")]),v._v(" "),_("h3",{attrs:{id:"运维agent员工的设计和概念介入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运维agent员工的设计和概念介入"}},[v._v("#")]),v._v(" 运维Agent员工的设计和概念介入")]),v._v(" "),_("p",[v._v("将进一步的设计出智能体员工的概念，大模型Agent员工的介入，在特定阶段或者消耗时间阶段设计出处理角色，以切入运维工具和管理流程，形成初步的Agent运维团队，以解放部分人力思考分析过程。")]),v._v(" "),_("img",{attrs:{src:"/images/book_12.jpg"}}),v._v(" "),_("p",[v._v("这里设计的角色比如:")]),v._v(" "),_("ul",[_("li",[v._v("K8S分析工程师：分析k8s问题并得出初步的解决思路，包括执行命令，解决思路；")]),v._v(" "),_("li",[v._v("SpringBoot分析工程师：分析java应用异常并得出初步的配置方式，并给出对应建议；")]),v._v(" "),_("li",[v._v("报告分析工程师：分析问题结果，并结合处理内容，与当前模板结合，得到处理过程分析报告；")]),v._v(" "),_("li",[v._v("安全分析工程师：分析异常链接，然后得出相应的解决思路；")]),v._v(" "),_("li",[v._v("….")])]),v._v(" "),_("p",[v._v("参考: 结合的k8s运维的产品示例 我自定义k8s运维Agent插件:仿k8sGPT设计")]),v._v(" "),_("p",[v._v("这些Agent员工的设计会形成初级的运维团队，结合大模型的经验分析，知识库内容等得出初步结果给工程师，减少初步的排查及初级的问题处理，在沙箱环境进行验证。当然也可以结合工作流，但是带有操作风险，毕竟是生产，需要过一步人工。")]),v._v(" "),_("h3",{attrs:{id:"结合数据分析的形成运维数据资产"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结合数据分析的形成运维数据资产"}},[v._v("#")]),v._v(" 结合数据分析的形成运维数据资产")]),v._v(" "),_("p",[v._v("单纯的自动化管理体系还有可视化，并不能将整个运维过程闭环激活，它需要反馈和成长机制，以解决当前的问题和规避未来出现的可能性。运维结合大数据，会达到更优化的效果。")]),v._v(" "),_("p",[v._v("在自动化运维工具套件中，已经可以采集到全链路的过程数据，这些数据一般的系统难以承接，统一导入大数据套件进行管理，形成运维特定的数据资产，从而形成运维的知识库。")]),v._v(" "),_("img",{attrs:{src:"/images/book_13.jpg"}}),v._v(" "),_("p",[v._v("基于数据治理套件的实时、离线、清洗、分析等工具，将进一步的得到应用的生命状态，系统的健康状态，每个微服务，每个应用的健康评分，常见问题和后期开发的重点处理内容，形成数据的反馈闭环，从而在研发过程中进一步的完善规范，在DevOps流程中进一步的添加检测。")]),v._v(" "),_("p",[v._v("这些也是提供给Agent员工的数据接口来源。也可以结合业务数据一起，这里是平台性的运维，偏向的系统型数据，但流程管理是一致。便于在后期的管理中，包括商务沟通等形成一定的依据，还可以在处理过程中，处理后还原问题现场，这些都需要大数据套件的存储和治理。")]),v._v(" "),_("p",[v._v("如果有资源，同样也可以结合机器学习进行算子优化，这里不涉及机器学习内容。")]),v._v(" "),_("h3",{attrs:{id:"结合大模型的数据分析报告输出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结合大模型的数据分析报告输出"}},[v._v("#")]),v._v(" 结合大模型的数据分析报告输出")]),v._v(" "),_("p",[v._v("运维工单处理，问题解决方案和思路，沉淀方式形成知识库体系，而不同于传统知识库层面的是，结合大模型的知识库会更好的体验，大模型聊天机器人当前也比较普遍。")]),v._v(" "),_("p",[v._v("在前期的数据和Agent员工结合下，通过指定的模板分析，比如ChatPPT工具，形成统一的分析报告，形成会议的相关依据初始稿，再由工程师进一步的做加减法处理，比如：")]),v._v(" "),_("ul",[_("li",[v._v("系统运行的日报/周报/月报，异常处理，处理方式还有建议思路。")]),v._v(" "),_("li",[v._v("工单的处理结果报告分析，处理思路归纳归档，更完善的说明描述等。")]),v._v(" "),_("li",[v._v("结合知识库进行相关材料的编写，比如部署方案、资源配置等")]),v._v(" "),_("li",[v._v("需要根据具体情况进行的分析和处理，以确保运维工作的高效性和质量。")]),v._v(" "),_("li",[v._v("…..")])]),v._v(" "),_("p",[v._v("写报告过程就会发现，即使在特定的模板之下，初中级工程师在这块上偏向于短板，同时每个输出过程需要一定的工作量，还有过程QA/PM等审核，再出现在会议上，这个过程可以解决，但周期长短不一，沟通多，总有一种不是特别顺的感觉。也许分析内容未必达到要求，但已经相当于出了初稿，可以更快的投入到解决思路的讨论评审中。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("以上为在前期做平台产品基础上的进一步升级优化方案及思路，在运维工具的选型中，针对于中小型项目或者团队的比较多，前期通过多次的整合形成的devops/chatops/自动化标准及流程，在大模型的切入下，提升更好的思路和解决方案，当前已在结合验证，同时也是下一步产品优化的方向。")]),v._v(" "),_("p",[v._v("期望给一些同学参考，也期望有兴趣的同学可以一起讨论，分享经验。")])])}),[],!1,null,null,null);_.default=s.exports}}]);