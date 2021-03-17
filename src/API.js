import React from "react";

const API_KEY = `AIzaSyAgYcoZB53I1w-cHkWdz9a5wgbJ8Ezr4Ps`;
const API_URL = `https://www.googleapis.com/customsearch/v1?key=`;
const CONTEXT_KEY = `af9b170f474a7573c`;
const term = "food";

export const CompleteURL = ` 
https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}
`;
