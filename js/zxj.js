//均分分析-基准均分图表
function showReference(param) {

    var xAxis = param.xAxis;
    var yAxis = param.yAxis;
    var data = param.data;
    var data_max = param.data_max;
    var title = param.title;
    var serie = param.serie;
    console.log(xAxis)
    var heatChat = echarts.init(document.getElementById(param.id));
    option = {
        title: {
            //表名
            text: title,
            x: 'center',
            top: 15,
            textStyle: {
                fontWeight: 'normal'
            }
        },
        backgroundColor: '#fff',
        color: ["#4572A7", "#C35F5C", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#B5CA92"],
        xAxis: {
            data: xAxis,
            type: "category",
            position: "left",
            name: "基准均分:" + data_max,
            nameLocation: "middle",
            nameGap: '21',
            nameTextStyle: {
                color: "#0071b3"
            },
            axisLine: {
                lineStyle: {
                    color: '#f00'
                }
            },

            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
        },

        yAxis: {
            type: 'value',
            data: yAxis,
            axisLabel: {
                formatter: function(value) {
                    return value + data_max;
                },
                textStyle: {
                    color: '#333'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },

        },
        tooltip: {
            position: 'top',
            backgroundColor: "rgba(255, 255, 255, .7)",
            borderColor: "#4572A7",
            borderWidth: 2,
            textStyle: {
                color: '#333'
            },
            formatter: function(params) {
                return params.value[3] + '班: 均分：' + params.value[2] + " 极差:" + params.value[1] + ' 老师：' + params.value[4];
            }
        },
        series: serie

    };
    // 使用刚指定的配置项和数据显示图表。
    heatChat.setOption(option);
}

//各班各次考试均分排名图表
function showRanking(param) {
    var xAxis = param.xAxis;
    var yAxis = param.yAxis;
    var data = param.data;
    var titlename = param.titlename;
    var legend = param.legend;
    var data_max = param.data_max;
    var data_name = param.chart_name;
    var myChat = echarts.init(document.getElementById(param.id));
    var serie = param.serie;
    option = {
        backgroundColor: "#fff",
        color: ["#4572A7", "#C35F5C", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#B5CA92"],
        "title": {
            text: titlename,
            top: 15,
            textStyle: {
                fontWeight: 'normal'
            }
        },
        tooltip: {
            position: 'top',
            backgroundColor: "rgba(255, 255, 255, .7)",
            borderWidth: 2,
            textStyle: {
                color: '#333'
            },
            formatter: function(params) {
                return params.value[2] + '排名:' + params.value[1] + ' 老师:' + params.value[3];
            }
        },
        "grid": {
            "borderWidth": 0,
            "top": 110,
            "bottom": 95,
            textStyle: {
                color: "#fff"
            }
        },
        "legend": {
            bottom: '2%',
            textStyle: {
                color: '#90979c',
            },
            "data": legend
        },
        "xAxis": [{
            "type": "value",
            nameLocation: "top",
            "data": xAxis,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                rotate: "-50",
                "top": 30,
                textStyle: {
                    color: '#333'
                }
            },

        }],
        "yAxis": [{
            "type": "value",
            "inverse": true,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
        }],
        series: serie

    }
    myChat.setOption(option);
}
//均分分析--标准差图表
function showStandard(param) {
    var xAxis = param.xAxis;
    var yAxis = param.yAxis;
    var data = param.data;
    var data_max = param.data_max;
    var title = param.title;
    var serie = param.serie;
    console.log(xAxis)
    var heatChat = echarts.init(document.getElementById(param.id));
    option = {
        title: {
            //表名
            text: title,
            x: 'center',
            top: 15,
            textStyle: {
                fontWeight: 'normal'
            }
        },
        backgroundColor: '#fff',
        color: ["#4572A7", "#C35F5C", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#B5CA92"],
        xAxis: {
            data: xAxis,
            type: "category",
            position: "left",
            nameLocation: "middle",
            nameGap: '21',
            nameTextStyle: {
                color: "#0071b3"
            },
            axisLine: {
                lineStyle: {
                    color: '#f00'
                }
            },

            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            gridIndex: 0
        },

        yAxis: {
            type: 'value',
            data: yAxis,
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            scale: true

        },
        tooltip: {
            position: 'top',
            backgroundColor: "rgba(255, 255, 255, .7)",
            borderColor: "#4572A7",
            borderWidth: 2,
            textStyle: {
                color: '#333'
            },
            formatter: function(params) {
                return params.value[2] + '班:</br> 平均分：' + params.value[0] + "</br> 标准差:" + params.value[1]
            }
        },
        series: serie

    };
    // 使用刚指定的配置项和数据显示图表。
    heatChat.setOption(option);
}



function showStandard2(param) {
    var xAxis = param.xAxis;
    var yAxis = param.yAxis;
    var data = param.data;
    var data_max = param.data_max;
    var title = param.title;
    var a_standard = param.a_standard;
    var a_biaozhuncha = param.a_biaozhuncha;
    console.log(a_standard)
    var heatChat = echarts.init(document.getElementById(param.id));
    option = {
        title: {
            //表名
            text: title,
            x: 'center',
            top: 15,
            textStyle: {
                fontWeight: 'normal'
            }
        },
        backgroundColor: '#fff',
        color: ["#4572A7", "#C35F5C", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#B5CA92"],
        xAxis: {
            data: xAxis,
            type: "value",
            nameTextStyle: {
                color: "#0071b3"
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: '{value}'
            },
            scale: true,
            splitLine: {
                show: false
            }
        },

        yAxis: [{
            type: 'value',
            data: yAxis,
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            scale: true

        }],
        tooltip: {
            position: 'top',
            backgroundColor: "rgba(255, 255, 255, .7)",
            borderColor: "#4572A7",
            borderWidth: 2,
            textStyle: {
                color: '#333'
            },
            formatter: function(params) {
                //return params.value[2] + '班:</br> 平均分：' + params.value[1] + "</br> 标准差:" + params.value[0]
                if (params.value.length > 1) {
                    return params.value[2] + '班:</br> 平均分：' + params.value[1] + "</br> 标准差:" + params.value[0]
                } else {
                    return params.value;
                }
            }
        },
        series: {
            data: data,
            type: 'scatter',
            name: title,
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: "#f00"
                    }
                },
                data: [
                    { xAxis: a_biaozhuncha },
                    { yAxis: a_standard }

                ]
            },

            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": function(params) {
                        return params.value[2];
                    }
                }
            }
        }

    };
    // 使用刚指定的配置项和数据显示图表。
    heatChat.setOption(option);
}