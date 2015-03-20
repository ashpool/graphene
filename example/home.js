(function () {
    var description;
    description = {
        "": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.indoor.humidity&format=json",
            GaugeLabel: {
                parent: "#gauge-home-indoor-humidity",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Indoor humidity",
                type: "max"
            }
        },
        "Indoor temp": {
            source: "http://192.168.0.14/render?from=-1hours&until=now&target=home.indoor.temp&format=json",
            GaugeLabel: {
                parent: "#gauge-home-indoor-temp",
                observer: function(data){
                    console.log("Label observing " + data);
                },
                title: "Indoor temp",
                type: "max"
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
        "Power average": {
            source: "http://192.168.0.14/render?from=-24hours&until=now&target=eliq.6min.avgpower&format=json",
            TimeSeries: {
                parent: '#eliq-6min-avgpower',
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
        }
    };

    var g = new Graphene;
    g.build(description);


}).call(this);
