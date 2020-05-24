// Dropdown menu --> choose patient
function buildDropdown(){
    var dropdownMenu = d3.select("#selDataset")
    d3.json("samples.json").then(function(data) {
        console.log(data);
        //build dropdown - based selDataset
        var sampleNames = data.names;

        samplesName.forEach((sample) => {
            //add an option for each sample name
            //add the text associated with that sample
            //add the value for that sample
        })
    })
}
// On page load, initialize dropdown menu for first sample ID
buildDropdown();


function buildGraphs(sample){

    d3.json("samples.json").then((data)=> {
        console.log(data);

        // Get the data for all the samples. --> data.samples
        var samples = data.samples;
        var selected = samples.filter(x => x.id == sample);

        // Get the data just for the sample we have chosen
        // Parse the data to get what we need for bar then bubble chart

        // dig down  and  get the otu_ids, otu... 
        // Bar graph

        // Generate bar graph based on patient ID - first one, sampl3 940

        // Bubble chart based on patient ID



    });



}
buildGraphs(940);

// Demographic info based on patient ID 940 
function buildData(sample){

}
buildData(940);

function optionChanged(sample){
    buildGraphs(sample);
    buildData(sample);
}

