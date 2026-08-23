const profileData = {
    // ==================== 1. 基础个人信息 ====================
    name: "Vivi",
    title: "资深商务主持人 & 多维舞台演艺人",
    subtitle: "以声音表达品牌内涵 · 以专业掌控千人盛典 · 以多元演艺点亮舞台",
    avatar: "avatar.jpg", // 💡 换头像只需在这里改图片名字[cite: 1, 4]
    roleTitle: "资深商务司仪",
    domain: "imvivi.top",
    
    height: "175cm",
    weight: "60kg",
    eventsCount: "500+",
    satisfaction: "99.8%",
    
    phone: "15061930815",
    email: "vivi93MC@hotmail.com",

    // ==================== 2. 主持人概览介绍文案 ====================
    profileDesc: "深耕高端主持与演艺领域，具备175cm高挑九头身优雅台风。沉稳从容的控场气场与深厚的歌艺表演功底相结合，为每一场盛典注入独特艺术价值。",
    
    metrics: [
        { label: "身高 Height", value: "175cm" },
        { label: "体重 Weight", value: "60kg" },
        { label: "主持场次 Events", value: "500+" },
        { label: "满意度 Satisfaction", value: "99.8%" }
    ],

    highlights: [
        { title: "典雅台风与强劲气场 Elegant Presence", desc: "175cm身高搭配优雅身姿，声音圆润大气，轻松把控千人盛典" },
        { title: "声艺兼备多维演艺 Versatile Vocal Talent", desc: "精通专业主持、深情歌唱与仪式演艺，可承接特邀演唱与表演环节" },
        { title: "敏捷应变控场 Masterful Control", desc: "极强突发状况处理与气氛调控能力，确保盛典流程零瑕疵推进" },
        { title: "高品质主持文案 Custom Scripting", desc: "精准理解品牌调性，定制撰写高雅流畅的主持串词与嘉宾访谈提纲" }
    ],

    // ==================== 3. 多元演艺特长 ====================
    talents: [
        {
            title: "深耕商务主持",
            enTitle: "EXECUTIVE & BUSINESS MODERATION",
            desc: "擅长汽车新品发布、高端政企论坛、颁奖盛典与品牌晚宴。庄重得体而不失灵动，精准传达品牌核心价值，营造高端奢华的现场氛围。"
        },
        {
            id: "case-vocal",
            title: "歌艺表演特长",
            enTitle: "VOCAL PERFORMANCE & SINGING",
            desc: "具备专业声乐演唱实力，音色优美富有感染力。可在主持之余担当盛典开场演唱、压轴献唱或主题演出，为活动带来出彩的视听高潮。"
        },
        {
            id: "case-wedding",
            title: "浪漫婚礼主持",
            enTitle: "WEDDING CEREMONY HOSTING",
            desc: "精通高雅浪漫的婚礼仪式主持，温情优雅的控场风格与真挚情感表达，注重仪式感与氛围营造，为新人打造梦幻难忘的高品质婚礼盛典。"
        }
    ],

    // ==================== 4. 活动实况案例数据库 ====================
    cases: [
        {
            id: "case-auto",
            tag: "AUTOMOTIVE LAUNCH · HOSTESS FOCUS",
            title: "奥迪汽车品牌发布与鉴赏会",
            image: "event1.jpg",
            desc: "一身优雅白色礼服亮相奥迪品牌发布现场。以纯正流利的主持表达与高端利落的形象，完美诠释国际豪华汽车品牌的科技感与高贵气质。",
            features: [
                "精准把握产品亮点与车企品牌内涵 Brand Vision",
                "掌控科技发布会高质感节奏 Professional Pace"
            ],
            viewType: "host"
        },
        {
            tag: "AUTOMOTIVE LAUNCH · SCENE OVERVIEW",
            title: "奥迪汽车品牌发布与鉴赏会",
            image: "event1现场.jpg",
            desc: "高端大气的高档商场发布会全景现场。展车与舞台交相辉映，人气爆棚，全方位展现强大的活动统筹与现场互动热度。",
            features: [
                "商场高人气全景掌控与热烈氛围调动",
                "与高管嘉宾及车主现场流畅互动 Guest Engagement"
            ],
            viewType: "scene"
        },
        {
            tag: "OPENING CEREMONY · HOSTESS FOCUS",
            title: "企业盛典与开业剪彩仪式",
            image: "event2.jpg",
            desc: "身着香槟金色高定礼服气场全开，搭档男主持默契配合。全流程展现极其从容自信的台风与盛典感染力。",
            features: [
                "双主持搭档默契控场，提调盛典高潮 Duo-Host Synergy",
                "庄重得体的仪式感引导与发言把控"
            ],
            viewType: "host"
        },
        {
            tag: "OPENING CEREMONY · SCENE OVERVIEW",
            title: "企业盛典与开业剪彩仪式",
            image: "event2现场.jpg",
            desc: "宏大喜庆的户外开业盛典现场。红毯、舞狮、整齐就座的嘉宾与热烈隆重的仪式氛围相得益彰。",
            features: [
                "驾驭千人户外盛典宏大欢庆气氛 Festive Atmosphere",
                "大型剪彩与锣鼓舞狮流程完美衔接"
            ],
            viewType: "scene"
        },
        {
            id: "case-gala",
            tag: "GALA DINNER · HOSTESS FOCUS",
            title: "国际大酒店圣诞主题盛宴",
            image: "event3.jpg",
            desc: "主持五星级国际大酒店高端圣诞晚宴。以极其亲和温暖的姿态深入台前，与小朋友及现场嘉宾欢快互动。",
            features: [
                "极强的舞台亲和力与现场调动能力 Stage Affinity",
                "抽奖互动与环节衔接自然流畅 Interactive Raffles"
            ],
            viewType: "host"
        },
        {
            tag: "GALA DINNER · SCENE OVERVIEW",
            title: "国际大酒店圣诞主题盛宴",
            image: "event3现场.jpg",
            desc: "五星级酒店宴会厅内温馨高雅的节日布景。精致的晚宴长桌与圣诞装饰，完美营造出尊贵欢快的节日氛围。",
            features: [
                "营造温馨高雅的五星级节日尊享体验 Luxury Hospitality",
                "宴会空间布置与全场欢庆节奏完美融合"
            ],
            viewType: "scene"
        },
        {
            id: "case-talk",
            tag: "GOVERNMENT & TRAINING · HOSTESS FOCUS",
            title: "政企培训与专题研讨会议",
            image: "event4.jpg",
            desc: "知性干练主持商务会议与专题培训，如常州市商务局主办的直播电商人才培育工程，展现专业严谨的学术与政企风范。",
            features: [
                "熟练掌握政企商务会议流程与学术研讨气氛",
                "知性干练的表达与专业控场风格"
            ],
            viewType: "host"
        },
        {
            tag: "GOVERNMENT & TRAINING · SCENE OVERVIEW",
            title: "政企培训与专题研讨会议",
            image: "event4现场.jpg",
            desc: "座无虚席的室内会议大厅全景。参会代表专注聆听，大型蓝底投影与会务布置呈现出严谨高规格的学术研讨氛围。",
            features: [
                "高规格室内政企培训会议的全流程把控",
                "稳重得体的会务节奏与秩序维护"
            ],
            viewType: "scene"
        },
        {
            id: "case-cultural",
            tag: "CULTURAL TOURISM · HOSTESS FOCUS",
            title: "文旅品牌节庆与亲子互动活动",
            image: "event5.jpg",
            desc: "完美驾驭“童心未泯·粽情守护”等大型户外文旅节日活动。优雅亲和的台风，让传统节庆充满欢声笑语与温情。",
            features: [
                "精准活跃文旅户外节庆的欢快热烈气氛",
                "亲和力十足的现场亲子互动表达"
            ],
            viewType: "host"
        },
        {
            tag: "CULTURAL TOURISM · SCENE OVERVIEW",
            title: "文旅品牌节庆与亲子互动活动",
            image: "event5现场.jpg",
            desc: "充满童趣与端午传统氛围的户外活动现场全景。孩子们积极参与趣味游戏，现场洋溢着温馨、欢乐与祥和的节日气息。",
            features: [
                "户外文旅与亲子互动嘉年华全景把控",
                "高情商应变与全场欢快节奏的完美调度"
            ],
            viewType: "scene"
        }
    ]
};
