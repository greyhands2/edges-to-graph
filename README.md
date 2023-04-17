## Edges-to-graph

This is a package that converts an Array of Edges into a Directed or Undirected Graph(Adjacency List).

## Usage

Installation

```
npm i edges-to-graph

```

Example

test.js

```javascript
const {edgesToDirectedGraph, edgesToUndirectedGraph } =require('./index.js')




const main = async() => {
    let edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
     ]
  


   
  
    edgesToDirectedGraph(edges, (err, graph)=>{
        if(err) console.log(err.message)
        console.log(graph)
    })
    //or use promise 
    let graph = await edgesToDirectedGraph(edges)
    console.log(graph)
    //output
    /****
      { 
        i: [ 'j' ],
        k: [ 'l', 'i' ],
        m: [ 'k' ],
        o: [ 'n' ] 
      }
     ****/


   edgesToUndirectedGraph(edges, (err, graph)=>{
        if(err) console.log(err.message)
        console.log(graph)
   })
   
   // or use promise
   graph = await edgesToUndirectedGraph(edges)
   console.log(graph)
   //output
   /**** 
   {
    i: [ 'j', 'k' ],
    j: [ 'i' ],
    k: [ 'i', 'm', 'l' ],
    m: [ 'k' ],
    l: [ 'k' ],
    o: [ 'n' ],
    n: [ 'o' ]
  }
  ****/



   
}




main();
  

```
