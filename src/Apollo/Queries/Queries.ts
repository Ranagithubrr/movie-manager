import { gql } from "../../__generated__";

export const GET_EPISODS = gql(/* GraphQL */ `
query Episods {
    episodes{
     results{
       id
       name  
       created
       episode         
     }
   }
   }
`);