import axios from 'axios';
import { request } from 'http';

const config = {
    channelAccessToken: 'Vpvdsinm8Fs3esOITriVR97Z5vFNzf/BR29ojmXIG8G4avTFD4swH0xVb6TRNNrUk00c+esbKFKEHvp7r9s6GvZZqSWpTlAS0piwEf1vJg//CtjxF469bR55iPYotj0tTARnZaa9m+NNPmRUYgHxHQdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'b8e615eeeba12b5fd93394a0ae0adbb1',
    LINE_LIFF_ID : 'U06b1376643c76809bbae19f6c4881360',
    LINE_Notify_SMARTMG : 'CQB9Gn3EwKx6u1AcrbFN7b5zGokkA38VNZxAWYF7BqU'
};


export async function POST( req: Request){
    
    try{
        const messagenotify ="แจ้งงาน"+"\n"+"คุณกฤษณ์"+"\n"+"มีงานที่แผนกการเงินชั้น 3"
        const response = await axios({
            
           method: "POST",
            url: "https://notify-api.line.me/api/notify",
            headers: {
              //"Content-Type": "multipart/form-data",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer CQB9Gn3EwKx6u1AcrbFN7b5zGokkA38VNZxAWYF7BqU`,
            },
            data: "message=" + messagenotify,
          });

console.log('call line notify')
        const responsedata="text"
         
       return Response.json({responsedata})
     }catch(error){
        console.log('EEEERrorrrr')
         return new Response(error as BodyInit, {
           
           })
     }
 
 }