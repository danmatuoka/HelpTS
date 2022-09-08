import styled, { StyledComponent} from "styled-components";


export const Container = styled.div `

    width:  100%;
    height: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .box-top{
        width: 60%;
        min-height: 4.6rem;
        max-height: 6rem;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: none;
        border-left: 5px solid var(--blue);
        border-right: 5px solid var(--blue);
        border-radius: 5px;
        background-color: var(--grey-card);
    }
    .first-top{
        width: 60%;
        display: flex;
        align-items: center;
        >img{
            width: 4.5rem;
            height: 4.5rem;
        }
    }
    div>div>svg{
        width: 12rem;
        height: 10rem;
    }
    .title{
        font-family: 'Ubuntu';
        font-weight: 700;
        color: var(--blue);
        font-size: 1.3rem;

    }
    .second-top{
        font-family: 'Ubuntu';
        font-weight: 500;
        color: var(--grey-dark);
        font-size: 0.8rem;
        display: flex;
        align-items: flex-end;
        width: 40%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.3rem;
        margin-right: 1rem;
        >div>svg {
            width: 1rem;
            height: 1rem;
            margin: 0.3rem;
        }
    }
    
    .Icon{
        font-size: 0.2rem;
    }

    .box-bottom{
        width: 60%;
        height: 35rem;
        min-height:21.87rem;
        margin-top: 0.3rem;
        border: solid var(--blue) 0.15rem;
        border-radius: 5px;
        background-color: var(--grey-card);
        display: flex;
        flex-direction: column;
        
    }
    .up-box{
        display: flex;
        height: 10%;
        align-items: center;
        justify-content: space-between;
       
    }
    .up-box-first{
        margin-left: 0.5rem;
        margin-right:0.5rem ;
    }
    .up-box-second{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        display: flex;
        width: 50%;
        justify-content: flex-end;
        gap: 0.5rem;
    }

    .likes{
        display: flex;
    }

    .solution-box{
        border: 0.063rem solid var(--blue);
        width: 88%;
        min-height: 11rem ;
        display: flex;
        padding: 1rem;
        border-radius: 5px; 
        text-align: justify;
        overflow: auto;
        >h1{
            font-family: 'Tajawal';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: var(--blue);
        }
    }

    .solution-code{
        border: 0.063rem solid var(--yellow);
        background-color: var(--grey-dark);
        width: 88%;
        min-height: 13rem ;
        display: flex;
        padding: 0.4rem;
        border-radius: 5px;
       
        >h1{
            width: 100%;
            font-family: 'Tajawal';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: var(--white);
        }
        .prism-code {
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: none;
           
        }

        .prism-code.language-tsx{
            background-color: var(--grey-dark) !important;
            width: 100% !important;
            height: 90% !important;
            color: var(--blue-dark) !important;
        }
        .token-line {
            margin-left: 0.8rem;
            margin-right: 0.8rem;
            background-color: var(--grey-dark);
            color: var(--white) !important;
        }
        .token.function{
            color: #35beff !important;
        }
    }
    .second-title{
        font-family: 'Ubuntu';
        font-weight: 700;
        color: var(--blue);
        font-size: 1.2rem;
    }

    .likes{
        color:var(--grey-dark) ;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
    }
    
    
    
    .bottom-solutions{
        height: 15%;
        width: 88%;
        
    }
    .bottom-up{
        height: 30%;
        display: flex;
        border-bottom: solid 1rem var(--blue-dark);
        flex-direction: column;
        width: 100%;
        border-bottom: solid 0.18rem var(--blue);
        justify-content: flex-end;
        
    }
    .comments{
            color:var(--grey-dark) ;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 0.8rem;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            
     }
    .bottom-down{
        display: flex;
        flex-direction: column;
    }
    
    .github{
        color:var(--grey-dark) ;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 0.9rem;
    }
    .solutions-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:1rem;
    }

`

