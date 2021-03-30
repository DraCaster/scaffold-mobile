import {ApplicationSettings} from "@nativescript/core";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const URI_API = 'http://localhost:5000/graphql'

// GET TOKEN and Prepare for header bearer
const tokenInAppSet = ApplicationSettings.getString("token")
    ? ApplicationSettings.getString("token").replace(/['"]+/g, "")
    : false;

/////////////// APOLLO
export const defaultClient = new ApolloClient({
    uri: URI_API,
    headers: {
        authorization: `Bearer ${tokenInAppSet}`,
    }
});

const apolloProvider = new VueApollo({
    defaultClient,
});

export {apolloProvider}
