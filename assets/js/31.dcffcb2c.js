(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{358:function(_,v,t){"use strict";t.r(v);var a=t(13),i=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"平台结合llm自动驾驶设计方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#平台结合llm自动驾驶设计方案"}},[_._v("#")]),_._v(" 平台结合LLM自动驾驶设计方案")]),_._v(" "),v("h2",{attrs:{id:"愿景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#愿景"}},[_._v("#")]),_._v(" 愿景")]),_._v(" "),v("ul",[v("li",[_._v("【操作】之前的平台手工驾驶的汽车，要变成智能化自动驾驶汽车")]),_._v(" "),v("li",[_._v("【成长】之前的平台是死的，要把它变成能自我成长和演化的")])]),_._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" 概述")]),_._v(" "),v("p",[_._v("这里指的基础平台指软件基础平台，包括K8S容器化、DevOps技术平台、微服务平台、数据治理平台、人工智能等")]),_._v(" "),v("p",[_._v("前期基础平台建设的情况，在这个过程中差不多经历有几个年头，也从这个过程中不断的接触和引入新的技术体系，形成一套标准平台体系，标准平台化产品。")]),_._v(" "),v("img",{attrs:{src:"/images/book_14.jpg"}}),_._v(" "),v("p",[_._v("针对的场景依然是中小型项目和团队。")]),_._v(" "),v("p",[_._v("下面是前期平台项目演化的过程：")]),_._v(" "),v("ul",[v("li",[_._v("一版(ACS)：提取出非需求性模块，提供基础的权限服务，类似ruoyi")]),_._v(" "),v("li",[_._v("二版(ACP_1.0)：形成集成数据治理和数字中台型模块，从产品化提供服务，类似于CDH")]),_._v(" "),v("li",[_._v("三版(ACP_2.0)：形成SaaS形态，中台化，形成标准型输出，思路类似于金蝶云苍穹")]),_._v(" "),v("li",[_._v("四版(AIP)：形成智能自动驾驶形态，自我演化和成长，形成新智能体平台(方向)")])]),_._v(" "),v("p",[_._v("同时在建设过程中，不断记录和完善，整理出一些建设经验参考，相关建设过程经验和参考材料电子书。")]),_._v(" "),v("h2",{attrs:{id:"重构设计的方向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重构设计的方向"}},[_._v("#")]),_._v(" 重构设计的方向")]),_._v(" "),v("p",[_._v("前期曾经结合大模型与实时计算服务进行结合，还有代码生成器结合，历史设计的原因始终无法达到最优效果。")]),_._v(" "),v("h3",{attrs:{id:"为什么要重构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要重构"}},[_._v("#")]),_._v(" 为什么要重构？")]),_._v(" "),v("p",[_._v("主要原因是发现原来的设计思维已经在大模型时代存在代差，不是落后一点，而是感受到不是一个维度的架构和方案设计理念，俗称降维打击 😃")]),_._v(" "),v("p",[_._v("所谓的重构设计，不仅仅是将前期的经验和产品设计融合在一起，而在针对的是未来3-5年行业市场的发展进行的规划，除了一些新框架版本的升级以外，更多是产品型的思路，还有与传统型平台产品的区别。")]),_._v(" "),v("p",[_._v("这个也是在前期落地过程中的一直想解决的痛点。")]),_._v(" "),v("p",[_._v("之前的平台手工驾驶的汽车，要变成智能化自动驾驶汽车\n基础平台的管理运维一直是无法规避的痛点，类似于一辆汽车，在建造出来的同时，还需要匹配的能力的人员、团队、资金、项目等才能开启，承认每一步都有文档材料，每一步过程都有技术支持，但当开出的那一刻，油费就在燃烧。比如：")]),_._v(" "),v("p",[_._v("实施过程需要运维工程师规划，对服务器配置要求、网络情况进行梳理；")]),_._v(" "),v("ul",[v("li",[_._v("前期使用需要技术架构师的培训和指导，人员技术培训；")]),_._v(" "),v("li",[_._v("中间问题处理需要高级工程师的指导，各种小组问题和会议；")]),_._v(" "),v("li",[_._v("…")])]),_._v(" "),v("p",[_._v("这里会产生很多的沟通成本，时间成本，管理成本等，往往是一个项目的组的成本，这个过程的投入和产出比，是否达到预期还需要看团队人员的基本情况。再比如后期的管理：")]),_._v(" "),v("ul",[v("li",[_._v("团队的投入：架构师团队，包括技术、数据、运维，基本上都是技术经理级别；")]),_._v(" "),v("li",[_._v("项目的支撑：太小的项目不需要，中等的项目在犹豫，大项目不差钱，会有一种鸡肋感；")]),_._v(" "),v("li",[_._v("平台的维护：几百上千份的材料，后期问题的处理还有收集，产品技术的沉淀等；")]),_._v(" "),v("li",[_._v("…")])]),_._v(" "),v("p",[_._v("在经历过问题，会思考遇到的这些平台是否能做引导或者自我处理。")]),_._v(" "),v("img",{attrs:{src:"/images/book_16.jpg"}}),_._v(" "),v("p",[_._v("这里引入平台自动驾驶的概念，在减少人工干预或者不需要人工的处理下，结合前期的实施经验，主要体现在几个方面：")]),_._v(" "),v("ul",[v("li",[_._v("部署实施：平台在不同的项目条件下做的最合理化的自动实施和运维管理；")]),_._v(" "),v("li",[_._v("运维管理：优化在最低级别的场景方面，保护平台提高基础平台的稳定性和可控性；")]),_._v(" "),v("li",[_._v("知识库：结合大模型Agent知识库给不同的人员岗位角色提供材料和引导建议；")]),_._v(" "),v("li",[_._v("AI团队：针对于不同的知识库虚拟出不同的大模型Agent岗位角色，形成多Agent团队；")]),_._v(" "),v("li",[_._v("问题处理：在运行出现问题的情况下给出问题的分析和合理化建议甚至修复；")]),_._v(" "),v("li",[_._v("自动化：每个节点结合自动化执行，并结合日志可视化监控预警；")]),_._v(" "),v("li",[_._v("…")])]),_._v(" "),v("p",[_._v("以下为Agent团队自定义模式:")]),_._v(" "),v("img",{attrs:{src:"/images/book_17.jpg"}}),_._v(" "),v("p",[_._v("通过不断的采集数据分析和数据管理上，对数据进行资产管理，再结合输入值，形成输出值。平台自动驾驶管理更加自动化和智能化，结合实践过程中的指导和管理的最佳实践。")]),_._v(" "),v("p",[_._v("之前的平台是死的，要把它变成能自我成长和演化的\n假如在没有人工介入的基础下，平台基本上就是一套软件或者代码，升级依赖的是产品经理或者维护人的经验水平来进行。但是行业是在发展的，商机是在不断出现的，\n行业市场竞争力也不断的变化，业务场景需求也是不断的在变化。知识库在使用过程中，也是在不断的知识库沉淀。")]),_._v(" "),v("img",{attrs:{src:"/images/book_18.jpg"}}),_._v(" "),v("p",[_._v("在这个过程中，是否可以结合大数据分析，使得平台变成自我演化。")]),_._v(" "),v("p",[_._v("这里并不能说做到完全的自我处理，同样需要人工的介入，但是整个自我演化流程需要走起来。这里对平台的演化，从几个角度来进行的处理，主要是：")]),_._v(" "),v("ul",[v("li",[_._v("自我感知能力：对运行的自我数据进行采集管理，除了本身的运行数据还包括互联网数据，第三方数据，数据沉淀到数据资产中；")]),_._v(" "),v("li",[_._v("自我学习沉淀：在数据采集过程中，对于有作用的数据进行数据资产的管理和沉淀，形成一套针对性的知识库；")]),_._v(" "),v("li",[_._v("自我决策执行：根据采集到的数据和设定的规则，自主做出决策并执行相应的操作，可以极大地提高平台的效率和响应速度；")]),_._v(" "),v("li",[_._v("服务自我添加：在运行过程中能够自动检测到新的服务需求，并动态添加相应的服务模块或功能，快速响应新的业务需求和变化；")]),_._v(" "),v("li",[_._v("文档自我输出：具备文档自我输出的能力，即能够自动生成和更新相关文档、报告等资料。")])]),_._v(" "),v("p",[_._v("在这个过程中，我们依然无法做到多强大的能力，依然需要人工介入，但是介入的过程和节点是不一样的，由原来的主动变成被动形式去完成这个工作，形成一套自己的管理运作方式。")]),_._v(" "),v("img",{attrs:{src:"/images/book_19.jpg"}}),_._v(" "),v("p",[_._v("这里主要集成匹配的服务套件如下:")]),_._v(" "),v("ul",[v("li",[_._v("数据治理套件：数据治理体系，包括采集、清理、任务编排、数据资产沉淀等；")]),_._v(" "),v("li",[_._v("技术研发套件：技术规范、代码生成和服务沉淀，服务角色资产的管理；")]),_._v(" "),v("li",[_._v("大模型Agent套件：包括逻辑推理、agent角色设定和知识库的结合，AI团队的设定和管理优化等；")]),_._v(" "),v("li",[_._v("自动化编排套件：设置规则管理，结合自定义的数据资产接口进行自动化操作；")]),_._v(" "),v("li",[_._v("可视化监控套件：过程的可视化监控管理，预警管理还有全链路的监控管理；")]),_._v(" "),v("li",[_._v("...")])]),_._v(" "),v("p",[_._v("这些套件本身就是属于平台管理体系，以轻量型为主，这里就不再过多阐述，只是过程中不断的融合和调试，将整个成长和演化流程进行理顺。更多的类似于数据治理+自动化结合的思路，针对的场景不同，结合的结果也同样不同。")]),_._v(" "),v("h2",{attrs:{id:"业务和团队赋能模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#业务和团队赋能模式"}},[_._v("#")]),_._v(" 业务和团队赋能模式")]),_._v(" "),v("p",[_._v("进行团队赋能，团队私有化模式，形成中小团队业务壁垒和新能力。团队赋能模式旨在提升团队的整体素质和执行效率，使团队能够更好地适应市场变化和业务需求。以确保团队能够在市场中的角色地位，自我优势等，形成高效协作、创新思维和持续学习。")]),_._v(" "),v("p",[_._v("在平台化过程中输出的能力，包括如下:")]),_._v(" "),v("ul",[v("li",[_._v("提供标准化接口和定制化方案；")]),_._v(" "),v("li",[_._v("提供团队基础研发能力、数据治理能力、大模型Agent能力等；")]),_._v(" "),v("li",[_._v("业务服务结合数字化创新解决方案；")]),_._v(" "),v("li",[_._v("提供技术支持和项目解决方案支持；")]),_._v(" "),v("li",[_._v("提供过程技术指导和落地方案；")]),_._v(" "),v("li",[_._v("…")])]),_._v(" "),v("p",[_._v("进行业务赋能，团队智能体模型管理，结合业务形成最新的业务模式。业务赋能模式旨在提升企业的核心业务能力和竞争力，使团队能够在市场竞争中脱颖而出。")]),_._v(" "),v("img",{attrs:{src:"/images/book_20.jpg"}}),_._v(" "),v("p",[_._v("这可能包括优化业务流程、引入新技术、开拓新市场等方面的工作，以实现业务的持续增长和发展。")]),_._v(" "),v("p",[_._v("通过团队智能体模型管理，结合业务形成最新的业务模式，企业可以更好地适应市场需求，提高运营效率和创新能力。")]),_._v(" "),v("h2",{attrs:{id:"其它"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[_._v("#")]),_._v(" 其它")]),_._v(" "),v("p",[_._v("基础能力的建设类似于基建，在新的高速，能源模式下达到快速通罗马的效果，在这个过程中，结合自身的业务特点，能力等形成自己的产品线。基础平台的建设也是类似，规避掉基础为零的东西。")]),_._v(" "),v("p",[_._v("新平台产品架构设计是一个高度自动化、智能化和自我演化的平台产品方向。这不仅能够提高运维效率，还能为团队和业务提供强大的支持，快速跟进新一代的技术，为团队和业务线赋能，这个是基础平台的价值意义点。")])])}),[],!1,null,null,null);v.default=i.exports}}]);