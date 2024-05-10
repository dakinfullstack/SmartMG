import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient ()

export async function  GET (){
    try{

        const listLineAccount = await prisma.lineAccount.findMany()
        return Response.json(listLineAccount)
    }catch(error){
        return new Response(error as BodyInit, {
            status: 500,
          })
    }
}


export async function POST( req: Request){
   try{
        const {LineAccountId ,LineAccountName 
            ,LineAccountAlias ,LineAccountImg }  = await req.json()
        const createLineAccount = await prisma.lineAccount.create( {
           data: {  LineAccountId ,LineAccountName ,LineAccountAlias ,LineAccountImg  }
            })
        return Response.json({createLineAccount})
    }catch(error){
        return new Response(error as BodyInit, {
            status: 500,
          })
    }

}