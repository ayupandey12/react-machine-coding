export default function ClassNames(...args)
{
    const classess=[];
    args.forEach((arg)=>{
        if(!arg) return ;
        const argtype=typeof(arg);
        if(argtype==='string'||argtype==='number')
        {
            classess.push(arg);
            return;
        }
        if(Array.isArray(arg)) //flattening the array // recursive call
        {
            classess.push(ClassNames(...arg));
            return;
        }
        if(argtype==='object')
        {
            for(const key in arg)
            {
                if(Object.hasOwn(arg,key)&&arg[key]) //check obj has own key and value is true;
                {
                    classess.push(key);
                }
            }
            return;
        }
    })
    return classess.join(' ');//sperate with space 
}