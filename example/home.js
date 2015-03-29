(function () {
    var description;
    description = {
        "Indoor temp gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.indoor.temp&format=json",
            GaugeLabel: {
                parent: "#gauge-home-indoor-temp",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Indoor temp",
                unit: "C"
            }
        },
        "Indoor humidity gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.indoor.humidity&format=json",
            GaugeLabel: {
                parent: "#gauge-home-indoor-humidity",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Indoor humidity",
                unit: "%"
            }
        },
        "Outdoor temp gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.outdoor.temp&format=json",
            GaugeLabel: {
                parent: "#gauge-home-outdoor-temp",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Outdoor temp",
                unit: "C"
            }
        },
        "Outdoor humidity gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.outdoor.humidity&format=json",
            GaugeLabel: {
                parent: "#gauge-home-outdoor-humidity",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Outdoor humidity",
                unit: "%"
            }
        },
        "Wind avg gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.wind.wavg&format=json",
            GaugeLabel: {
                parent: "#gauge-home-wind-wavg",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Wind average",
                unit: "m/s"
            }
        },
        "Wind gust gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.wind.wgust&format=json",
            GaugeLabel: {
                parent: "#gauge-home-wind-wgust",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Wind gust",
                unit: "m/s"
            }
        },
        "Wind dir gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.wind.wdir&format=json",
            GaugeLabel: {
                parent: "#gauge-home-wind-wdir",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Wind direction",
                unit: "deg"
            }
        },
        "Rain rate gauge": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.rain.rrate&format=json",
            GaugeLabel: {
                parent: "#gauge-home-rain-rrate",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Rain rate",
                unit: "mm/h"
            }
        },
        "Indoor temp": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=home.indoor.temp&format=json",
            TimeSeries: {
                parent: '#home-indoor-temp',
                title: 'indoor temp',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        },
        "Indoor humidity": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=home.indoor.humidity&format=json",
            TimeSeries: {
                parent: '#home-indoor-humidity',
                title: 'indoor humidity',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                warn: 60,
                error: 70,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        },
        "Outdoor temp": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=home.outdoor.temp&format=json",
            TimeSeries: {
                parent: '#home-outdoor-temp',
                title: 'outdoor temp',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        },
        "Outdoor humidity": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=home.outdoor.humidity&format=json",
            TimeSeries: {
                parent: '#home-outdoor-humidity',
                title: 'outdoor humidity',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        },
        "UV": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=home.uv.uv&format=json",
            TimeSeries: {
                parent: '#home-uv-uv',
                title: 'UV',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        },
        "Power hour average": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=eliq.hour.avgpower&target=eliq.6min.avgpower&&format=json",
            TimeSeries: {
                parent: '#eliq-hour-avgpower',
                title: 'hour-avgpower',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        }
    };

    var g = new Graphene;
    g.build(description);


}).call(this);
