import React from 'react';
import { motion, useScroll } from "framer-motion";

const Blog = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>Difference between SQL and NoSQL</h1>
            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

There are five practical differences between SQL and NoSQL:

Language
Scalability
Structure
Properties
Support and communities</p>
            
            </div>
        <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>What is JWT, and how does it work?</h1>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 

JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

</p>
            
            </div>
        <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>What is the difference between javascript and NodeJS?</h1>
            <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

</p>
            
            </div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>How does NodeJS handle multiple requests at the same time?</h1>
            <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. 

How NodeJS handle multiple client requests?

NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            
            </div>
       
        </div>
        </>
    );
};

export default Blog;