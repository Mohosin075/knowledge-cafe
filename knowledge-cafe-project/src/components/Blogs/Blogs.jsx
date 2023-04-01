import React from 'react';

const Blogs = () => {
    return (
        <div>
             <section  className="w-9/12 md:w-10/12 mx-auto my-5">
        <h1  className="text-center my-10 text-2xl md:text-4xl font-bold">Some <span  className="text-green-600">Important</span> Question</h1>
        <div>
            <div  className="mb-10">
                <h3  className="text-xl md:text-2xl font-bold">(1) Props vs state</h3>
                <div  className="text-sm md:text-xl py-3">
                    <p  className="py-2"><span  className="text-xl font-semibold">Props :</span> <br />  
                    props and state are used to manage data and information within a component in React. props are read-only and passed down from a parent component to configure a component's behavior and appearance. state is used to manage a component's internal data, can be modified by the component, and triggers re-renders to update the user interface.</p>
                </div>
            </div>
            <div  className="mb-10">
                <h3  className="text-xl md:text-2xl font-bold">(2) Purpose of useEffect other than fetching data?</h3>
                <div  className="text-sm md:text-xl py-3">
                    <p  className="py-2">
                        1. use of useEffect in react for every rerender. <br /> 
                        2. use of useEffect in react for onMount. <br /> 
                        3. useEffect can be used to update the state of a parent component when a child component updates. <br /> 
                        4.useEffect can be used to trigger animations or transitions when a component updates or unmounts. <br /> 
                    </p>
                </div>
            </div>
            <div  className="mb-10">
                <h3  className="text-xl md:text-2xl font-bold">(3) How Does React work?</h3>
                <div  className="text-sm md:text-xl py-3">
                    <p  className="py-2">
                    React is a JavaScript library for building user interfaces. It creates a virtual representation of the user interface called the "virtual DOM" and updates the actual DOM to reflect changes to this representation. React components have properties and state, and when a component's state changes, React calculates the minimal set of changes needed to update the virtual DOM and then updates the actual DOM. React provides a mechanism for handling user events and can be used with other tools and libraries to build more complex applications..</p>
                </div>
            </div>
            <div  className="mb-10">
                <h3  className="text-xl md:text-2xl font-bold">(4) How does useState work?</h3>
                <div  className="text-sm md:text-xl py-3">
                    <p  className="py-2">
                    useState is a built-in hook in React that allows functional components to manage state. It works by returning a pair of values: the current state value, and a function to update the state value. You use the state variable in your component's render function to display the current state value, and when you need to update the state, you call the update function with a new value. React will then re-render the component with the updated state value.</p>
                </div>
            </div>
        </div>
      </section>
        </div>
    );
};

export default Blogs;