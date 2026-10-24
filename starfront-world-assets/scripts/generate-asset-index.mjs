#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const base=process.cwd();
const pdir=path.join(base,'images','pilots');
const dirs=fs.readdirSync(pdir,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>x.name).sort();
const known=JSON.parse(fs.readFileSync(path.join(pdir,'manifest.json'),'utf8')).pilots;
if(JSON.stringify([...known].sort())!==JSON.stringify(dirs)) throw Error('Pilot registry mismatch: update images/pilots/manifest.json when adding/removing a pilot');
let total=0;
for(const pilot of dirs){
 const dir=path.join(pdir,pilot);
 const names=fs.readdirSync(dir).filter(n=>n.toLowerCase().endsWith('.webp')).sort();
 const galleryPath=path.join(dir,'gallery.json');
 const gallery=fs.existsSync(galleryPath)?JSON.parse(fs.readFileSync(galleryPath,'utf8')):{artworks:{}};
 for(const n of Object.keys(gallery.artworks??{})) if(!names.includes(n)) throw Error(`Gallery metadata refers to missing image: ${pilot}/${n}`);
 const files=names.map(filename=>{
  if(!new RegExp('^'+pilot+'-[a-z0-9]+(?:-[a-z0-9]+)*\.webp$').test(filename)) throw Error('Invalid filename: '+pilot+'/'+filename);
  const buffer=fs.readFileSync(path.join(dir,filename));
  if(buffer.toString('ascii',0,4)!=='RIFF'||buffer.toString('ascii',8,12)!=='WEBP')throw Error('Invalid WebP: '+pilot+'/'+filename);
  const sha256=crypto.createHash('sha256').update(buffer).digest('hex');
  const {width,height}=webpDimensions(buffer);
  const assetId=filename.slice(0,-5);
  const role=/-(outfit)-[0-9]+\.webp$/.test(filename)?'outfit':filename.replace(new RegExp('^'+pilot+'-'),'').replace(/-[0-9]+\.webp$|\.webp$/g,'');
  return {assetId,filename,role,width,height,bytes:buffer.length,sha256};
 });
 fs.writeFileSync(path.join(dir,'files.json'),JSON.stringify({schemaVersion:1,pilotId:pilot,total:files.length,files},null,2)+'\n');
 total+=files.length;
 console.log(pilot,files.length);
}
console.log('Indexed',total,'WebP');
function webpDimensions(b){
 const t=b.toString('ascii',12,16);
 if(t==='VP8X')return {width:1+b.readUIntLE(24,3),height:1+b.readUIntLE(27,3)};
 if(t==='VP8L'){
  const b0=b[21],b1=b[22],b2=b[23],b3=b[24];
  return {width:1+(b0|((b1&63)<<8)),height:1+((b1>>6)|(b2<<2)|((b3&15)<<10))};
 }
 if(t==='VP8 ')return {width:b.readUInt16LE(26)&0x3fff,height:b.readUInt16LE(28)&0x3fff};
 throw Error('Unsupported WebP header '+t);
}
