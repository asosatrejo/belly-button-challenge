// Use the D3 library to read in samples.json from the URL
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then((data) => {console.log(data)});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
function barChart(sample){
    d3.json(url).then((data) => {

        var value = data.samples.filter(result => result.id === sample);
        var valueData = value[0];

        // Use `sample_values` as the values for the bar chart.
        var sample_values = valueData.sample_values;
        // Use `otu_ids` as the labels for the bar chart.
        var otu_ids = valueData.otu_ids;
        // Use `otu_labels` as the hover text for the chart.
        var otu_labels = valueData.otu_labels;

        console.log(sample_values, otu_ids, otu_labels);
    });
};

// Create a bubble chart that displays each sample.
   // Use `otu_ids` for the x values.
   // Use `sample_values` for the y values.
   // Use `sample_values` for the marker size.
   // Use `otu_ids` for the marker colors.
   // Use `otu_labels` for the text values.
   
// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object on the page.
// Update all the plots when a new sample is selected.