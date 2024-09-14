const  fs = require('fs');
const {Command} = require('Commander'); // kuse Commander lib
const { version } = require('os');
const program =new Command();

program
  .name('file related Cli ')
  .description('CLI to  do file based task ')
  .version('14.8.1');

  program.command('count_Words')
   .description('count  no of word in file ')
   .argument('<file>','file to  count ')
   .action((file) =>{
    fs.readFile(file,'Utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            let word=0; 
            for(let i =0;i<data.length;i++){
                if(data[i]===" "){
                    word++
                }
            }
            console.log(`There are ${word+1} words in ${file} `);
        }
    });
   });

   program.command('count_Sentence')
   .description('count  no of Sentence in file ')
   .argument('<file>','file to  count ')
   .action((file) =>{
    fs.readFile(file,'Utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            let Sentence=0; 
            for(let i =0;i<data.length;i++){
                if(data[i]==="\n"){
                    Sentence++
                }
            }
            console.log(`There are ${Sentence+1} Sentence in ${file} file `);
        }
    });
   });

   program.parse();
