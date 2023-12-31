# belly-button-challenge

## Summary
![image](https://github.com/asosatrejo/belly-button-challenge/assets/135572871/1582e788-1ae5-4f30-8765-2f3d588c5724)

Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Steps Taken
1. Use the D3 library to read in samples.json from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
   * Use `sample_values` as the values for the bar chart.
   * Use `otu_ids` as the labels for the bar chart.
   * Use `otu_labels` as the hover text for the chart.
     
   ![Alt text](image.png)
   
4. Create a bubble chart that displays each sample.
   * Use `otu_ids` for the x values.
   * Use `sample_values` for the y values.
   * Use `sample_values` for the marker size.
   * Use `otu_ids` for the marker colors.
   * Use `otu_labels` for the text values.
     
   ![Alt text](image-1.png)
   
6. Display the sample metadata, i.e., an individual's demographic information.
   
    ![image](https://github.com/asosatrejo/belly-button-challenge/assets/135572871/80598164-888d-4bb4-9d04-164abe8d3638)

8. Display each key-value pair from the metadata JSON object on the page.
9. Update all the plots when a new sample is selected.
    ![image](https://github.com/asosatrejo/belly-button-challenge/assets/135572871/ad637db9-f872-4676-a512-912e239f24c2)


## Files
* `samples.json`
* `index.html`
* static folder
  * js folder
    * `app.js`

# Resources
* [Bubble charts in Python](https://plotly.com/javascript/bubble-charts/)
* [Bar Charts in JavaScript](https://plotly.com/javascript/bar-charts/)
