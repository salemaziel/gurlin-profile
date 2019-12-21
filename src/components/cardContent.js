import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
    CardHeader
    
  } from 'reactstrap'
//import Primario from './primario';
//import './primario/index.css'
//import '../app.css'
import '../css/cardcontent.css'
import '../css/header.css'
import '../css/footer.css'
import Header from './header';
import Footer from './footer';

import Button from '../components/button'


function cardContent() {
    
    const categoria = ['Primeiro', 'Segundo', 'Terceiro'];
    const subcategorias = [
        
    ];

    return (
        <Card className="card-bg">
            <CardHeader>
                <Header />
            </CardHeader>
            <CardTitle>
                <h1>
                    Rachel Ellyn <br /> Gurlin 
                </h1> 
            </CardTitle>
        <CardBody>
        
          
            <CardSubtitle>
                <h2>Biomedical Engineer. 
                <br />  Ph.D Type 1 Diabetes Researcher. <br />
                <br />
                    <span className="rainbow">Rainbow </span> chaser. 
                     Sunset junkie.<br />
                    

                </h2>
            </CardSubtitle>
           
            <CardText>
                <div style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                }}>
              {/**<Button primary prefetch href="/gallery">Gallery display</Button>**/}
              {/*<Button primary prefetch href="https://behance.net/codestaff-salem">Portfolio on Behance</Button>*/}
              
              {/**<Button primary prefetch href="https://codestaff-salem.appointlet.com/s/1-hour-consultation/salem">Book Consultation</Button>**/}
              </div>
                    {/**<div className='items'>
                        <div className='items-head'>**/}
                            
                
                
                </CardText>
  
                
        </CardBody>

        <Footer />
        </Card>
    )
}

export default cardContent