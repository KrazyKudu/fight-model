import { Text, StyleSheet } from "react-native";
import text from './AboutText'

export default function About() {
    const gotTheText = text;
    
    return (
        <div>
            <h1>What is this thing?</h1>
            <body>
            
            <textarea>{gotTheText}</textarea>
            </body>
        </div>
    )

}