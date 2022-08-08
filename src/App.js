import React from 'react';
import {Routes,Route,useRoutes} from 'react-router-dom';
import Form from './Form.js';
import Graph from './Graph.js';
import Invalid from './Invalid.js';
const App = () => {
    return (
        <div>
           
            <Routes>
                
            <Route path= "*" element={ <Form />}/>
                <Route path= "graph" element={ <Graph />}/>
                <Route path= "inv" element={ <Invalid />}/>
            </Routes>
        </div>
    );
};

export default App;