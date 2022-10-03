/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from 'svelte-native'
import App from './App.svelte'
import {RootDetection} from 'nativescript-root-detection';

const rooted = RootDetection.isDeviceRooted();

if(rooted) {
    svelteNativeNoFrame(App, {})
}else{
    alert("No root detected, please root your phone");
}

