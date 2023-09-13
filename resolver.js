import {users, quotes} from './fakedb.js';
import {randomBytes} from 'crypto';
const resolvers = {
    Query:{
        users:()=>users,
        user:(_,{id})=>users.find(user=>user.id == id),
        quotes:()=>quotes,
        iquote:(_,{by})=> quotes.filter((quote)=>quote.by==by) 
    },
    
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by == ur.id)
    },

    Mutation:{
        signupUserDummy(_,{userNew}){
            const id = randomBytes(5).toString("hex")
            users.push({id, ...userNew})
            return users.find(user=>user.id == id)
        },
        // createQuote(_,{name, by}){
        //     const checkId = users.find(user=>user.id == by)
        //     return quotes.push({name:name,by:checkId})
        //     //  users.find(user=>user.id == by)
        // }
    },
    // createQuote(name:String!,by:String!):Quote

}
export default resolvers;