// Define a class to represent quality and required bandwidth
class Quality {
    constructor(quality, required) {
        this.quality = quality;
        this.required = required;
    }
}

function selectStreamQuality(bandwidth, qualities) {
    // qualities filter
    const available = qualities.filter(q => q.required <= bandwidth);

    if(available.length === 0) {
    return "No Quality Available";
    }

    // sort by required minimum bandwidth 
    available.sort((a,b) => b.required - a.required)

    return available[0].quality;
}

const bandwidth = 180;
const qualities = [ 
  { quality: "360p", required: 500 },
  { quality: "1440p", required: 8000 },
  { quality: "360p", required: 500 },
  { quality: "4K", required: 15000 },
  { quality: "240p", required: 300 },
  { quality: "8K", required: 30000 },
  { quality: "720p", required: 3000 },
  { quality: "240p", required: 300 },
  { quality: "720p", required: 3000 },
  { quality: "240p", required: 300 }
];

console.log(selectStreamQuality(bandwidth, qualities));