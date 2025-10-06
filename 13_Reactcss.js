/* Prepared by:
Name: Karan Singh
RId: R52376 */
const parent=React.createElement(
    "div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading1"},"i'm h1 tag"),
        React.createElement("h2",{id:"heading2"},"i'm h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"head1"},"i'm h1 tag"),
        React.createElement("h2",{id:"head2"},"i'm h2 tag")
    ])
]);

const root=ReactDOM.createRoot(document.getElementById("headerid"));
root.render(parent);