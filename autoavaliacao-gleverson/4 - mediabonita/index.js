document.getElementById("mediaForm").addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();    
    const values = obtainValues();

    calculateMedias(values);
})

function calculateMedias(valueArray) {
    // entry
    responses = [];

    // process
    if(valueArray[0] && valueArray[1] && valueArray[2]) {        
        responses.push(
            [geometricProcess, weightedMediaProcess, harmonicMediaProcess, aritmeticMediaProcess]
        );
    
    } else {
        responses.push(() => alert("Insira valores válidos!"));
    }
    
    // output
    responses.forEach((method) => method())


    //sub functions
    function calculateAndShowAll() {
        
    }

    function geometricProcess() {
        const equation =  (valueArray[0]*valueArray[1]*valueArray[2])**1/3;

        document.querySelector(`selectedOutput${1}`)
    }
    
    function weightedMediaProcess() {
        const equation = (valueArray[0] + 2*valueArray[1] + 3*valueArray[2])/6;
    }

    function harmonicMediaProcess() {
    }

    function aritmeticMediaProcess() {

    }
}


function obtainValues() {
    let values = Array.from(document.querySelectorAll("#mediaForm .value"));

    for(let input = 0; input < values.length; input++) values[input] = parseInt(values[input].value);

    return values
}