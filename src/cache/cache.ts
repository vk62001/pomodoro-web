interface ICache {
    key:string;
    value:any
}

export const setCacheArray =  (key:string,value:any) =>{
    console.log(value)
    localStorage.setItem(key, JSON.stringify(value));
}

export const setCacheString =  (key:string, value:string) => {
    localStorage.setItem(key, value);
};

export const getArray = (key:string):any =>{
    const value = localStorage.getItem(key) || '';
    return JSON.parse(value);
};

export const deleteCache = (key:string):any =>{
    console.log(key);
    localStorage.removeItem(key);     
}



//localStorage Sincrono Texto
//localStorage.setItem('key', "Texto")
//localStorage.setItem('key', JSON.stringify(value))
// return localStoarge.getItem('key')
// return JSON.parse(localStorage.getItem(key));
// localStoarge.removeItem(key); try catch