// Use the D3 library to read in samples.json from the URL
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then((data) => {console.log(data)});


function buildCharts(sample){
    d3.json(url).then((data) => {

        var value = data.samples.filter(result => result.id === sample);
        var valueData = value[0];

        var sample_values = valueData.sample_values;
        var otu_ids = valueData.otu_ids;
        var otu_labels = valueData.otu_labels;

        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        var bar_data = [{
            // Use `sample_values` as the values for the bar chart.
            x: sample_values.slice(0, 10).reverse(),
            // Use `otu_ids` as the labels for the bar chart.
            y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
            // Use `otu_labels` as the hover text for the chart.
            text: otu_labels,
            type: "bar"}
        ];

        var layout = {
            title: "Top 10 OTUs Found in Individual"
        };

        plotly.newPlot("bar", bar_data, layout)

        // Create a bubble chart that displays each sample.
        var bubble_data = [{
            // Use `otu_ids` for the x values.
            x: otu_ids,
            // Use `sample_values` for the y values.
            y: sample_values,
            // Use `otu_labels` for the text values.
            text: otu_labels,
            mode: "marker",
            marker: {
                // Use `sample_values` for the marker size.
                size: sample_values,
                // Use `otu_ids` for the marker colors.
                colors: otu_ids
            }
        }];
        
    });
};



// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object on the page.
// Update all the plots when a new sample is selected.