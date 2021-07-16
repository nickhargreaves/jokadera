
    var chart_config = {
        chart: {
            container: "#collapsable-example",

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
                name: "Ron Blomquist",
                title: "Chief Information Security Officer"
            },
            collapsed: true,
            image: "img/default.png",
            children: [
                {
                    image: "img/default.png",
                    collapsed: true,
                    children: [
                        {
                            image: "img/default.png"
                        }
                    ]
                },
                {
                    image: "img/default.png",
                    childrenDropLevel: 1,
                    children: [
                        {
                            image: "img/default.png"
                        }
                    ]
                },
                {
                    pseudo: true,
                    children: [
                        {
                            image: "img/default.png"
                        },
                        {
                            image: "img/default.png"
                        }
                    ]
                }
            ]
        }
    };