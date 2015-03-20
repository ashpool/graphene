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
                type: "max",
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
                type: "max",
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
                type: "max",
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
                type: "max",
                unit: "%"
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
        "Power 6min average": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=eliq.6min.avgpower&format=json",
            TimeSeries: {
                parent: '#eliq-6min-avgpower',
                title: '6min-avgpower',
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
        "Power hour average": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=eliq.hour.avgpower&format=json",
            TimeSeries: {
                parent: '#eliq-hour-avgpower',
                title: 'hour-avgpower',
                label_offset: 200,
                label_columns: 2,
                time_span_mins: 12,
                warn: 60,
                error: 70,
                observer: function (data) {
                    console.log("Time series observing ", data);
                }
            }
        }
    };

    var g = new Graphene;
    g.build(description);


}).call(this);
