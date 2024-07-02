const {test,expect}=require ('@playwright/test');

test("Dog has no sub breed",async({request})=>{
    const response=await request.get("https://dog.ceo/api/breeds/list/all")

    expect(response.status()).toBe(200);
    
    const jsonObject=await response.json();
    const arrayMessage=await jsonObject.message;
    const arrKeys=Object.keys(arrayMessage)
    const arrValues=Object.values(arrayMessage)

   for(let i=0 ; i<arrKeys.length ; i++)
    {
        //breed has no sub breed
        expect.soft(arrValues[i].length).toBe(0)
        console.log(arrKeys[i]+" Dog has no sub breed")
    }
})

test.skip("Dog has many sub breed",async({request})=>{
    const response=await request.get("https://dog.ceo/api/breeds/list/all")

    expect(response.status()).toBe(200);
    
    const jsonObject=await response.json();
    const arrayMessage=await jsonObject.message;
    const arrKeys=Object.keys(arrayMessage)
    const arrValues=Object.values(arrayMessage)

   for(let i=0 ; i<arrKeys.length ; i++)
    {
        //breed has no sub breed
        expect.soft(arrValues[i].length).toBeGreaterThan(1)
        console.log(arrKeys[i]+" Dog has many sub breed")
    }
    
})

test.skip("Dog sub breed does not have further subbreed",async({request})=>{
    const response=await request.get("https://dog.ceo/api/breeds/list/all")

    expect(response.status()).toBe(200);
    
    const jsonObject=await response.json();
    const arrayMessage=await jsonObject.message;
    const arrKeys=Object.keys(arrayMessage)
    const arrValues=Object.values(arrayMessage)

   for(let i=0 ; i<arrKeys.length ; i++)
    {
        const subBreedArray=arrValues[i]
        for (let j=0;j<subBreedArray.length ;j++){
           expect(subBreedArray[j].values).toBeUndefined()
           console.log(subBreedArray[j]+" Dog sub breed does not have further subbreed")
        }
    }
    
})