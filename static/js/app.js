// Use the D3 library to read in samples.json from the URL
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then((data) => {console.log(data)});


function buildCharts(sample){
    d3.json(url).then((data) => {

        let value = data.samples.filter(result => result.id == sample);
        let valueData = value[0];

        let sample_values = valueData.sample_values;
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;

        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        let bar_data = [{
            // Use `sample_values` as the values for the bar chart.
            x: sample_values.slice(0, 10).reverse(),
            // Use `otu_ids` as the labels for the bar chart.
            y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
            // Use `otu_labels` as the hover text for the chart.
            text: otu_labels,
            type: "bar",
            orientation: "h"
        }];

        let layout = {
            title: "Top 10 OTUs Found in Individual"
        };

        Plotly.newPlot("bar", bar_data, layout)

        // Create a bubble chart that displays each sample.
        let bubble_data = [{
            // Use `otu_ids` for the x values.
            x: otu_ids,
            // Use `sample_values` for the y values.
            y: sample_values,
            // Use `otu_labels` for the text values.
            text: otu_labels,
            mode: "markers",
            marker: {
                // Use `sample_values` for the marker size.
                size: sample_values,
                // Use `otu_ids` for the marker colors.
                colors: otu_ids
            }
        }];

        Plotly.newPlot("bubble", bubble_data);
        
    });
};

// Display each key-value pair from the metadata JSON object on the page.
function buildMetadata(sample){
    d3.json(url).then((data) => {
        let value = data.metadata.filter(result => result.id == sample);
        let valueData = value[0];

        d3.select("#sample-metadata").html("");

        Object.entries(valueData).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}:${value}`);
        });
    });
};

// Display the sample metadata, i.e., an individual's demographic information.
function init(){
    let dropdown = d3.select("#selDataset");

    // Use Sample Names for Select Options
    d3.json(url).then((data) => {
        let names = data.names;
        names.forEach((id) => {
            dropdown.append("Option").text(id).property("value", id);
        });
        
        
        // Build First Plots
        let firstSample = names[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });

        
    
};

// Update all the plots when a new sample is selected.
function optionChanged(sample){
    buildCharts(sample);
    buildMetadata(sample);
};

init();