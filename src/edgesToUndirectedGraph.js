
const areEdgesArray = require("../utils/areEdgesArray.js");
const errMsg = require("../error/errMsg.js");
const newArray = require("../utils/createNewArray.js");
const edgesToUndirectedGraph = (edges, callYouBack) => {

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
    let graph = {};
    
            newEdges.forEach(elem=> {
                elem.forEach((e,i,a)=>{
                    let dupArr = [...a];
                    current = dupArr.splice(i,1);
        
                    if(Array.isArray(graph[current])){
                        graph[current]=[...graph[current], ...dupArr];
                    } else {
                        graph[current] = [...dupArr];
                    }
                            
                })  
            } );
    
            return graph;
}
module.exports = edgesToUndirectedGraph;