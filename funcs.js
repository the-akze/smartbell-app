var funcs = {
    getFormattedDate: () => {
        var date=new Date();return `${date.getFullYear()}-${(date.getMonth()+1).toString()}-${date.getDate().toString()}`;
    }
}

export default funcs;