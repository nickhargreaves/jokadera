
    var chart_config = {
        chart: {
            container: "#collapsable-example",
            rootOrientation:  'WEST',
            animateOnInit: true,
            
            node: {
                collapsable: true,
                HTMLclass: 'nodeExample1'
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text:{
                name: "Jim & Suzanna Adera",
                title: ""
            },
            collapsed: true,
            image: "img/jim_sue.png",
            children: [
                {
                    text:{
                        name: "Sylvan",
                        title: "1st born"
                    },
                    image: "img/silvan.jpeg",
                },
                {
                    text:{
                        name: "Mary",
                        title: "2nd born"
                    },
                    image: "img/default.png",
                },
                {
                    text:{
                        name: "Fransisca",
                        title: "3rd born"
                    },
                    image: "img/default.png",
                },
                {
                    text:{
                        name: "Julita",
                        title: "4th born"
                    },
                    image: "img/julita.jpeg",
                },
                {
                    text:{
                        name: "Charles",
                        title: "5th born"
                    },
                    image: "img/charles.jpeg",
                },
                {
                    text:{
                        name: "Esther",
                        title: "6th born"
                    },
                    image: "img/esther.jpeg",
                },
                {
                    text:{
                        name: "Gaudensia",
                        title: "7th born"
                    },
                    image: "img/default.png",
                },
                {
                    text:{
                        name: "Rose",
                        title: "8th born"
                    },
                    image: "img/rose.jpeg",
                    collapsed: true,
                    children: [
                           {
                            text:{
                                name: "Nick",
                                title: "1st born"
                            },
                            image: "img/nick.jpeg",
                            children: [
                                {
                                    text:{
                                        name: "Eliana",
                                        title: "1st born"
                                    },
                                    image: "img/default.png",
                                },
                                {
                                    text:{
                                        name: "Nila",
                                        title: "2nd born"
                                    },
                                    image: "img/default.png",
                                },
                            ]
                        },
                        {
                            text:{
                                name: "Lillian",
                                title: "2nd born"
                            },
                            image: "img/lillian.jpeg",
                        },
                        {
                            text:{
                                name: "Felix",
                                title: "3rd born"
                            },
                            image: "img/felix.jpeg",
                        },
                        {
                            text:{
                                name: "Maxwell",
                                title: "4th born"
                            },
                            image: "img/maxwell.jpeg",
                        },
                        {
                            text:{
                                name: "Marrianne",
                                title: "last born"
                            },
                            image: "img/marriane.jpeg",
                        },
                    ]

                }
            ]
        }
    };