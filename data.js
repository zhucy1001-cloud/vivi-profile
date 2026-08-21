const profileData = {
    // ==================== 1. 基础个人信息 ====================
    name: "Vivi",
    title: "资深商务主持人 & 多维舞台演艺人",
    subtitle: "以声音表达品牌内涵 · 以专业掌控千人盛典 · 以多元演艺点亮舞台",
    avatar: "avatar.jpg", // 💡 换头像只需在这里改图片名字
    
    height: "175cm",
    weight: "60kg",
    eventsCount: "500+",
    satisfaction: "99.8%",
    
    phone: "15061930815",
    email: "vivi93MC@hotmail.com",
    
    // ==================== 2. 活动实况案例数据库 ====================
    // 💡 以后想换活动照片、改标题或加减案例，永远只在这里维护！
    cases: [
        {
            id: "case-auto",
            tag: "AUTOMOTIVE & LUXURY BRAND LAUNCH",
            title: "奥迪汽车品牌发布与鉴赏会",
            image: "event1.jpg", // 💡 修改活动1的图片名字
            desc: "一身优雅白色礼服亮相奥迪品牌发布现场。以纯正流利的主持表达与高端利落的形象，完美诠释国际豪华汽车品牌的科技感与高贵气质。",
            features: [
                "精准把握产品亮点与车企品牌内涵 Brand Vision",
                "掌控科技发布会高质感节奏 Professional Pace",
                "与高管嘉宾及车主现场流畅互动 Guest Engagement"
            ]
        },
        {
            id: "",
            tag: "CORPORATE OPENING CEREMONY",
            title: "企业盛典与开业剪彩仪式",
            image: "event2.jpg", // 💡 修改活动2的图片名字
            desc: "身着香槟金色高定礼服气场全开，搭档男主持默契配合。从隆重的开幕致辞到剪彩仪式，全流程展现极其从容自信的台风与盛典感染力。",
            features: [
                "驾驭千人户外盛典热烈欢庆气氛 Festive Atmosphere",
                "双主持搭档控场，提调盛典高潮 Duo-Host Synergy",
                "庄重得体的仪式感引导与剪彩把控 Ceremonial Control"
            ]
        },
        {
            id: "",
            tag: "GALA DINNER & THEMED CELEBRATION",
            title: "国际大酒店圣诞主题盛宴",
            image: "event3.jpg", // 💡 修改活动3的图片名字
            desc: "主持五星级国际大酒店高端圣诞晚宴。以极其亲和温暖的姿态深入台前，与亲子家庭及现场嘉宾进行抽奖互动，调动全场欢快热烈的节日氛围。",
            features: [
                "极强的舞台亲和力与现场调动能力 Stage Affinity",
                "抽奖互动与环节衔接自然流畅 Interactive Raffles",
                "营造温馨高雅的节日尊享体验 Luxury Hospitality"
            ]
        },
        {
            id: "case-talk",
            tag: "GOVERNMENT & CULTURAL EVENTS",
            title: "政企培训与文旅品牌节日活动",
            image: "event4.jpg", // 💡 修改活动4的图片名字
            desc: "知性干练主持商务会议与专题培训，同时也能完美驾驭充满活力与亲和力的文旅与端午儿童节主题活动。",
            features: [
                "熟练掌握政企商务会议流程与学术研讨气氛",
                "展现主持人多变且灵活的控场风格"
            ]
        }
    ]
};
