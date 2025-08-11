// general
let generalMatrix = [];
generateEvents();

function generateMatrix() {
    let lines, columns, success;
    const output = document.querySelector("#generateMatrixFeedback");

    try {
        lines = parseInt(document.querySelector("#linesNumber").value);
        columns = parseInt(document.querySelector("#columnsNumber").value);

        if(isNaN(lines) || isNaN(columns)) 
            throw new Error(NaN);
        
        else if(lines <= 0 || columns <= 0)
            throw new Error("Lines or columns are out of bounds.")

        else success = true;
    
    } catch(Error) {
        output.innerHTML = Error;
    }

    if(success) {
        for(let line = 0; line < lines; line++) {
            const theseColumns = new Array(columns).fill('');
    
            generalMatrix.push(theseColumns);
        }
    }
}

function insertNumber() {

}


function generateEvents() {
    document.querySelector("#generateMatrix").addEventListener("click", () => 
        generateMatrix()
    )

    document.querySelector("").addEventListener("click", () =>
        insertNumber())
}