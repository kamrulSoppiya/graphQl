import { useEffect } from "react"

export default function Home() {
    useEffect(()=>{
        fetch('http://localhost:4000/',{
            method:"post",
            headers:{
                "Content-type":"application.json"
            },
            body:JSON.stringify({
                query:`
                    query getAllUsers{
                        users{
                        id
                        firstName
                        lastName
                        email
                        quotes{
                            by
                            name
                        }
                        }
                    }
                `
            })
        }).then(res=>res.json())
        .then(data =>console.log(data));
    },[])
    return (
        <div className="container">
            <blockquote>
                <h6>if it works dont touch it</h6>
                <p className="right-align">~ram</p>
            </blockquote>
            <blockquote>
                <h6>if it works dont touch it</h6>
                <p className="right-align">~ram</p>
            </blockquote>
        </div>
    )
}
