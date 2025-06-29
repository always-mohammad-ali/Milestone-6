const fest = {
    name:'3zero',
    speaker:'hannan vc',
    guest:'city bank'
}

for(const fes in fest){
    const values = fest[fes];
    console.log(values);
   console.log(fes);
}

const guest = {
    main:'vc',
    co:'du'
}

const keys = Object.keys(guest);

for(const key of keys){
    const value = guest[key];
    console.log(value);
    console.log(key);
}