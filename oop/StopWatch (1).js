
const sw={
    starttime:null,
    stoptime:null,
    start:function(){
        if(this.starttime)
            throw new Error("shway shaway")
        this.starttime= new Date();
    },
    stop:function(){
        if(!this.starttime)
            throw new Error('waqaaf ya zalme')
        this.stoptime = new Date();
    },
    duration:function(){
        let lap = (this.stoptime -this.starttime) /1000
        console.log(lap)
    },
    reset:function(){
        this.starttime=null;
        this.stoptime=null;
    }
};



