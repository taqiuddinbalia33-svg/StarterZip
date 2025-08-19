
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function YouTubeScreen(){ return (<View style={{flex:1}}><WebView source={{ uri: 'https://www.youtube.com/embed/ysz5S6PUM-U' }} /></View>); }
