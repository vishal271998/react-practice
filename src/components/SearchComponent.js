// import React, { Component } from "react";
//
// import Autosuggest from 'react-autosuggest';
//
// const languages = [
//     {
//         name: 'C',
//         year: 1972
//     },
//     {
//         name: 'C#',
//         year: 2000
//     },
//     {
//         name: 'C++',
//         year: 1983
//     },
//     {
//         name: 'Clojure',
//         year: 2007
//     },
//     {
//         name: 'Elm',
//         year: 2012
//     },
//     {
//         name: 'Go',
//         year: 2009
//     },
//     {
//         name: 'Haskell',
//         year: 1990
//     },
//     {
//         name: 'Java',
//         year: 1995
//     },
//     {
//         name: 'Javascript',
//         year: 1995
//     },
//     {
//         name: 'Perl',
//         year: 1987
//     },
//     {
//         name: 'PHP',
//         year: 1995
//     },
//     {
//         name: 'Python',
//         year: 1991
//     },
//     {
//         name: 'Ruby',
//         year: 1995
//     },
//     {
//         name: 'Scala',
//         year: 2003
//     }
// ];
//
// const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//
// const getSuggestions = value => {
//     const escapedValue = escapeRegexCharacters(value.trim());
//
//     if (escapedValue === '') {
//         return [];
//     }
//
//     const regex = new RegExp('^' + escapedValue, 'i');
//     const suggestions = languages.filter(language => regex.test(language.name));
//
//     if (suggestions.length === 0) {
//         return [
//             { isAddNew: true }
//         ];
//     }
//
//     return suggestions;
// };
//
// export default class SearchComponent extends Component(){
//     constructor() {
//         super();
//
//         this.state = {
//             value: '',
//             suggestions: []
//         };
//     }
//
//     onChange = (event, { newValue, method }) => {
//         this.setState({
//             value: newValue
//         });
//     };
//
//     getSuggestionValue = suggestion => {
//         if (suggestion.isAddNew) {
//             return this.state.value;
//         }
//
//         return suggestion.name;
//     };
//
//     renderSuggestion = suggestion => {
//         if (suggestion.isAddNew) {
//             return (
//                 <span>
//           [+] Add new: <strong>{this.state.value}</strong>
//         </span>
//             );
//         }
//
//         return suggestion.name;
//     };
//
//     onSuggestionsFetchRequested = ({ value }) => {
//         this.setState({
//             suggestions: getSuggestions(value)
//         });
//     };
//
//     onSuggestionsClearRequested = () => {
//         this.setState({
//             suggestions: []
//         });
//     };
//
//     onSuggestionSelected = (event, { suggestion }) => {
//         if (suggestion.isAddNew) {
//             console.log('Add new:', this.state.value);
//         }
//     };
//
//     render() {
//         const { value, suggestions } = this.state;
//         const inputProps = {
//             placeholder: "Type 'c'",
//             value,
//             onChange: this.onChange
//         };
//
//         return (
//             <Autosuggest
//                 suggestions={suggestions}
//                 onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//                 onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//                 getSuggestionValue={this.getSuggestionValue}
//                 renderSuggestion={this.renderSuggestion}
//                 onSuggestionSelected={this.onSuggestionSelected}
//                 inputProps={inputProps}
//             />
//         );
//     }
// }