const areEdgesArray = require("../utils/areEdgesArray.js");
const errMsg = require("../error/errMsg.js");
const newArray = require("../utils/createNewArray.js");
const edgesToDirectedGraph = (edges, callYouBack) => {
    let newEdges;
    let isArray = areEdgesArray(edges);
    if(isArray) newEdges = newArray(edges);
    if(typeof callYouBack === 'function'){
        return isArray ? callYouBack(null, doWork(newEdges)) :  callYouBack(errMsg)         
    } else {
        return new Promise((res, rej)=>{
            return isArray ? res(doWork(newEdges)) :  rej(errMsg) 
        })
    }
       
    
     
}

const doWork = (newEdges) => {
    
    let graph={};

    newEdges.forEach((elem)=>{
        let dupArr = newArray(elem)
        let first= dupArr.shift();
        if(Array.isArray(graph[first])) {
            graph[first]=[...dupArr,...graph[first]];
        } else {
            graph[first]=[...dupArr];
        }

        
    });


    return graph;
}

module.exports = edgesToDirectedGraph
