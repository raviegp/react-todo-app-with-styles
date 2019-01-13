/**
 * 1. Adjacent JSX elements must be wrapped in a enclosing tag.
 * 2. JSX Expressions
 * 3. Conditional Rendering in JSX
 */

 import React from 'react';
 import ReactDOM from 'react-dom';

//  const techName = 'Javascript';
//  const frameworks = 'React';
//  const relatedLibs = ['ReactDOM', 'react-router-dom'];

 const reactJS = {
     language: 'Javascript',
     implementedIn: 'Javascript',
     prerequisites: [
         'jsx',
         'es6-let-const',
         'es6-arrow-functions',
         'es6-classes'
     ],
    //  createdAt: 'Facebook'
 }

 const template = (
    <div>
        <p>Language: {reactJS.language}</p>
        <p>Implemented In: {reactJS.implementedIn}</p>
        <p>Prerequisites:
            <u>
                {reactJS.prerequisites.map((prereq, id) => <li key={id}>{prereq}</li>)}
            </u>
        </p>
        {reactJS.createdAt ? <p>Created At: {reactJS.createdAt}</p> : <p>CreatedAt: Not specified</p>}
    </div>
);

 ReactDOM.render(template, document.getElementById('app'));