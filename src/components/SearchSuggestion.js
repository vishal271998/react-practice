// import React, {Component} from "react";
// import Users from "./Users";
//
// export default class SearchSuggestion extends Component() {
//     render() {
//
//         const languages = [
//             {
//                 name: 'C',
//                 year: 1972
//             },
//             {
//                 name: 'C#',
//                 year: 2000
//             },
//             {
//                 name: 'C++',
//                 year: 1983
//             },
//             {
//                 name: 'Clojure',
//                 year: 2007
//             },
//             {
//                 name: 'Elm',
//                 year: 2012
//             },
//             {
//                 name: 'Go',
//                 year: 2009
//             },
//             {
//                 name: 'Haskell',
//                 year: 1990
//             },
//             {
//                 name: 'Java',
//                 year: 1995
//             },
//             {
//                 name: 'Javascript',
//                 year: 1995
//             },
//             {
//                 name: 'Perl',
//                 year: 1987
//             },
//             {
//                 name: 'PHP',
//                 year: 1995
//             },
//             {
//                 name: 'Python',
//                 year: 1991
//             },
//             {
//                 name: 'Ruby',
//                 year: 1995
//             },
//             {
//                 name: 'Scala',
//                 year: 2003
//             }
//         ];
//
//         const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//
//         const getSuggestions = value => {
//             const escapedValue = escapeRegexCharacters(value.trim());
//
//             if (escapedValue === '') {
//                 return [];
//             }
//
//             const regex = new RegExp('^' + escapedValue, 'i');
//             const suggestions = languages.filter(language => regex.test(language.name));
//
//             if (suggestions.length === 0) {
//                 return [
//                     { isAddNew: true }
//                 ];
//             }
//
//             return suggestions;
//         };
//     }
// }